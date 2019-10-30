import React, { Component } from 'react';
import './App.css';
import Template from './views/Template';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './views/home/About';
import Service from './views/home/Service';
import Works from './views/home/Works';
import Blog from './views/home/Blog';
import Contacts from './views/home/Contacts';
import $ from 'jquery';

export default class App extends Component {
  // componentDidMount(){
  //   console.log("app : it mount");
  //   var url = $(location).attr('pathname');
  //   console.log("URL : "+url);
  //   $(".page-scroll").filter(function () {
  //       return $(this).attr("href")==url;
  //   }).parent().addClass("active");
  // }

  render() {
    return (
      <Template intro={true} />
      // <Router>
      //   <Switch>
      //     console.log("path")
      //     <Route exact path="/">
      //       <Template intro={true}/>
      //     </Route>
      //     <Route path="/about">
      //       <Template component={<About/>} />
      //     </Route>
      //     <Route path="/service">
      //       <Template component={<Service/>} />
      //     </Route>
      //     <Route path="/blog">
      //       <Template component={<Blog/>} />
      //     </Route>
      //     <Route path="/work">
      //       <Template component={<Works/>} />
      //     </Route>
      //     <Route path="/contact">
      //       <Template component={<Contacts/>} />
      //     </Route>
      //   </Switch>
      // </Router>
    );
  }
}
