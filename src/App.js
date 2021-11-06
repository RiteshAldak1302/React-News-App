import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//for making class based component in App.js use rcc shortcut
export default class App extends Component {

  apiKey= process.env.REACT_APP_NEWS_API_KEY ;

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route  exact path="/">
              <News pageSize={9} key="general" apiKey={this.apiKey} Country="in" category="general" />
            </Route>
            <Route exact path="/technology">
              <News pageSize={9} key="technology"  apiKey={this.apiKey} Country="in" category="technology" />
            </Route>
            <Route exact path="/science">
              <News pageSize={9} key="science"  apiKey={this.apiKey} Country="in" category="science" />
          </Route>apiKey={this.apiKey} 
            <Route exact path="/sports">
              <News pageSize={9} key="sports"  apiKey={this.apiKey} Country="in" category="sports" />
            </Route>
            <Route exact path="/generalhealth">
              <News pageSize={9} key="health"  apiKey={this.apiKey} Country="in" category="health" />
            </Route>
            <Route exact path="/entertainment">
              <News pageSize={9} key="entertainment"  apiKey={this.apiKey} Country="in" category="entertainment" />
            </Route>
            <Route exact path="/business">
              <News pageSize={9} key="business"  apiKey={this.apiKey} Country="in" category="business" />
            </Route>
          </Switch>
        </div>
    </Router >
      


        
    )
  }
}


