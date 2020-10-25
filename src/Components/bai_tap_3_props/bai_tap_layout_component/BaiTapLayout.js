import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import BestSmartPhone from "./BestSmartPhone/BestSmartPhone";
import BestLaptop from "./BestLaptop/BestLaptop";
import PromotionAll from "./Promotion/PromotionAll";
import Modal from "./modalChiTietSP/Modal";

export default class BaiTapLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SPModal: this.mangSP[0],
    };
  }
  xemChiTietSP = (sp) => {
    this.setState({
      SPModal: sp,
    });
  };
  mangSP = [
    {
      maSP: 1,
      tenSP: "Blackberry",
      hinhAnh: "./img/bai_dienthoai/sp_blackberry.png",
      gia: 1500,
    },
    {
      maSP: 2,
      tenSP: "Iphone X",
      hinhAnh: "./img/bai_dienthoai/sp_iphoneX.png",
      gia: 2000,
    },
    {
      maSP: 3,
      tenSP: "Samsung Note7",
      hinhAnh: "./img/bai_dienthoai/sp_note7.png",
      gia: 3000,
    },
    {
      maSP: 4,
      tenSP: "Vivo 850",
      hinhAnh: "./img/bai_dienthoai/sp_vivo850.png",
      gia: 1000,
    },
  ];

  render() {
    return (
      <body className="bg-dark">
        <Header />
        <Carousel />
        <BestSmartPhone mangSP={this.mangSP} xemChiTietSP={this.xemChiTietSP} />
        <Modal SPModal={this.state.SPModal} />
        <BestLaptop />
        <PromotionAll />
      </body>
    );
  }
}
