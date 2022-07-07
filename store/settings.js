export const state = () => ({
  settings: {
    lang: null,
  },
});

export const getters = {
  getLang: (state) => state.settings.lang,
};
export const mutations = {
  setLang(state, lang) {
    state.settings.lang = lang;
    // console.log(state.settings.lang)
  },
};

export const actions = {
  setLang({ commit }, lang) {
    commit("setLang", lang);
  },
};
