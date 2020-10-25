import React, { Component } from "react";
import SideBar from "./SideBar/SideBar";
import Carousel from "./Carousel/Carousel";
import ProductItems from "./Product/ProductItems";

export default class Container extends Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <Carousel />
            <div className="row mt-4">
              <ProductItems />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
