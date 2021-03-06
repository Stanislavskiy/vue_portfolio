import { getPhotos, getCategories } from "../../../api";

const DEFAULT_CATEGORY = "all";

const actions = {
  initGallery({ dispatch }) {
    dispatch("loadPhotos");
  },

  loadPhotos({ commit }, category = DEFAULT_CATEGORY) {
    return new Promise((resolve, reject) => {
      if (category === DEFAULT_CATEGORY) {
        getPhotos().then(result => {
          commit("updatePhotos", result);
          resolve();
        });
      } else {
        getPhotos(category).then(result => {
          commit("updatePhotos", result);
          resolve();
        });
      }
    });
  },

  loadCategories({ commit }) {
    getCategories().then(result => {
      commit("updateCategories", result);
    });
  },

  clearCategories({ commit }) {
    commit("updateCategories", null);
  }
};

export default actions;
