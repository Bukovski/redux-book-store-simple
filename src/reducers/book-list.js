import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "constants/book-list.constant"


const updateBookList = (state, action) => {
  // return initialState if state not exist sate
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null
    };
  }
  
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        books: [],
        loading: true,
        error: null
      };
    
    case FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null
      };
    
    case FETCH_BOOKS_FAILURE:
      return {
        books: [],
        loading: false,
        error: action.payload
      };
    
    default:
      return state.bookList;  // get current bookList
  }
};


export default updateBookList;
