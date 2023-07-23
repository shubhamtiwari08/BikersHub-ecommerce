export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "CATEGORY_FILTER":
      return {
        ...state,
        categories: {
          ...state.categories,
          [payload]: !state.categories[payload],
        },
      };
    case "SEARCH_FILTER":
      console.log(payload);
      return { ...state, word: payload };
    case "PRICE_FILTER":
      return { ...state, price: payload };
    case "RATING_FILTER":
      return { ...state, rating: payload };
    case "DISCOUNT_FILTER":
      return { ...state, discount: payload };
    case "SORT_FILTER":
      return { ...state, sort: payload };
    case "CLEAR":
      return {
        ...state,
        price: 5000,
        sort: "",
        rating: 0,
        word: "",
        categories: {
          Helmets: false,
          Lights: false,
          Locks: false,
          Horns: false,
          Fenders: false,
        },
      };
    default:
      return state;
  }
};
