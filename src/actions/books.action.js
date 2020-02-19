import { BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, ALL_BOOKS_REMOVED_FROM_CART } from "constants/shopping-cart.constant";
import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUEST, FETCH_BOOKS_FAILURE } from "constants/book-list.constant";


const booksRequested = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  }
};

const booksLoaded = (newBooks) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: newBooks
  };
};

const booksError = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  };
};

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  // Load data from server when page loading
  dispatch(booksRequested());
  
  // get async data with server
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

/********************* CART ***************************/

const bookAddedToCart = (bookId) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookId
  };
};

const bookRemovedFromCart = (bookId) => {
  return {
    type: BOOK_REMOVED_FROM_CART,
    payload: bookId
  };
};

const allBooksRemovedFromCart = (bookId) => {
  return {
    type: ALL_BOOKS_REMOVED_FROM_CART,
    payload: bookId
  };
};


export {
  fetchBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
};
