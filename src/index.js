import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import Main from './components/Main/Main'
import About from './components/About/About'
import Topics from './components/Topics/Topics'
import Navbar from './components/Navbar/Navbar'

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/topics">
        <Topics />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
