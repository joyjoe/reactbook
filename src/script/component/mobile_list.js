import React, { Component } from 'react';

import { Row, Col } from "antd";

// import { Link } from "react-router";
import { Link } from "react-router-dom";
import Tloader from "react-touch-loader";

/**
 * Properties
 * 1. type
 * 2. count
 */
class MobileList extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      initializing: 1,
      hasMore: false,
      count: 5
    };

    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentWillMount() {
    // fetch news
    /* fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`, {
      method: "GET"
    }).then(response => response.json())
      .then(json => {
        this.setState({
          news: json
        });
      }); */

    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.state.count}`, {
      method: "GET"
    }).then(response => response.json())
      .then(json => {
        this.setState({
          news: json
        });
      });
  }

  componentDidMount() {
    this.setState((prevState, props) => ({
      hasMore: true,
      initializing: 2
    }));
  }

  handleLoadMore(resolve) {
    setTimeout(() => {
      this.setState((prevState, props) => ({
        initializing: 1,
        count: prevState.count + 5,
        hasMore: prevState.count > 0 && prevState.count < 50
      }));

      fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.state.count}`, {
        method: "GET"
      }).then(response => response.json())
        .then(json => {
          this.setState({
            news: json
          });
          resolve();
        });
    }, 2e3);
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
          <Tloader initializing={ initializing } hasMore={ hasMore } onLoadMore={ this.handleLoadMore }>
            { newsList }
          </Tloader>
          </Col>
        </Row>
      </div>
      );
  }
}

export default MobileList;
