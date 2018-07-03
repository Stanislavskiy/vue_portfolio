import axios from "axios";

export function getPhotos() {
  const PHOTO_URL = `${API_URL}/photos/`;

  return axios
    .get(PHOTO_URL)
    .then(response => {
      DEVELOPMENT && console.log(`--> PHOTOS: SUCCESS.`);
      // Возвращаем данные
      return response.data;
    })
    .catch(error => {
      const errors = error.response.data;
      DEVELOPMENT && console.log(`--> PHOTOS: FAILED. ${error}`);
    });
}
