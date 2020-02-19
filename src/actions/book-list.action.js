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


export {
  fetchBooks
};
