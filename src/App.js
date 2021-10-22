import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

//for making class based component in App.js use rcc shortcut
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News   pageSize='6 ' Country="in"/>
      </div>
    )
  }
}


