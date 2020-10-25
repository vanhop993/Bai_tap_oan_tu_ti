import React, { Component } from "react";
import "./buble.css";
import Computer from "./Computer";
import Player from "./Player";
import Thong_so_ban_choi from "./Thong_so_ban_choi";

export default class Bai_tap_game_oan_tu_xi extends Component {
  render() {
    return (
      <div
        className="fontGame"
        style={{
          backgroundImage: "url(./img/bai_tap_oan_tu_ti/bgGame.png)",
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container text-light text-center">
          <h1>Game Oản Tù Tì</h1>
          <div className="row">
            <div className="col-3 text-center">
              <Player />
            </div>
            <div className="col-6">
              <Thong_so_ban_choi />
            </div>
            <div className="col-3">
              <Computer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
