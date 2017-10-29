import React, { Component } from 'react';

import { Row, Col, Tabs, Card } from "antd";

import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";

const TabPane = Tabs.TabPane;

class PCUserCenter extends Component {
  constructor() {
    super();
    this.state = {
      usercollection: '',
      usercomments: ''
    };
  }

  componentDidMount() {
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=${localStorage.getItem("userId")}`, {
      Method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          usercollection: json
        });
      });

    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=${localStorage.getItem("userId")}`, {
      Method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          usercomments: json
        });
      });
  }

  render() {
    let {usercollection, usercomments} = this.state;
    let usercollectionList = usercollection.length ? usercollection.map((usercollectionItem, index) => (
      <Card key={ index } title={ usercollectionItem.Title } extra={ <a href={ `/#/details/${usercollectionItem.uniquekey}` }>查看</a> }>
        <p>
          { usercollectionItem.Title }
        </p>
      </Card>
    )) : "您还没有收藏任何文章，快去收藏一些吧！！";

    let usercommentsList = usercomments.length ? usercomments.map((usercomment, index) => (
      <Card key={ index } title={ `于 ${usercomment.datetime} 评论了文章${usercomment.uniquekey}` } extra={ <a href={ `/#/details/${usercomment.uniquekey}` }>查看</a> }>
        <p>
          { usercomment.Comments }
        </p>
      </Card>
    )) : "您还没有发表任何评论，快去发言吧！！";

    return (
      <div>
        <PCHeader></PCHeader>
        <Row>
          <Col span="2"></Col>
          <Col span="20">
          <Tabs>
            <TabPane key="1" tab="我的收藏">
              <Row>
                <Col span="24">
                { usercollectionList }
                </Col>
              </Row>
            </TabPane>
            <TabPane key="2" tab="我的评论">
              <Row>
                <Col span="24">
                { usercommentsList }
                </Col>
              </Row>
            </TabPane>
            <TabPane key="3" tab="个人设置"></TabPane>
          </Tabs>
          </Col>
          <Col span="2"></Col>
        </Row>
        <PCFooter></PCFooter>
      </div>
      );
  }
}

export default PCUserCenter;
