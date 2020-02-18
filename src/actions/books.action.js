import {
  BOOKS_REQUESTED, BOOKS_LOADED, BOOKS_ERROR,
  BOOK_ADDED_TO_CART
} from "constants/books.constant";


const booksRequested = () => {
  return {
    type: BOOKS_REQUESTED
  }
};

const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks
  };
};

const booksError = (error) => {
  return {
    type: BOOKS_ERROR,
    payload: error
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  // Load data from server when page loading
  dispatch(booksRequested());
  
  // get async data with server
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};


const bookAddedToCart = (bookId) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookId
  };
};


export {
  fetchBooks,
  bookAddedToCart
};
