import {
  BOOKS_REQUESTED, BOOKS_LOADED, BOOKS_ERROR,
  BOOK_ADDED_TO_CART
} from "constants/books.constant";


const initialState = {
  books: [],
  loading: true,
  error: null,
  
  cartItems: [],
  orderTotal: 220
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
      const bookId = action.payload;
      const book = state.books.find((book) => book.isbn13 === bookId);
      
      const newItem = {
        id: book.isbn13,
        name: book.title,
        count: 1,
        total: book.price
      };
    
      return {
        ...state,
        cartItems: [ ...state.cartItems, newItem ]
      };
    
    default:
      return state;
  }
};


export default reducer;
