import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="col-4 mb-4">
        <div className="card text-left ">
          <img className="card-img-top" src="./img/product/500x325.png" alt />
          <div className="card-body">
            <h4 className="card-title">
              <a className="text-decoration-none" href="#">
                Item
              </a>
            </h4>
            <p className="card-text">$ 24,99</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo magni sapiente, tempore debitis beatae culpa natus
              architecto.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
