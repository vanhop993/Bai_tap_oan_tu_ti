import React, { Component } from "react";
import { connect } from "react-redux";
import { playerLuaChon } from "../../Redux/Action/Bai_tap_oan_tu_ti_Action";

class LuaChon extends Component {
  renderLuaChon = () =>
    this.props.mangLuaChon.map((luaChon, index) => (
      <button
        className="btn mr-1 bg-light"
        key={index}
        onClick={() => this.props.dispatch(playerLuaChon(luaChon))}
      >
        <img
          src={luaChon.hinhAnh}
          alt={luaChon.hinhAnh}
          width={50}
          height={50}
        />
      </button>
    ));

  render() {
    return <div>{this.renderLuaChon()}</div>;
  }
}

const mapStateToProsp = (state) => {
  return {
    mangLuaChon: state.Bai_tap_oan_tu_ti.mangLuaChon,
  };
};
export default connect(mapStateToProsp)(LuaChon);
