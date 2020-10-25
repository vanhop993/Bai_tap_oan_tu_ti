import dataPhone from "../data/dataPhone.json";
// khởi tạo giá trị bạn đầu của reducer
// quản lý các biến có thể thay đổi trên storeReducer thay vì components như trước
// tức là đặt state tại reducer thay vì đặt state ở components như trước kia
const stateGioHang = {
  gioHang: [],
  xemChiTiet: dataPhone[0],
};
export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "them_gio_hang": {
      let gioHangCapNhap = [...state.gioHang];
      let index = gioHangCapNhap.findIndex(
        (sp, index) => sp.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhap[index].soLuong += 1;
      } else {
        gioHangCapNhap.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhap;
      return { ...state };
    }
    case "xoa_san_pham": {
      let gioHangCapNhap = [...state.gioHang];
      let index = gioHangCapNhap.findIndex(
        (sp, index) => sp.maSP === action.maSP
      );
      gioHangCapNhap.splice(index, 1);
      state.gioHang = gioHangCapNhap;
      return { ...state };
    }
    case "tang_giam_so_luong_sp": {
      let gioHangCapNhap = [...state.gioHang];
      let index = gioHangCapNhap.findIndex(
        (sp, index) => sp.maSP === action.maSP
      );
      if (action.tangGiam) {
        gioHangCapNhap[index].soLuong += 1;
      } else {
        if (gioHangCapNhap[index].soLuong === 1) {
          gioHangCapNhap[index].soLuong = 1;
        } else {
          gioHangCapNhap[index].soLuong -= 1;
        }
      }
      state.gioHang = gioHangCapNhap;
      return { ...state };
    }
    case "xem_chi_tiet_sp": {
      state.xemChiTiet = action.sp;
      console.log(state.xemChiTiet);
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
