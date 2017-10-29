import React, { Component } from 'react';
import { Row, Col, BackTop } from "antd";

import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";
import PCNewsImageBlock from "./pc_news_image_block";

import util from "../util";
import Comments from "./comments";

class PCNewsDetail extends Component {
  constructor() {
    super();
    this.state = {
      newsdetail: []
    };
  }

  componentDidMount() {
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.match.params.uniquekey}`, {
      method: "GET"
    }).then((response) => response.json()).then((json) => {
      this.setState({
        newsdetail: json
      });
      window.document.title = `${this.state.newsdetail.title}` + "- React News | React 驱动的新闻平台";
    });
  }

  createMarkup() {
    return {
      __html: this.state.newsdetail.pagecontent
    };
  }

  render() {
    return (
      <div>
        <PCHeader></PCHeader>
        <Row>
          <Col span="2"></Col>
          <Col span="14" className="container">
          <div className="articleContainer" dangerouslySetInnerHTML={ this.createMarkup() }></div>
          <hr/>
          { /* comments */ }
          <Comments uniquekey={ this.props.match.params.uniquekey } />
          </Col>
          <Col span="6">
          { /* 右侧的新闻推荐 */ }
          <PCNewsImageBlock count="40" type={ util.getType(this.state.newsdetail.type) } width="100%" imageWidth="150px"></PCNewsImageBlock>
          </Col>
          <Col span="2"></Col>
        </Row>
        <PCFooter></PCFooter>
        <BackTop />
      </div>
      );
  }
}

export default PCNewsDetail;
