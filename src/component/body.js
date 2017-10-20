var React = require("react");
var ReactDOM = require("react-dom");
import {Button} from "antd-mobile";

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      stateMenu: [
        "State状态机", "生命周期方法", "API调用"
      ],
      flag: "\u0025"
    }
  }
  render() {
    setTimeout(() => {
      this.setState({
        "stateMenu": ["状态机", "生命周期方法", "API方法"]
      });
    }, 4000);
    var menus = ["1. React的优势", "2. React的教程", "3. React的未来"];
    return (
      <div>
        <p>
          目录
        </p>
        <ul>
          <li>
            {menus[0]}
          </li>
          <li>
            {menus[1]}
            <ul>
              <li>
                2.1 React的安装
              </li>
              < li>
                2.2 React的组件
              </li>
              {/* JSX如何编写注释 */}<li>
                2.3 React的JSX
              </li>
              <li>
                {this.state.flag}
                2.4 React的State
                <ul>
                  <li>
                    {this.state.stateMenu[0]}
                  </li>
                  <li>
                    {this.state.stateMenu[1]}</li>
                  <li>
                    {this.state.stateMenu[2]}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {menus[2]}
          </li>
        </ul>
        <hr/>
        <Button>快速开始</Button>
      </div>
    );
  }
}