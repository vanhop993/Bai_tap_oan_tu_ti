import React, { Component } from "react";
import LuaChon from "./LuaChon";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <>
        <div
          className="speech-bubble bg-light"
          style={{ width: "80px", height: "80px", margin: "auto" }}
        >
          <img
            src={this.props.luaChon.hinhAnh}
            alt={this.props.luaChon.hinhAnh}
            width={75}
            height={75}
            style={{
              marginTop: "2px",
            }}
          />
        </div>
        <img
          src="./img/bai_tap_oan_tu_ti/player.png"
          alt="player.png"
          width={120}
          height={150}
        />
        <div>
          <LuaChon />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    luaChon: state.Bai_tap_oan_tu_ti.luaChon,
  };
};

export default connect(mapStateToProps)(Player);
