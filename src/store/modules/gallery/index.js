import mutations from "./mutations";
import actions from "./actions";

const state = {
  photos: null
};

const getters = {
  photos: state => state.photos
};

export default {
  state,
  getters,
  actions,
  mutations
};
