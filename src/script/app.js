import React, { Component } from 'react';
import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";
import PCIndex from './component/pc_index';
import MobileIndex from './component/mobile_index';
import PCFooter from './component/pc_footer';
import MobileFooter from './component/mobile_footer';
require("../style/pc.css");
require("../style/mobile.css");
// import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <PCIndex />
          <PCFooter />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 980px)">
          <MobileIndex />
          <MobileFooter />
        </MediaQuery>
      </div>
    );
  }
}

export default App;

ReactDOM.render((<App/>), document.getElementById("mainContainer"));