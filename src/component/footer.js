import React from "react";
import ReactDOM from "react-dom";

export default class Footer extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <footer className="header">
        <address>公司地址:{this.props.address}|公司电话:{this.props.tel}|公司邮箱</address>
        <input type="button" value="修改地址" onClick={this.props.changeAddress} />
        <label>修改电话
          <input type="text" onChange={this.props.changeTel}/>
        </label>
      </footer>
    )
  }
}