import React, { Component } from "react";
import { Row, Col, BackTop } from "antd";

import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";
import Comments from "./comments";

class MobileNewsDetail extends Component {
  constructor() {
    super();
    this.state = {
      "newsdetail": []
    };
  }

  componentDidMount() {
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.params.uniquekey}`, {
      "method": "GET"
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          "newsdetail": json
        });
        window.document.title = `${this.state.newsdetail.title}` + "- React News | React 驱动的新闻平台";
      });
  }

  createMarkup() {
    return {
      "__html": this.state.newsdetail.pagecontent
    };
  }

  render() {
    return (
      <div>
        <MobileHeader></MobileHeader>
        <div class="mobileList">
          <Row>
            <Col span="24" className="container">
            <div className="articleContainer" dangerouslySetInnerHTML={ this.createMarkup() }></div>
            <hr/>
            { /* 评论 */ }
            <Comments uniquekey={ this.props.params.uniquekey } />
            </Col>
          </Row>
        </div>
        <MobileFooter></MobileFooter>
        <BackTop />
      </div>
      );
  }
}

export default MobileNewsDetail;
