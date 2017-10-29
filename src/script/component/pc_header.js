import React, { Component } from 'react';
import { Route, Router, Link } from "react-router";
import { Row, Col, Menu, Icon, Form, Input, Button, Modal, Tabs, message } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

// 导入第三方工具库 import 'whatwg-fetch'; import fetch from "fetch"; 导入资源 image css
import logoImage from "../../image/logo.png";

// 常量
// 1. 注册登录url
const config = {
  "r_s_url": "http://newsapi.gugujiankong.com/Handler.ashx" //?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword
};

class PCHeader extends Component {
  state = {
    current: "mail",
    userNickName: "",
    userId: 0,
    hasLogined: false,
    modalVisible: false,
    action: "login"
  }

  // life method
  componentWillMount() {
    if (localStorage.getItem("userId") !== "") {
      this.setState({
        "userNickName": localStorage.getItem("userNickName")
      });
      this.setState({
        "userId": localStorage.getItem("userId")
      });
    }
  }

  handleClick = (e) => {
    if (e.key == 'register') {
      this.setState({
        current: "register"
      });
      this.setModalVisible(true);
    } else if (e.key == "logout") {
      // 处理退出操作
      localStorage.removeItem("userNickName");
      localStorage.removeItem("userId");
      this.setState({
        hasLogined: false,
        current: e.key
      });
    } else if (e.key == "settings") {
      this.setState({
        current: e.key
      });
    } else {
      this.setState({
        current: e.key
      });
    }
  }

  // 是否显示模态框
  setModalVisible(flag) {
    this.setState({
      modalVisible: flag
    });
  }

  // 处理模态框提交
  handleModalSubmit(e) {
    console.log(e);
    e.preventDefault();
    this.props.form.validateFields((err, value) => {
      if (err) {
        message.warn("数据格式不对");
      } else {
        // 发送请求 fetch
        fetch(`${config["r_s_url"]}?action=${this.state.action}&username=${value.s_username}&password=${value.s_password}&r_userName=${value.r_username}&r_password=${value.r_password}&r_confirmPassword=${value.r_confirmPassword}`, {
          method: "GET"
        }).then((response) => {
          return response.json();
        }).then((json) => {
          this.setState({
            userNickName: json.NickUserName,
            userId: json.UserId
          });
          message.success("请求成功！");
          this.setState({
            hasLogined: true
          });
          this.setModalVisible(false);
          // setting localStorage
          localStorage.setItem("userNickName", json.NickUserName);
          localStorage.setItem("userId", json.UserId);
        });
      }
    });
  }

  // 处理登录/注册标签页切换
  handleTabAction(activeKey) {
    console.log(activeKey);
    if (activeKey == "tab.register") {
      this.setState({
        action: "register"
      });
    } else if (activeKey == "tab.login") {
      this.setState({
        action: "login"
      });
    }
  }

