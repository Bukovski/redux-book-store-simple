import { BOOKS_LOADED } from "constants/books.constant";


const initialState = {
  books: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_LOADED:
      return {
        books: action.payload
      };

    default:
      return state;
  }
};


export default reducer;
