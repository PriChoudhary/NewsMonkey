
import React from 'react'

const newsitem =(props) =>{
    
      let {title, description, imageurl, newsurl, author, source, date}= props;
    return (
        <div className="card my-5" style={{width: "320px"}}  >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
          <span className=" rounded-pill bg-danger text-light " >{source}</span>
          </div>
        <img src={imageurl ? imageurl :"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
          <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">read more</a>
          <div className="priya"></div>
        </div>
      </div>
    )
  }

export default newsitem