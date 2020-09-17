const booksLoaded = (payload) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload
});

export const booksRequested = ()=> ({
  type: 'FETCH_BOOKS_REQUEST'
});

const booksError = (payload) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload
});

export const bookAddedToCart = (payload) => ({
  type: 'BOOK_ADDED_TO_CART',
  payload
})

export const fetchBooks = (dispatch, bookStoreService) => () => {
  bookStoreService.getBooks()
  .then(data=>dispatch(booksLoaded(data)))
  .catch(err=>{
  dispatch(booksError(err))})
};

export const decreaseItem = (payload) => ({
  type: 'DECREASE_BOOK',
  payload
});
export const deleteItem = (payload) => ({
  type: 'DELETE_BOOK',
  payload
});
