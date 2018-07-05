import mutations from "./mutations";
import actions from "./actions";

const state = {
  photos: null,
  categories: null
};

const getters = {
  photos: state => state.photos,
  categories: state => state.categories
};

export default {
  state,
  getters,
  actions,
  mutations
};