  render() {
    // 使用Field.create方法包裹后的组件自带this.props.form属性，提供了getFieldValue方法
    // 但是当前老版本还是支持getFieldProps const {getFieldProps} = this.props.form;
    const {getFieldDecorator} = this.props.form;

    const userShow = this.state.hasLogined
      ? (
      <Menu.Item key="logout">
        <Menu mode="horizontal">
          <SubMenu title={ <Button type="primary" htmlType="button">
                             { this.state.userNickName }
                           </Button> }>
            <Menu.Item key="settings">
              { /* 个人中心 */ }
              <Link to="user" target="_blank">个人中心</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout" on>退出</Menu.Item>
          </SubMenu>
        </Menu>
      </Menu.Item>
      )
      : (
      <Menu.Item key="register">
        <Icon type="appstore" />注册/登录
      </Menu.Item>
      );
    return (
      <header>
        <Row>
          <Col span={ 2 }></Col>
          <Col span={ 4 }>
          <a href="/" className="logo">
            { /* 为什么这里的图片不会经过webpack打包？ */ }
            { /* <img src="../../image/logo.png" alt="logo"/> */ }
            <img src={ logoImage } alt="logo" />
            <span>React News</span>
          </a>
          </Col>
          <Col span={ 16 }>
          <Menu onClick={ this.handleClick } selectedKeys={ [this.state.current] } mode="horizontal">
            <Menu.Item key="top">
              <Icon type="appstore" />头条
            </Menu.Item>
            <Menu.Item key="shehui">
              <Icon type="appstore" />社会
            </Menu.Item>
            <Menu.Item key="guonei">
              <Icon type="appstore" />国内
            </Menu.Item>
            <Menu.Item key="guoji">
              <Icon type="appstore" />国际
            </Menu.Item>
            <Menu.Item key="yule">
              <Icon type="appstore" />娱乐
            </Menu.Item>
            <Menu.Item key="tiyu">
              <Icon type="appstore" />体育
            </Menu.Item>
            <Menu.Item key="keji">
              <Icon type="appstore" />科技
            </Menu.Item>
            <Menu.Item key="shishang">
              <Icon type="appstore" />时尚
            </Menu.Item>
            { userShow }
          </Menu>
          { /* 放置隐藏Modal */ }
          <Modal wrapClassName="vertical-center-modal" title="用户中心" visible={ this.state.modalVisible } onCancel={ () => {
                                                                                                                     this.setModalVisible(false)
                                                                                                                   } } onOK={ this.setModalVisible.bind(this, false) } okText="确认身份">
            { /* Tab */ }
            <Tabs type="card" onChange={ this.handleTabAction.bind(this) } defaultActiveKey="tab.login">
              <TabPane tab="注册" key="tab.register">
                { /* Form由FormItem组成 */ }
                <Form horizontal={ true } onSubmit={ this.handleModalSubmit.bind(this) }>
                  <FormItem label="账户">
                    { /* <Input placeholder="请填写您的账户名" {...getFieldProps("r_username")}></Input> */ }
                    { getFieldDecorator("r_username", {})(
                        <Input placeholder="请填写您的账户名"></Input>
                      ) }
                  </FormItem>
                  <FormItem label="密码">
                    { getFieldDecorator("r_password", {})(
                        <Input type="password" placeholder="请填写您的密码"></Input>
                      ) }
                    { /* <Input placeholder="请填写您的密码" {...getFieldProps("r_password")}></Input> */ }
                  </FormItem>
                  <FormItem label="确认密码">
                    { getFieldDecorator("r_confirmPassword", {})(
                        <Input type="password" placeholder="请确认您的密码"></Input>
                      ) }
                    { /* <Input placeholder="请确认您的密码" {...getFieldProps("r_confirmPassword")}></Input> */ }
                  </FormItem>
                  <Button type="primary" htmlType="submit">注册</Button>
                </Form>
              </TabPane>
              <TabPane tab="登录" key="tab.login">
                { /* Form由FormItem组成 */ }
                <Form horizontal={ true } onSubmit={ this.handleModalSubmit.bind(this) }>
                  <FormItem label="账户">
                    { getFieldDecorator("s_username", {})(
                        <Input placeholder="请填写您的账户名"></Input>
                      ) }
                    { /* <Input placeholder="请填写您的账户名" {...getFieldProps("s_username")}></Input> */ }
                  </FormItem>
                  <FormItem label="密码">
                    { getFieldDecorator("s_password", {})(
                        <Input placeholder="请填写您的密码"></Input>
                      ) }
                    { /* <Input placeholder="请填写您的密码" {...getFieldProps("s_password")}></Input> */ }
                  </FormItem>
                  <Button type="primary" htmlType="submit">登录</Button>
                </Form>
              </TabPane>
            </Tabs>
          </Modal>
          </Col>
          <Col span={ 2 }></Col>
        </Row>
      </header>
      );
  }
}

export default PCHeader = Form.create()(PCHeader);
