import React, {Component} from 'react';
import {Row, Col} from "antd";
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import logoImage from "../../image/logo.png";
// add register module
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class MobileHeader extends Component {
  render() {
    console.log(this.props);
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <div className="mobileheader">
        <header>
          <Row>
            <Col span={2}></Col>
            <Col span={16}>
              <a href="/" className="logo">
                <img src={logoImage} alt="logo"/>
                <span>React News</span>
              </a>
            </Col>
            <Col span={2}></Col>
          </Row>
        </header>
      </div>
    );
  }
}

export default MobileHeader;
