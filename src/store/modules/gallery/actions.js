import { getPhotos, getCategories } from "../../../api";

const actions = {
  initGallery({ dispatch }) {
    dispatch("loadCategories");
    dispatch("loadPhotos");
  },

  loadPhotos({ commit }, category = null) {
    if (!category) {
      getPhotos().then(result => {
        commit("updatePhotos", result);
      });
    }
  },

  loadCategories({ commit }) {
    getCategories().then(result => {
      commit("updateCategories", result);
    });
  }
};

export default actions;
