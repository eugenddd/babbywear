export const state = () => ({
  nav: {
    showCart: false,
  },
});

export const getters = {
  getNav: (state) => state.nav,
};

export const mutations = {
  setNav(state, nav) {
    state.nav = nav;
  },
};

export const actions = {
  setNav({ commit }, nav) {
    commit("setNav", nav);
  },
};
