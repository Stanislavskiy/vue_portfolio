const mutations = {
  updatePhotos(state, photos) {
    state.photos = photos;
  },

  updateCategories(state, categories) {
    state.categories = categories;
  },

  updateCurrentCategory(state, category) {
    state.currentCategory = category;
  }
};

export default mutations;
