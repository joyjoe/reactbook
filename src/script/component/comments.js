import React, { Component } from "react";

import { Row, Col, Form, Input, Button, Card, notification } from "antd";

const FormItem = Form.Item;

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: ''
    }
  }

  componentDidMount() {
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${this.props.uniquekey}`, {
      Method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          comments: json
        });
      });
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    let remark = this.props.form.getFieldValue("remark");
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=${localStorage.userId}&uniquekey=${this.props.uniquekey}&commnet=${remark}`, {
      Method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.componentDidMount();
      });
  }

  addUserCollection() {
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=${localStorage.userId}&uniquekey=${this.props.uniquekey}`, {
      Method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        notification.success({
          description: "收藏此文章成功",
          message: "ReactNews提醒"
        });
      });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    let {comments} = this.state;
    let commentsList = comments.length ? comments.map((comment, index) => (
      <Card key={ index } title={ comment.UserName } extra={ <a href="#">发表于&nbsp;{ comment.datetime }</a> }>
        <p>
          { comment.Comments }
        </p>
      </Card>
    )) : "还没有人进行评论";
    return (
      <div>
        <Row>
          <Col span="24">
          { commentsList }
          <Form onSubmit={ this.handleCommentSubmit.bind(this) }>
            <FormItem label="您的评论">
              { /* <Input type="textarea" placeholder="随便写写" {...getFieldProps("remark", {initialValue: ""})} /> */ }
              { getFieldDecorator("remark", {})(
                  <Input placeholder="随便写写" type="textarea" />
                ) }
            </FormItem>
            <Button htmlType="submit" type="primary">提交评论</Button>
            <Button htmlType="button" type="primary" onClick={ this.addUserCollection.bind(this) }>收藏文章</Button>
          </Form>
          </Col>
        </Row>
      </div>
      );
  }
}

export default Comments = Form.create({})(Comments);
