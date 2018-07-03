import { getPhotos } from "../../../api";

const actions = {
  loadPhotos({ commit }, category = null) {
    if (!category) {
      getPhotos().then(result => {
        commit("updatePhotos", result);
      });
    }
  }
};

export default actions;
