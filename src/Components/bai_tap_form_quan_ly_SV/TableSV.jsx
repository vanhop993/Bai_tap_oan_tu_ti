import React, { Component } from "react";
import { connect } from "react-redux";

class TableSV extends Component {
  renderSinhVien = () => {
    let { mangSinhVien } = this.props;
    return mangSinhVien.map((sv, index) => {
      return (
        <tr key={index}>
          <td>{sv.maSV}</td>
          <td>{sv.hoTen}</td>
          <td>{sv.sdt}</td>
          <td>{sv.email}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr className="bg-dark text-light">
              <td>Mã SV</td>
              <td>Họ tên SV</td>
              <td>Số điện thoại</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};

export default connect(mapStateToProps, null)(TableSV);
