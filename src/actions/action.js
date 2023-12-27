import axios from 'axios';

const accessKey = 'jeEoYsWP26F5CdtgsXF2e_0zHDizkmcksgOQthf-E28';

export const setImages = (images) => ({
  type: 'SET_IMAGES',
  payload: images,
});

export const setQuery = (query) => ({
  type: 'SET_QUERY',
  payload: query,

});
export const clearImages = () => ({
  type: 'CLEAR_IMAGES',
});
export const fetchImages = (query) => {

  return (dispatch, getState) => {
    const currentQuery = getState().query;
    const page = getState().images.length / 10 + 1;
    if (query !== currentQuery) {
      dispatch(setQuery(query));
      dispatch(setImages([])); 
    }
    axios
      .get(`https://api.unsplash.com/search/photos`, {
        params: {
          query,
          page,
          per_page: 10, 
          client_id: accessKey,
        },
      })
      .then((response) => {
        dispatch(setImages(response.data.results));
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  };
};
