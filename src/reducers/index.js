import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shoppingCart']
};

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};


export default persistReducer(persistConfig, reducer);
