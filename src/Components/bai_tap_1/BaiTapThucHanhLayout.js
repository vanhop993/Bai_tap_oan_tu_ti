import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}
