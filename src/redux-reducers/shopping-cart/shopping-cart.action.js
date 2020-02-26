import { ALL_BOOKS_REMOVED_FROM_CART, BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART } from "./shopping-cart.constant";


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
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
};