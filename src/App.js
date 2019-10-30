import React, { Component } from 'react';
import './App.css';
import Template from './views/Template';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home/Home';
import Portofolio from './views/portofolio/Portofolio';
import Blog from './views/blog/Blog';

export default class App extends Component {
  render() {
    return (
      <Template intro={true} component={<Home />}/>
      // <Router>
      //   <Switch>
      //     console.log("path")
      //     <Route exact path="/">
      //       <Template intro={true} component={<Home />}/>
      //     </Route>
      //     <Route path="/portofolio">
      //       <Template component={<Portofolio />}/>
      //     </Route>
      //     <Route path="/blog">
      //       <Template component={<Blog />}/>
      //     </Route>
      //   </Switch>
      // </Router>
    );
  }
}
