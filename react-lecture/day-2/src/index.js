import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Router, Route, hashHistory } from 'react-router'; 
///Routes
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import Store from './Store';
import ProductDetails from './ProductDetails'
///Style
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}> 
    <Route component={NavBar}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/store" component={Store} />
      <Route path="/product/:id" component={ProductDetails} />
    </Route>
  </Router>,
  document.getElementById('root')
);
