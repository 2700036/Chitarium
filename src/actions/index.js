export const booksLoaded = (payload) => ({
  type: 'BOOKS_LOADED',
  payload
})

export const booksRequested = ()=> ({
  type: 'BOOKS_REQUESTED'
})

export const booksError = (payload) => ({
  type: 'BOOKS_ERROR',
  payload
})
