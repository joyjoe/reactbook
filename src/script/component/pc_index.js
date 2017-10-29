import React, { Component } from 'react';


import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";
import PCNewsContainer from "./pc_newscontainer";

class PCIndex extends Component {
  render() {
    return (
      <div>
        <PCHeader></PCHeader>
        { /* 页面主体 start */ }
        <PCNewsContainer>
        </PCNewsContainer>
        { /* 页面主体 end */ }
        <PCFooter></PCFooter>
      </div>
      );
  }
}

export default PCIndex;
