import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem.js';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const news =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [TotalResults, setTotalResults] = useState(0)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

        document.title= `${capitalizeFirstLetter(props.category)}- NewsMonkey`;

    const updateNews= async()=>{
      props.setProgress(10);
      setLoading(true)
      const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
        let data= await fetch(url);
        props.setProgress(30);
        let parseddata= await data.json();
        props.setProgress(70);
        setArticles(parseddata.articles)
        setTotalResults(parseddata.TotalResults)
        setLoading(false)
      props.setProgress(100);
    }
    useEffect(() => {
      updateNews();
    }, [])
  
  const fetchMoreData = async () => {
    let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page+1)
        let data= await fetch(url);
        let parseddata= await data.json();
        setArticles(articles.concat(parseddata.articles))
        setTotalResults(parseddata.TotalResults)
        setLoading(false)
  };

    return (
        <>
        <h1 className='text-center' style={{margin:"35px 0px"}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==TotalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
          {articles.map((element)=>{
            return <div className="col md-4" key={element.url}>
              <Newsitem  title={element.title?element.title:""} description={element.description?element.description : "" } imageurl={element.urlToImage} newsurl={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />
            </div>     
          })}
        </div> 
        </div>
      </InfiniteScroll>
      </>
    )
  }

news.defaultProps={
  country: 'in',
  pagesize: 8,
  category: 'general'
}
news.propTypes={
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
}

export default news