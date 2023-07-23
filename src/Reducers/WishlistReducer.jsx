export const initialWishlistState = { wishlist: [], wishlistCount: 0 };

export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_WISHLIST":
    case "ADD_TO_WISHLIST":
    case "DELETE_FROM_WISHLIST":
      return { ...state, wishlist: payload, wishlistCount: payload?.length };
    case "CLEAR_WISHLIST":
      return {...state,...initialWishlistState};
    default:
        return state
  }
};
