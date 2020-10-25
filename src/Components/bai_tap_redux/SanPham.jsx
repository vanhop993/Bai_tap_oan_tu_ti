import React, { Component } from "react";
// kết nối với reduxStore
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { dt, xemChiTietSP, themGioHang } = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <img
            className="card-img-top"
            src={dt.hinhAnh}
            alt
            width={200}
            height={350}
          />
          <div className="card-body text-center">
            <h4 className="card-title">{dt.tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={() => xemChiTietSP(dt)}
            >
              Xem chi tiết
            </button>
            <button className="btn btn-danger" onClick={() => themGioHang(dt)}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    // tạo ra props component (là function => đưa dữ liệu lên store);
    themGioHang: (sp) => {
      const spGioHang = {
        maSP: sp.maSP,
        tenSP: sp.tenSP,
        giaBan: sp.giaBan,
        soLuong: 1,
        hinhAnh: sp.hinhAnh,
      };
      // tạo action đưa dữ liệu lên reducer
      const action = {
        type: "them_gio_hang", // bắt buộc đặt tên type
        spGioHang, // dữ liệu đưa lên reducer
      };
      // dùng hàm dispatch đưa action lên reducer
      dispatch(action);
    },
    xemChiTietSP: (sp) => {
      const action = {
        type: "xem_chi_tiet_sp",
        sp,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
