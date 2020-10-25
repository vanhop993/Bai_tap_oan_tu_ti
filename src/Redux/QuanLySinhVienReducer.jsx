const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "Nguyễn Văn A",
      sdt: "0909078887",
      email: "abc@gmail.com",
    },
  ],
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "them_sinh_vien": {
      let mangSinhVienUpdate = [...state.mangSinhVien, action.sinhVien];
      state.mangSinhVien = mangSinhVienUpdate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
