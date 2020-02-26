import { BOOK_HIDDEN_CART, BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART,
  ALL_BOOKS_REMOVED_FROM_CART } from "./shopping-cart.constant";
import { updateOrder } from "./shopping-cart.utils"


const updateShoppingCart = (state, action) => {
  // return initialState if state not exist sate
  if (state === undefined) {
    return {
      hiddenCart: true,
      cartItems: [],
      orderTotal: 0,
      orderQuantity: 0
    }
  }
  
  switch(action.type) {
    case BOOK_HIDDEN_CART:
      return { ...state.shoppingCart, hiddenCart: !state.shoppingCart.hiddenCart };
      
    case BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);
  
    case BOOK_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);
  
    case ALL_BOOKS_REMOVED_FROM_CART:
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload); // get a current product
      // -item.count shod be less then item.count (5 => -5) and then remove from the cart
      return updateOrder(state, action.payload, -item.count);
  
    default:
      return state.shoppingCart;
  }
};


export default updateShoppingCart;
