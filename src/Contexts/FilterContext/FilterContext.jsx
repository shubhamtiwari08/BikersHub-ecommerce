import React, { createContext, useReducer } from "react";
import { filterReducer } from "../../Reducers/FilterReducer";

export const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    categories: {
      Helmets: false,
      Lights: false,
      Locks: false,
      Horns: false,
      Fenders: false,
    },
    price: 5000,
    sort: "",
    rating: 0,
    word: "",
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
