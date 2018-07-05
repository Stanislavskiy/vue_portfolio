const mutations = {
  updatePhotos(state, photos) {
    state.photos = photos;
  },

  updateCategories(state, categories) {
    state.categories = categories;
  }
};

export default mutations;
