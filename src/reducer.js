export const initialState = {
  basket: [],
  user: null,
};

// selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

/* Tne reducer lisen to the acions in the browser and 
   then handles the action that was triggered then 
   passing the information to the Data base*/
const reducer = (state, action) => {
  console.log(action.target);
  /* The Switch statemen will be based on the action triggered */
  switch (action.type) {
    /* First case, if the action is ADD_TO_CART */
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    /* Second case, if the action is ADD_TO_CART */
    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not not in Cart`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
