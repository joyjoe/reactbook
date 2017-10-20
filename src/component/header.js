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

// import "../style/header.css";
import HeaderStyle from "../style/header.css";

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      scale: false
    };
  }

  changeSize(){
    this.setState({
      scale: !this.state.scale
    });
  }

  render(){
    const styleHeader = {
      // "backgroundColor" : "#2ef",
      "paddingBottom" : "14px",
      "margin": "10px auto 15px",
      "color": "#f60",
      "fontSize": (this.state.scale ? "24px":"16px")
    };
    // return (
    //   <header style={styleHeader} class="bg-cartoon" onClick={this.changeSize.bind(this)} >
    //     <h1>APP信息:</h1>
    //     <p><span>name:{this.props.appName}</span>/<span>version:{this.props.appVersion}</span>/<span>author:<span>{this.props.appAuthor}</span></span></p>
    //   </header>
    // );
    return (
      <header class={HeaderStyle.header} onClick={this.changeSize.bind(this)} >
        <h1>APP信息:</h1>
        <p><span>name:{this.props.appName}</span>/<span>version:{this.props.appVersion}</span>/<span>author:<span>{this.props.appAuthor}</span></span></p>
      </header>
    );
  }
}

module.exports = Header;

