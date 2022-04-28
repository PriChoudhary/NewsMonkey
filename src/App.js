import './App.css';

import React, { useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  
 const apikey= process.env.REACT_APP_API_KEY

  const [progress, setProgress] = useState(10)

    return (
      <>
        <Router>
          <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height = {3}
        />
          <Switch>
            <Route exact path="/"><News key="general" setProgress={setProgress} apikey={apikey}   pagesize={6} country="in" category="general" /> </Route>
            <Route exact path="/entertainment"><News key="entertainment" setProgress={setProgress} apikey={apikey} pagesize={6} country="in" category="entertainment" /> </Route>
            <Route exact path="/business"><News  key="business" setProgress={setProgress} apikey={apikey} pagesize={6} country="in" category="business" /> </Route>
            <Route exact path="/health"><News key="health"  setProgress={setProgress} apikey={apikey} pagesize={6} country="in" category="health" /> </Route>
            <Route exact path="/science"><News key="science" setProgress={setProgress} apikey={apikey} pagesize={6} country="in" category="science" /> </Route>
            <Route exact path="/sports"><News key="sports" setProgress={setProgress} apikey={apikey} pagesize={6} country="in" category="sports" /> </Route>
            <Route exact path="/technology"><News key="technology" setProgress={setProgress} apikey={apikey}  pagesize={6} country="in" category="technology" /> </Route>
          </Switch>
        </Router>
      </>
    )
  }
  export default App;