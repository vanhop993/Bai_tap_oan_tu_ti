import React, { Component } from "react";
import "./Burger.css";
import { connect } from "react-redux";

class Burger extends Component {
  renderMidBread() {
    let { burger } = this.props;
    return Object.entries(burger).map(([item, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={item}></div>);
      }
      return breadMid;
    });
  }
  renderMenu() {
    let { burger, menu, tangGiamMidBread } = this.props;
    return Object.entries(menu).map(([item, price], index) => {
      return (
        <tr>
          <td>{item}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => tangGiamMidBread(item, -1)}
            >
              -
            </button>
            {burger[item]}
            <button
              className="btn btn-success"
              onClick={() => tangGiamMidBread(item, 1)}
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{price * burger[item]}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="text-center">Burger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderMidBread()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-6">
            <h3 className="text-center">hóa đơn của bạn </h3>
            <table className="table">
              <thead>
                <tr>
                  <td>Thức ăn</td>
                  <td>Số lượng</td>
                  <td>Đơn giá</td>
                  <td>Thành tiền</td>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Tổng tiền:</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamMidBread: (midBread, tangGiam) => {
      const action = {
        type: "tang_giam",
        midBread,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
