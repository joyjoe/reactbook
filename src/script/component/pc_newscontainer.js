import React, { Component } from "react";
import { Row, Col, Tabs, Carousel } from "antd";
const TabPane = Tabs.TabPane;

// 导入 图片资源
import CarouselPic1 from "../../image/carousel_1.jpg";
import CarouselPic2 from "../../image/carousel_2.jpg";
import CarouselPic3 from "../../image/carousel_3.jpg";
import CarouselPic4 from "../../image/carousel_4.jpg";

// 导入组件
import PCNewsBlock from "./pc_news_block";
import PCNewsImageBlock from "./pc_news_image_block";

class PCNewsContainer extends Component {
  render() {
    const settings = {
      "effect": "fade",
      "dots": true,
      "autoplay": true,
      "easing": "ease-in-out"
    };
    return (
      <Row className="">
        <Col span={ 2 }></Col>
        <Col span={ 20 } className="container">
        { /* 左上角轮播图 */ }
        <div className="left-container">
          <div className="carousel">
            <Carousel {...settings}>
              <div><img src={ CarouselPic1 } alt="CarouselPic1" /></div>
              <div><img src={ CarouselPic2 } alt="CarouselPic2" /></div>
              <div><img src={ CarouselPic3 } alt="CarouselPic3" /></div>
              <div><img src={ CarouselPic4 } alt="CarouselPic4" /></div>
            </Carousel>
          </div>
          { /* 图片模块 */ }
          <PCNewsImageBlock type="top" count="9" cartTitle="头条新闻" width="400px" imageWidth="112px"></PCNewsImageBlock>
        </div>
        { /* 页面中间新闻展示区 */ }
        <Tabs className="tabs_news">
          <TabPane tab="头条新闻" key="1">
            <PCNewsBlock type="top" count={ 20 } width="100%" bordered="false"></PCNewsBlock>
          </TabPane>
          <TabPane tab="国际新闻" key="2">
            <PCNewsBlock type="guoji" count={ 20 } width="100%" bordered="false"></PCNewsBlock>
          </TabPane>
          <TabPane tab="国内新闻" key="3">
            <PCNewsBlock type="guonei" count={ 20 } width="100%" bordered="false"></PCNewsBlock>
          </TabPane>
          <TabPane tab="时尚新闻" key="4">
            <PCNewsBlock type="shishang" count={ 5 } width="100%" bordered="false"></PCNewsBlock>
          </TabPane>
        </Tabs>
        </Col>
        <Col span={ 2 }></Col>
      </Row>
      );
  }
}

export default PCNewsContainer;
