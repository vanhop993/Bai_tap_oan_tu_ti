import { END_GAME, LUA_CHON, RANDOM_COMPUTER } from "./Bai_tap_oan_tu_ti_Type";

export const playerLuaChon = (luaChon) => {
  return {
    type: LUA_CHON,
    luaChon,
  };
};
export const randomComputer = () => {
  return {
    type: RANDOM_COMPUTER,
  };
};
export const endGame = () => {
  return {
    type: END_GAME,
  };
};
