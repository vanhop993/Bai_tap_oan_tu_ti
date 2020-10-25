import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import { BurgerReducer } from "./BurgerReducer";
import { QuanLySinhVienReducer } from "./QuanLySinhVienReducer";
import { Bai_tap_oan_tu_ti } from "./Bai_tap_oan_tu_ti_Reducer";

// store tổng ứng dụng
export const rootReducer = combineReducers({
  // nơi sẽ chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer,
  BurgerReducer,
  QuanLySinhVienReducer,
  Bai_tap_oan_tu_ti,
});
