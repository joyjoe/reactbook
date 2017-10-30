import React, { Component } from 'react';
import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";

import PCIndex from "./component/pc_index";
import PCNewsDetail from "./component/pc_news_detail";
import PCUserCenter from "./component/pc_user_center";

import MobileIndex from "./component/mobile_index";
import MobileNewsDetail from "./component/mobile_news_detail";


require("../style/pc.css");
require("../style/mobile.css");
// import "antd/dist/antd.css";

// 引入react-router
// import { Router, Route, Link, hashHistory } from "react-router";
// react-router4.0版本之后
import { hashHistory, BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ PCIndex }></Route>
              <Route path="/details/:uniquekey" component={ PCNewsDetail }></Route>
              <Route path="/user" component={ PCUserCenter }></Route>
            </Switch>
          </BrowserRouter>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 980px)">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ MobileIndex }></Route>
              <Route path="/details/:uniquekey" component={ MobileNewsDetail }></Route>
            </Switch>
          </BrowserRouter>
        </MediaQuery>
      </div>
      );
  }
}

export default App;

ReactDOM.render((<App/>), document.getElementById("mainContainer"));