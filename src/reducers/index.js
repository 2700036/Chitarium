const initialState = {
  books: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'BOOKS_LOADED':
    return {
      books: payload,
    }

  default:
    return state
  }
}
