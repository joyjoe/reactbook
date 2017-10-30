import React, { Component } from 'react';

import { Row, Col } from "antd";

// import { Link } from "react-router";
import { Link } from "react-router-dom";
import ReactPullToRefresh from "react-pull-to-refresh";

/**
 * Properties
 * 1. type
 * 2. count
 */
class MobileList extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentWillMount() {
    // fetch news
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`, {
      method: "GET"
    }).then(response => response.json())
      .then(json => {
        this.setState({
          news: json
        });
      });
  }

  handleRefresh(resolve, reject) {
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=yule&count=1`, {
      method: "GET"
    }).then(response => response.json())
      .then(json => {
        this.setState({
          news: json
        });
        resolve();
      });
  }

  render() {
    const {news} = this.state;
    const newsList = (news && news.length !== 0) ? news.map((item, index) => {
      return (
        <section className="m_article list-item special_section clearfix" key={ index }>
          <Link to={ `details/${item.uniquekey}` } target="_blank">
          <div className="m_article_img">
            <img src={ item.thumbnail_pic_s } alt={ item.title } />
          </div>
          <div className="m_article_info">
            <div className="m_article_title">
              <span>{ item.title }</span>
            </div>
            <div className="m_article_desc clearfix">
              { /* <div className="m_article_desc_l"> */ }
              <span className="m_article_channel">{ item.realtype }</span>
              <span className="m_article_time">{ item.date }</span>
              { /* </div> */ }
            </div>
          </div>
          </Link>
        </section>
        );
    }) :
      '加载失败请重试';

    // Tloader props
    const {initializing, hasMore} = this.state;

    return (
      <div class="topNewsList">
        <Row>
          <Col span="24">
          <ReactPullToRefresh onRefresh={ this.handleRefresh.bind(this) } style={ { textAlign: "center" } }>
            <h3>下拉刷新</h3>
            <div>
              { newsList }
            </div>
          </ReactPullToRefresh>
          </Col>
        </Row>
      </div>
      );
  }
}

export default MobileList;
