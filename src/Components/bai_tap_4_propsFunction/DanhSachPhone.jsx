import React, { Component } from "react";
import dataPhone from "../../data/dataPhone.json";
import SanPham from "./SanPham";
import GioHang from "./GioHang";

export default class DanhSachPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: dataPhone[0],
      sanPhamGH: [],
    };
  }
  xemChiTietSP = (dt) => {
    this.setState({
      sanPhamChiTiet: dt,
    });
  };
  themGH = (spThem) => {
    // tạo 1 object để hứng đối tượng đc thêm
    let spThemGH = {
      maSP: spThem.maSP,
      tenSP: spThem.tenSP,
      giaBan: spThem.giaBan,
      hinhAnh: spThem.hinhAnh,
      soLuong: 1,
    };
    // lấy tất cả các sản phẩm đã có trong giỏ hàng (state) ra để xử lý
    let spCapNhap = [...this.state.sanPhamGH];
    // duyệt mảng để kiểm tra xem sản phẩm được thêm vào giỏ hàng đã có trong giỏ hàng chưa
    let index = spCapNhap.findIndex((sp) => sp.maSP === spThemGH.maSP);
    // nếu index được duyệt trả về khác (-1) thì sản phẩm đã đc thêm vào giỏ hàng ít nhất 1 lần và chỉ cần tăng số lượng
    if (index !== -1) {
      // trường hợp sản phẩm được thêm đã có trong giỏ hàng
      spCapNhap[index].soLuong += 1;
    }
    // nếu index được duyệt trả về là (-1) thì sản phẩm được duyệt chưa được thêm 0 lần vào giỏ hàng nên ta phải push nó vào mảng đã lấy ra từ state ở đây là mảng spCapNhap.
    else {
      // trường hợp sản phẩm đươc thêm chưa có trong giỏ hàng
      spCapNhap.push(spThemGH);
    }
    // setState lại cho bằng giá trị mảng spCapNhap đã được sửa
    this.setState({
      sanPhamGH: spCapNhap,
    });
  };
  xoaGH = (maSP) => {
    // c1
    // lấy tất cả các sản phẩm trong giỏ hàng đang có ở state
    // let spCapNhap = [...this.state.sanPhamGH];
    // duyệt mảng tìm sp có mã sp giống với mã sp đc truyền vào
    // let index = spCapNhap.findIndex((sp) => sp.maSP === maSP);
    // nếu nó có thì xóa
    // if (index !== -1) {
    //   spCapNhap.splice(index, 1);
    // }

    //c2
    let spCapNhap = this.state.sanPhamGH.filter((sp) => sp.maSP !== maSP);
    this.setState({
      sanPhamGH: spCapNhap,
    });
  };
  tangGiamSoLuongSP = (maSP, tangGiam) => {
    // tham số tangGiam là cờ báo nếu true thì tăng mà false thì giảm
    let spCapNhap = [...this.state.sanPhamGH];
    let index = spCapNhap.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam && index !== -1) {
      spCapNhap[index].soLuong += 1;
    }
    if (!tangGiam && index !== -1) {
      spCapNhap[index].soLuong -= 1;
    }
    if (spCapNhap[index].soLuong === 0) {
      spCapNhap.splice(index, 1);
    }
    this.setState({
      sanPhamGH: spCapNhap,
    });
  };
  renderSanPham = () => {
    return dataPhone.map((dt, index) => {
      return (
        <SanPham
          key={index}
          dt={dt}
          xemChiTietSP={this.xemChiTietSP}
          themGH={this.themGH}
        />
      );
    });
  };

  render() {
    let { sanPhamChiTiet } = this.state;
    let tinhTongSL = this.state.sanPhamGH.reduce((tongSL, spGH, index) => {
      return (tongSL += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <div className="text-right ">
          <a
            className="text-success"
            href=""
            data-toggle="modal"
            data-target="#modelId"
          >
            giỏ hàng <span>({tinhTongSL})</span>
          </a>
          <GioHang
            sanPhamGH={this.state.sanPhamGH}
            xoaGH={this.xoaGH}
            tangGiamSoLuongSP={this.tangGiamSoLuongSP}
          />
        </div>
        <div className="row">{this.renderSanPham()}</div>
        <hr />
        <div className="row">
          <div className="col-4 text-center">
            <h3>{sanPhamChiTiet.tenSP}</h3>
            <img
              className="w-100"
              src={sanPhamChiTiet.hinhAnh}
              alt=""
              height={350}
            />
          </div>
          <div className="col-8">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tr>
                <th>Màn hình :</th>
                <th>{sanPhamChiTiet.manHinh}</th>
              </tr>
              <tr>
                <th>Hệ điều hành :</th>
                <th>{sanPhamChiTiet.heDieuHanh}</th>
              </tr>
              <tr>
                <th>Camera trước :</th>
                <th>{sanPhamChiTiet.cameraTruoc}</th>
              </tr>
              <tr>
                <th>Camera sau :</th>
                <th>{sanPhamChiTiet.cameraSau}</th>
              </tr>
              <tr>
                <th>Ram :</th>
                <th>{sanPhamChiTiet.ram}</th>
              </tr>
              <tr>
                <th>Rom :</th>
                <th>{sanPhamChiTiet.rom}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
