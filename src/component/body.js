var React = require("react");
var ReactDOM = require("react-dom");

export default class Body extends React.Component{
  render(){
    var menus = ["1. React的优势","2. React的教程","3. React的未来"];
    return (
      <div>
        <p>目录</p>
        <ul>
          <li>{menus[0]}</li>
          <li>{menus[1]}</li>
            <ul>
              <li>2.1 React的安装</li>
              <li>2.2 React的组件</li>
              {/* JSX如何编写注释 */}
              <li>2.3 React的JSX</li>
            </ul>
          <li>{menus[2]}</li>
        </ul>
      </div>
    );
  }
}