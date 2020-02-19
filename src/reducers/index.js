import {
  BOOKS_REQUESTED, BOOKS_LOADED, BOOKS_ERROR,
  BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, ALL_BOOKS_REMOVED_FROM_CART
} from "constants/books.constant";


const initialState = {
  books: [],
  loading: true,
  error: null,
  
  cartItems: [],
  orderTotal: 220
};


const priceToFloat = (price) => parseFloat(price.replace(/\$/, ""));


const updateCartItems = (cartItems, item, idx) => {
  // if count equals 0, remove product in basket
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }
  
  // add new product on the basket. Don't need changed a count of product
  if (idx === -1) return [ ...cartItems, item ];
  
  // update product on the basket and change a count of product
  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};


const updateCartItem = (book, item = {}, quantity) => {
  // get data from "item" and set default items
  const {
    id = book.isbn13,
    count = 0,
    title = book.title,
    total = 0
  } = item;
  
  const totalPrice = parseFloat(total) + quantity * priceToFloat(book.price);
  
  return {
    id,
    title,
    count: count + quantity,
    total: (totalPrice).toFixed(2)
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;

  // find book in data list and get data object
  const book = books.find(({ isbn13 }) => isbn13 === bookId);
  // check if the book exists in the basket.
  // If book exist in cart, return book object if not return -1
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  // get object book from basket or "undefined" if the book was not found
  const item = cartItems[ itemIndex ];
  
  const newItem = updateCartItem(book, item, quantity);
  
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};



const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case BOOKS_REQUESTED:
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    
    case BOOKS_LOADED:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    
    case BOOKS_ERROR:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
  
    case BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);
  
    case BOOK_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);
  
    // удалить полностью товар из корзины вне зависимости от количества
    case ALL_BOOKS_REMOVED_FROM_CART:
      const item = state.cartItems.find(({ id }) => id === action.payload); // get a current product
      // -item.count shod be less then item.count (5 => -5) and then remove from the cart
      return updateOrder(state, action.payload, -item.count);
      
    default:
      return state;
  }
};


export default reducer;
