import React, { Component } from "react";
import { connect } from "react-redux";

class FormSV extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      email: "",
      sdt: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      sdt: "",
    },
    valid: false,
  };

  handleChange = (e) => {
    let { name, value, type, pattern } = e.target;
    let errorMessger = "";
    if (value.trim() === "") {
      errorMessger = name + " không được bỏ trống!";
    }
    if (type === "email") {
      let regex = new RegExp(pattern); // chuyển pattern về dang regex
      if (!regex.test(value)) {
        errorMessger = name + " không không đúng định dạng!";
      }
    }
    if (name === "sdt") {
      let regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessger = name + " không không đúng định dạng!";
      }
    }
    let values = { ...this.state.values, [name]: value }; // copy các values cũ và thêm vào [name]:value
    let errors = { ...this.state.errors, [name]: errorMessger }; // copy các errors cũ và thêm vào [name]:errorMessger , ở đây ta dùng đặc tính của resparam là khi key [name] trùng với key cũ thì sẽ sửa lại giá trị có trong errors
    this.setState(
      {
        ...this.state,
        values,
        errors,
      },
      () => {
        this.checkValid();
      }
    );
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state.values);
  };

  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
    }
    this.setState({
      ...this.state,
      valid, // do biến state có cùng key với setState là valid cho nên nó sẽ hiểu là thay đổi giá trị của valid
    });
  };
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header bg-dark text-light">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form action="">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <span>Mã sinh viên:</span>
                      <input
                        className="form-control"
                        name="maSV"
                        value={this.state.values.maSV}
                        onChange={this.handleChange}
                      />
                      <span className="text-danger">
                        {this.state.errors.maSV}
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <span>Họ tên sinh viên:</span>
                      <input
                        className="form-control"
                        name="hoTen"
                        value={this.state.values.hoTen}
                        onChange={this.handleChange}
                      />
                      <span className="text-danger">
                        {this.state.errors.hoTen}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <span>Email:</span>
                      <input
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        className="form-control"
                        type="email"
                        name="email"
                        value={this.state.values.email}
                        onChange={this.handleChange}
                      />
                      <span className="text-danger">
                        {this.state.errors.email}
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <span>số điện thoại:</span>
                      <input
                        pattern="^\d+$"
                        className="form-control"
                        name="sdt"
                        value={this.state.values.sdt}
                        onChange={this.handleChange}
                      />
                      <span className="text-danger">
                        {this.state.errors.sdt}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-12 text-right">
                    {this.state.valid ? (
                      <button
                        className="btn btn-success"
                        type="submit"
                        onClick={this.handelSubmit}
                      >
                        Thêm sinh viên
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        type="submit"
                        onClick={this.handelSubmit}
                        disabled
                      >
                        Thêm sinh viên
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "them_sinh_vien",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSV);
