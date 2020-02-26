import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import updateBookList from './book-list/book-list.reducer';
import updateShoppingCart from './shopping-cart/shopping-cart.reducer';


const persistConfig = {
  key: 'root-cart',
  storage,
  whitelist: ['shoppingCart'] // field data name from reducer below
};

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};


export default persistReducer(persistConfig, reducer);
