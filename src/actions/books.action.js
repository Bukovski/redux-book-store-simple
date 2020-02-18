import { BOOKS_LOADED } from "constants/books.constant";


const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks
  };
};

export {
  booksLoaded
};
