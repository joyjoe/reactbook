import React, {Component} from 'react';
import {Row, Col} from "antd";
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import logoImage from "../../image/logo.png";

class PCHeader extends Component {
  state = {
    current: 'mail'
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({current: e.key});
  }

  render() {
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              {/* 为什么这里的图片不会经过webpack打包？ */}
              {/* <img src="../../image/logo.png" alt="logo"/> */}
              <img src={logoImage} alt="logo"/>
              <span>React News</span>
            </a>
          </Col>
          <Col span = {16} >
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item key="mail">
                <Icon type="mail"/>Navigation One
              </Menu.Item>
              <Menu.Item key="app" disabled>
                <Icon type="appstore"/>Navigation Two
              </Menu.Item>
              <SubMenu
                title={<span> <Icon type="setting"/>Navigation Three - Submenu </span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  }
}

export default PCHeader;