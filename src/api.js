import axios from 'axios';

const apiKey = '42511097-6652c7dec9d248f72a6de25eb';

export const searchByQuery = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    method: 'get',
    params: {
      key: apiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
  return response.data.hits;
};
