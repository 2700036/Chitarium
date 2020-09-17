const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

export default (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: payload,
        loading: false,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: payload,
      };
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, payload, 1);    
    case 'DECREASE_BOOK':
      return updateOrder(state, payload, -1);
    case 'DELETE_BOOK':
      return deleteBook(state, payload);

    default:
      return state;
  }
};

function updateCartItems (cartltems, item, idx){
  if (idx === -1) {
    return [...cartltems, item];
  };
  if (item.count === 0 ){
    return [...cartltems.slice(0, idx), ...cartltems.slice(idx + 1)]
  }
  return [...cartltems.slice(0, idx), item, ...cartltems.slice(idx + 1)];
};

function updateItem (item, book, q){
  if (item) {
    return {
      ...item,
      count: item.count + q,
      total: item.total + book.price,
    };
  } else {
    return {
      id: book.id,
      title: book.title,
      count: 1,
      total: book.price,
    };
  }
};

function updateOrder(state, payload, q) {
  const bookId = payload;
  const book = state.books.find(({ id }) => id === bookId);
  const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
  const item = state.cartItems[itemIndex];
  const newItem = updateItem(item, book, q);
  return {
    ...state,
    cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
  };
}

function deleteBook(state, payload) {
  const itemIndex = state.cartItems.findIndex(({ id }) => id === payload);
  return {
    ...state,
    cartItems: [...state.cartItems.slice(0, itemIndex), ...state.cartItems.slice(itemIndex + 1)],
  };
}
