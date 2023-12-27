const initialState = {
    images: [],
    query: '', 
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_IMAGES':
        return {
          ...state,
          images: [...state.images, ...action.payload],
        };
      case 'SET_QUERY':
        return {
          ...state,
          query: action.payload,
        };
        case 'CLEAR_IMAGES':
      return {
        ...state,
        images: [], // Reset images to an empty array
      };
      default:
        return state;
    }
  };
  
  export default reducers;
  