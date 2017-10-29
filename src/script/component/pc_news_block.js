import React, { Component } from 'react';

import { Card } from "antd";

// import { Link } from "react-router";
import { Link } from "react-router-dom";

/**
 * Properties
 * 1. type
 * 2. count
 */
class PCNewsBlock extends Component {
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
    const {news} = this.state;
    const newsList = (news && news.length !== 0) ? news.map((item, index) => {
      return (<li key={ index }>
                <Link to={ `details/${item.uniquekey}` } target="_blank">
                { item.title }
                </Link>
              </li>);
    }) :
      '加载失败请重试';

    return (
      <div class="topNewsList">
        <Card>
          <ul>
            { newsList }
          </ul>
        </Card>
      </div>
      );
  }
}

export default PCNewsBlock;
