import React, { Component } from "react";
import { connect } from "react-redux";
import {
  endGame,
  randomComputer,
} from "../../Redux/Action/Bai_tap_oan_tu_ti_Action";

class Thong_so_ban_choi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Số bàn thắng: {this.props.soBanThang}
        </div>
        <div className="display-4 text-primary">
          Só bàn chơi: {this.props.soBanChoi}
        </div>
        <button
          className="btn btn-success"
          onClick={() => {
            let counter = 0;
            let randomComputerItems = setInterval(() => {
              this.props.dispatch(randomComputer());
              counter++;
              if (counter >= 10) {
                clearInterval(randomComputerItems);
                this.props.dispatch(endGame());
              }
            }, 100);
          }}
        >
          Play game!
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.Bai_tap_oan_tu_ti.ketQua,
    soBanChoi: state.Bai_tap_oan_tu_ti.soBanChoi,
    soBanThang: state.Bai_tap_oan_tu_ti.soBanThang,
  };
};
export default connect(mapStateToProps)(Thong_so_ban_choi);
