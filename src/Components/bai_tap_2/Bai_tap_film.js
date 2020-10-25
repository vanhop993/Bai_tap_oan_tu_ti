import React, { Component } from "react";
import dataFilm from "../../data/dataFilm.json";

export default class Bai_tap_film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangFilm: dataFilm,
    };
  }

  renderMangFilm = () => {
    return this.state.mangFilm.map((film, index) => {
      return (
        <div className="card col-4" key={index}>
          <img
            className="card-img-top"
            src={film.hinhAnh}
            alt={film.biDanh}
            width={200}
            height={350}
          />
          <div className="card-body">
            <h4 className="card-title">{film.tenPhim}</h4>
            <p className="card-text">
              {film.moTa.length > 100
                ? film.moTa.substr(0, 100) + "..."
                : film.moTa}
            </p>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.state.mangFilm);
    return (
      <div className="container">
        <div className="row">{this.renderMangFilm()}</div>
      </div>
    );
  }
}
