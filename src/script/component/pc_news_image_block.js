import React, { Component } from 'react';

import { Card } from "antd";

import { Link } from "react-router";

/**
 * Properties
 * 1. type
 * 2. count
 */
class PCNewsImageBlock extends Component {
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

  render() {
    const styleH3 = {
      display: "block",
      width: this.props.imageWidth,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    };
    const styleImage = {
      display: "block",
      width: this.props.imageWidth,
      height: "90px"
    };
    const {news} = this.state;
    const newsList = (news && news.length !== 0) ? news.map((item, index) => {
      return (
        <div key={ index } className="imageblock">
          <Link to={ `details/${item.uniquekey}` } target="_blank">
          <div className="custom-image">
            <img src={ item.thumbnail_pic_s } style={ styleImage } alt="" />
          </div>
          <div className="custom-card">
            <h3 style={ styleH3 }>{ item.title }</h3>
            <p>
              { item.author_name }
            </p>
          </div>
          </Link>
        </div>
        );
    }) :
      '加载失败请重试';

    return (
      <div class="topNewsList">
        <Card title={ this.props.cartTitle } bordered={ true } style={ { width: this.props.width } }>
          <div className="clearfix">
            { newsList }
          </div>
        </Card>
      </div>
      );
  }
}

export default PCNewsImageBlock;
