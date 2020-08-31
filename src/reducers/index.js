const initialState = {
  books: [],
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'BOOKS_REQUESTED':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case 'BOOKS_LOADED':
      return {
        ...state,
        books: payload,
        loading: false,
        error: null,
      };
    case 'BOOKS_ERROR':
      return {
        ...state,
        books: [],
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
