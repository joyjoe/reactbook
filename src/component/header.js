/**
 * this is Header component
 * 
 */

// es6
/* import React from "react";
import ReactDOM from "react-dom";

export default class Header extends React.Component{
  render(){
    return (
      <h1>这就是头部组件</h1>
    );
  }
} */


// commonjs
var React = require("react");
var ReactDOM = require("react-dom");

class Header extends React.Component{
  render(){
    return (
      <header>
        <h1>这就是头部组件</h1>
      </header>
    );
  }
}

module.exports = Header;

