import React, { Component } from "react";
// 导入 antd
import { Tabs, Carousel } from "antd";
const TabPane = Tabs.TabPane;

import MobileHeader from "./mobile_header";
import MobileList from "./mobile_list";
import MobileListPullRefresh from "./mobile_list_pullrefresh";
import MobileFooter from "./mobile_footer";

// 导入 图片资源
import CarouselPic1 from "../../image/carousel_1.jpg";
import CarouselPic2 from "../../image/carousel_2.jpg";
import CarouselPic3 from "../../image/carousel_3.jpg";
import CarouselPic4 from "../../image/carousel_4.jpg";

class MobileIndex extends Component {
  render() {
    const settings = {
      "effect": "fade",
      "dots": true,
      "autoplay": true,
      "easing": "ease-in-out"
    };
    return (
      <div>
        <MobileHeader></MobileHeader>
        { /* 页面主体 start */ }
        { /* 头部导航 */ }
        <Tabs>
          <TabPane tab="头条" key="top">
            <Carousel {...settings}>
              <div><img src={ CarouselPic1 } alt="CarouselPic1" /></div>
              <div><img src={ CarouselPic2 } alt="CarouselPic2" /></div>
              <div><img src={ CarouselPic3 } alt="CarouselPic3" /></div>
              <div><img src={ CarouselPic4 } alt="CarouselPic4" /></div>
            </Carousel>
            <MobileList type="top" count="20"></MobileList>
          </TabPane>
          <TabPane tab="社会" key="shehui">
            <MobileList type="shehui" count="20"></MobileList>
          </TabPane>
          <TabPane tab="国内" key="guonei">
            <MobileList type="guonei" count="20"></MobileList>
          </TabPane>
          <TabPane tab="国际" key="guoji">
            { /* <MobileList type="guoji" count="20"></MobileList> */ }
            <MobileListPullRefresh type="guoji" count="5"></MobileListPullRefresh>
          </TabPane>
          <TabPane tab="娱乐" key="yule">
            <MobileList type="yule" count="20"></MobileList>
          </TabPane>
          <TabPane tab="体育" key="tiyu">
            <MobileList type="tiyu" count="20"></MobileList>
          </TabPane>
          <TabPane tab="科技" key="keji">
            <MobileList type="keji" count="20"></MobileList>
          </TabPane>
          <TabPane tab="时尚" key="shishang">
            <MobileList type="shishang" count="20"></MobileList>
          </TabPane>
        </Tabs>
        { /* 页面主体 end */ }
        <MobileFooter></MobileFooter>
      </div>
      );
  }
}

export default MobileIndex;
