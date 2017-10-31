import React, { Component } from "react";
import { Row, Col } from "antd";

class PCFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <Row>
          <Col span={ 2 }></Col>
          <Col span={ 20 }> © 2017 React News. AllRightsReserved.</Col>
          <Col span={ 2 }></Col>
        </Row>
      </footer>
      );
  }
}

export default PCFooter;
