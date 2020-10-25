import React, { Component } from "react";

export default class Laptop extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <div className="card bg-light" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src="./img/bai_dienthoai/lt_rog.png"
            alt="Card image"
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">ASUS ROG</h4>
            <p className="card-text">
              the Asus ROG Strix Flare is the latest addition to Asus' lineup of
              ROG branded devices
            </p>
            <a href="#" className="btn btn-primary">
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
