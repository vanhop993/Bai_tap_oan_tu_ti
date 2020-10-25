import React, { Component } from "react";

export default class Smartphone extends Component {
  render() {
    let { sp, xemChiTietSP } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <div className="card bg-light" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src={sp.hinhAnh}
            alt="Card image"
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">{sp.tenSP}</h4>
            <p className="card-text">{sp.gia} vnd</p>
            <a
              href="#"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#modelId"
              onClick={() => xemChiTietSP(sp)}
            >
              Detail
            </a>
            <a href="#" className="btn btn-danger">
              Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}
