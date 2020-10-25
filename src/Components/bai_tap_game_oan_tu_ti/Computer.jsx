import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
      0% {top: -50px;}
      25% {top:100px;}
      50% {top: -50px;}
      75% {top:100px;}
      100% {top:0}
  }`;
    return (
      <>
        <style>{keyframe}</style>
        <div
          className="speech-bubble bg-light position-relative"
          style={{
            width: "80px",
            height: "80px",
            margin: "auto",
          }}
        >
          <img
            src={this.props.randomComputer.hinhAnh}
            alt={this.props.randomComputer.hinhAnh}
            width={75}
            height={75}
            style={{
              position: "absolute",
              left: "1%",
              animation: `randomItem${Date.now()} 0.5s`,
              transform: "rotateY(180deg)",
              marginTop: "2px",
            }}
          />
        </div>
        <img
          src="./img/bai_tap_oan_tu_ti/playerComputer.png"
          alt="playerConputer.png"
          width={120}
          height={150}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randomComputer: state.Bai_tap_oan_tu_ti.randomComputer,
  };
};

export default connect(mapStateToProps)(Computer);
