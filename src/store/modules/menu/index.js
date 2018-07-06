import mutations from "./mutations";
import actions from "./actions";

const state = {
  menuOpened: false
};

const getters = {
  menuOpened: state => state.menuOpened
};

export default {
  state,
  getters,
  actions,
  mutations
};
