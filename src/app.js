import React from "react";
import ReactDOM from "react-dom";
// import {Route, Router, Link, hashHistory} from "react-router";
import Index from "./script/index";
import List from "./script/list";

// import PropTypes from "prop-types";

class App extends React.Component {
  // Route组件必须指定history属性
  // render() {
  //   return (
  //     <Router history={ hashHistory }>
  //       <Route component={ Index } path="/">
  //         <Route component={ List } path="list"></Route>
  //       </Route>
  //     </Router>
  //   );
  // }

  render(){
    return (
      <div>
        {<Index appName={"myApp"} appVersion="1.0.0" appAuthor="joyjoe" />}
        <List />
        {/* <Index></Index> */}
        <p>react</p>
      </div>
    );
  }
}

ReactDOM.render((<App></App>), document.getElementById("app"));