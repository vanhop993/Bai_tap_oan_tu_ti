import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { dt, xemChiTietSP, themGH } = this.props;
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
            <button className="btn btn-danger" onClick={() => themGH(dt)}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
