const actions = {
  menuOpen({ commit }) {
    commit("updateMenuOpened", true);
  },

  menuClose({ commit }) {
    commit("updateMenuOpened", false);
  }
};

export default actions;
