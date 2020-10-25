import React, { Component } from "react";
import Smartphone from "./Smartphone";

export default class BestSmartPhone extends Component {
  renderSP = () => {
    let { mangSP, xemChiTietSP } = this.props;
    return mangSP.map((sp, index) => (
      <Smartphone sp={sp} key={index} xemChiTietSP={xemChiTietSP} />
    ));
  };
  render() {
    return (
      <section id="smartphone" className="container-fluid  pt-5 pb-5">
        <h1 class="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">{this.renderSP()}</div>
      </section>
    );
  }
}
