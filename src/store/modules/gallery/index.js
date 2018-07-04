import mutations from "./mutations";
import actions from "./actions";

const state = {
  photos: null,
  categories: null,
  currentCategory: null
};

const getters = {
  photos: state => state.photos,
  categories: state => state.categories,
  currentCategory: state => state.currentCategory
};

export default {
  state,
  getters,
  actions,
  mutations
};
