import React, { Component } from 'react';
var ReactDOM = require("react-dom");
import PropTypes from 'prop-types';

// import Header from "./component/header";
var Header = require("./component/header");
import Body from "./component/body";
import Footer from "./component/footer";

// ReactDOM.render(<h1> React.js is your best choice! </h1>,
//   document.getElementById("text")
// );

// ReactDOM.render(<Header></Header>,
//   document.getElementById("text")
// );


function changeAddress(){
  this.props.address = "朝外大街乙6号朝外soho-A座1106";
};

class App extends Component {

  constructor(){
    super();
    this.state = {
      address: "soho"
    }
    this.changeAddress = this.changeAddress.bind(this);
    // this.changeTel = this.changeTel.bind(this);
    
    // this.changeTel = this.changeTel.bind(this, val);
  }

  changeAddress(){
    this.setState({
      address : "朝外大街乙6号soho-A座1106"
    });
  }

  changeTel(val, ev){
    console.log('ev = ', ev);
    console.log(ev.target);
    console.log("val = ", val);
    this.setState({
      tel: ev.target.value
    });
  }

  render() {
    var val = "address";
    return (
      <div>
      <Header {...this.props} />
      <Body/>
      <p>原来的值: {this.state.address}</p>
      <hr/>
      <Footer tel={this.state.tel} address={this.state.address} changeAddress={this.changeAddress} changeTel={this.changeTel.bind(this, val)} />
    </div>
    );
  }
}

// 为组件属性定义类型检测
// import "prop-types"
// component.propTypes = {propName: PropTypes.any} PropTypes.string.isRequired
App.propTypes = {
  appName: PropTypes.string.isRequired
}
// 为组件属性定义默认值
// defaultProps
App.defaultProps = {
  appName: "componyInfoSearch"
}

export default App;

var appName;
appName = "companyInfo";
// appName = 5;

ReactDOM.render(
  (
    <App appName={appName} appVersion="1.0.0" appAuthor="joyjoe" />
  ),
  document.getElementById("text")
);
