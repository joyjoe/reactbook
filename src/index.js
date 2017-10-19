var React = require("react");
var ReactDOM = require("react-dom");

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

ReactDOM.render(
  (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  ),
  document.getElementById("text")
);