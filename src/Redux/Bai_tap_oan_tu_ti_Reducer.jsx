import {
  END_GAME,
  LUA_CHON,
  RANDOM_COMPUTER,
} from "./Action/Bai_tap_oan_tu_ti_Type";

const stateDefault = {
  mangLuaChon: [
    { ten: "bao", hinhAnh: "./img/bai_tap_oan_tu_ti/bao.png" },
    { ten: "bua", hinhAnh: "./img/bai_tap_oan_tu_ti/bua.png" },
    { ten: "keo", hinhAnh: "./img/bai_tap_oan_tu_ti/keo.png" },
  ],
  luaChon: { ten: "bao", hinhAnh: "./img/bai_tap_oan_tu_ti/bao.png" },
  randomComputer: {
    ten: "bao",
    hinhAnh: "./img/bai_tap_oan_tu_ti/bao.png",
  },
  ketQua: "You Win!!",
  soBanThang: 0,
  soBanChoi: 0,
};

export const Bai_tap_oan_tu_ti = (state = stateDefault, action) => {
  switch (action.type) {
    case LUA_CHON: {
      return { ...state, luaChon: action.luaChon };
    }
    case RANDOM_COMPUTER: {
      let randomComputer = Math.floor(Math.random() * 3);
      return { ...state, randomComputer: state.mangLuaChon[randomComputer] };
    }
    case END_GAME: {
      state.soBanChoi += 1;
      switch (state.luaChon.ten) {
        case "bao":
          {
            if (state.randomComputer.ten === "bao") {
              state.ketQua = "Drawn!!";
            } else if (state.randomComputer.ten === "bua") {
              state.ketQua = "You Win!!";
              state.soBanThang += 1;
            } else if (state.randomComputer.ten === "keo") {
              state.ketQua = "You Lose!!";
            }
          }
          break;
        case "bua":
          {
            if (state.randomComputer.ten === "bao") {
              state.ketQua = "You Lose!!";
            } else if (state.randomComputer.ten === "bua") {
              state.ketQua = "Drawn!!";
            } else if (state.randomComputer.ten === "keo") {
              state.ketQua = "You Win!!";
              state.soBanThang += 1;
            }
          }
          break;
        case "keo":
          {
            if (state.randomComputer.ten === "bao") {
              state.ketQua = "You Win!!";
              state.soBanThang += 1;
            } else if (state.randomComputer.ten === "bua") {
              state.ketQua = "You Lose!!";
            } else if (state.randomComputer.ten === "keo") {
              state.ketQua = "Drawn!!";
            }
          }
          break;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
