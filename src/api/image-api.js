import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38572739-8ecec7d616fae8b4ce60f4b21';
export const numRequestedPhotos = 12;

export const fetchPhoto = async (photoTag, page) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: `${API_KEY}`,
      q: `${photoTag}`,     
      safesearch: true,     
      orientation: 'horizontal',
      page: page,
      per_page: `${numRequestedPhotos}`,
    },
  });
  return response.data;
};
