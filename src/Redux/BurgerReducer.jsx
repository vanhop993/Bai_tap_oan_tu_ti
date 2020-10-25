const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "tang_giam": {
      let burgerCapNhap = { ...state.burger };
      if (action.tangGiam === -1 && burgerCapNhap[action.midBread] === 0) {
        return { ...state };
      }
      burgerCapNhap[action.midBread] += action.tangGiam;
      state.burger = burgerCapNhap;
      // tính tổng tiền
      state.total += action.tangGiam * state.menu[action.midBread];
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
