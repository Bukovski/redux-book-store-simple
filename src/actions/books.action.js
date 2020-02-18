import { BOOKS_REQUESTED, BOOKS_LOADED, BOOKS_ERROR } from "constants/books.constant";


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


export {
  booksRequested,
  booksLoaded,
  booksError
};
