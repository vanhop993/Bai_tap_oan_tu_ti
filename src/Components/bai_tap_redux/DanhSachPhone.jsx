import React, { Component } from "react";
import dataPhone from "../../data/dataPhone.json";
import SanPham from "./SanPham";
import GioHang from "./GioHang";
// kết nối redux (connect hàm kết nối reactComponent - reduxStore)
import { connect } from "react-redux";

class DanhSachPhone extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sanPhamChiTiet: dataPhone[0],
  //   };
  // }
  // xemChiTietSP = (dt) => {
  //   this.setState({
  //     sanPhamChiTiet: dt,
  //   });
  // };

  renderSanPham = () => {
    return dataPhone.map((dt, index) => {
      return <SanPham key={index} dt={dt} />;
    });
  };

  render() {
    // let { xemChiTietSP } = this.state;
    let { gioHang, xemChiTiet } = this.props;
    let tinhTongSL = gioHang.reduce((tongSL, spGH, index) => {
      return (tongSL += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <div className="text-right ">
          <a
            className="text-success"
            href=""
            data-toggle="modal"
            data-target="#modelId"
          >
            giỏ hàng <span>({tinhTongSL})</span>
          </a>
          <GioHang />
        </div>
        <div className="row">{this.renderSanPham()}</div>
        <hr />
        <div className="row">
          <div className="col-4 text-center">
            <h3>{xemChiTiet.tenSP}</h3>
            <img
              className="w-100"
              src={xemChiTiet.hinhAnh}
              alt=""
              height={350}
            />
          </div>
          <div className="col-8">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tr>
                <th>Màn hình :</th>
                <th>{xemChiTiet.manHinh}</th>
              </tr>
              <tr>
                <th>Hệ điều hành :</th>
                <th>{xemChiTiet.heDieuHanh}</th>
              </tr>
              <tr>
                <th>Camera trước :</th>
                <th>{xemChiTiet.cameraTruoc}</th>
              </tr>
              <tr>
                <th>Camera sau :</th>
                <th>{xemChiTiet.cameraSau}</th>
              </tr>
              <tr>
                <th>Ram :</th>
                <th>{xemChiTiet.ram}</th>
              </tr>
              <tr>
                <th>Rom :</th>
                <th>{xemChiTiet.rom}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // state : là store tổng , => truy xuất đến GioHangReducer => truy suất đến biến state trên GioHangReducer
  return {
    gioHang: state.GioHangReducer.gioHang,
    xemChiTiet: state.GioHangReducer.xemChiTiet,
  };
};

export default connect(mapStateToProps, null)(DanhSachPhone);
