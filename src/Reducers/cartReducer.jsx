export const cartReducer = (state, { type, payload }) => {
  const initialState = {
    cart: [],
    cartCount: 0,
    cartSum: 0,
    cartDiscount: 0,
  };

  switch (type) {
    case "GET_CART":
    case "DELETE_FROM_CART":
    case "INCREMENT_CART":
    case "DECREMENT_CART":
    case "ADD_TO_CART":
      console.log("add");
      return {
        ...state,
        cart: payload,
        cartCount: payload.reduce((acc, curr) => (acc += Number(curr.qty)), 0),
        cartSum: payload.reduce(
          (acc, curr) => (acc += Number(curr.price) * Number(curr.qty)),
          0
        ),
        cartDiscount: payload.reduce(
          (acc, curr) =>
            (acc +=
              Number(curr.discount) * Number(curr.price) * Number(curr.qty)),
          0
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        cartCount: 0,
        cartSum: 0,
        cartDiscount: 0,
      };
    default:
      return state;
  }
};
