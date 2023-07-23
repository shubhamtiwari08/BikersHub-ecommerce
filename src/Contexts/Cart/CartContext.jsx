import React, { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../../Reducers/cartReducer";
import { authContext } from "../Auth/AuthContext";

import "react-toastify/dist/ReactToastify.css";
import Toast from "../../Components/Toast/Toast";

export const cartContext = createContext();

function CartProvder({ children }) {
  const Token = localStorage.getItem("Token");

  const initialState = {
    cart: [],
    cartCount: 0,
    cartSum: 0,
    cartDiscount: 0,
  };

  const { isLogged } = useContext(authContext);

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  const getCart = async () => {
    if (isLogged) {
      try {
        const response = await fetch("/api/user/cart", {
          headers: {
            authorization: Token,
          },
        });
        const data = await response.json();
        cartDispatch({ type: "GET_CART", payload: data.cart });
        console.log(cartState)
      } catch (error) {
        console.error(error);
      }
    }
  };



  const addToCart = async (product) => {
    try {
      if (true) {
        const response = await fetch("/api/user/cart", {
          method: "POST",
          headers: {
            authorization: Token,
          },
          body: JSON.stringify({ product }),
        });
        const cartData = await response.json();
        if (response.status === 201) {
          cartDispatch({ type: "ADD_TO_CART", payload: cartData.cart });
        }
        Toast({ type: "success", message: "added to cart" });
      }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", message: error });
    }
  };

  const removeFromCart = async (product) => {
    try {
      if (true) {
        const response = await fetch(`/api/user/cart/${product._id}`, {
          method: "DELETE",
          headers: {
            "Contet-Type": "application/json",
            authorization: Token,
          },
        });
        const cartData = await response.json();
        console.log(await response.status);
        if (response.status === 200) {
          console.log("working");
          cartDispatch({ type: "DELETE_FROM_CART", payload: cartData.cart });
        }
        Toast({ type: "error", message: "deleted from cart" });
      }
    } catch (error) {
      Toast({ type: "error", message: error });
    }
  };

  const increment = async (product) => {
    try {
      const response = await fetch(`/api/user/cart/${product._id}`, {
        method: "POST",
        headers: {
          authorization: Token,
        },
        body: JSON.stringify({
          action: {
            type: "increment",
          },
        }),
      });
      const cartData = await response.json();
      if (response.status === 200) {
        cartDispatch({ type: "INCREMENT_CART", payload: cartData.cart });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const decrement = async (product) => {
    try {
      if (product.qty === 1) {
        removeFromCart(product);
      }
      const response = await fetch(`/api/user/cart/${product._id}`, {
        method: "POST",
        headers: {
          authorization: Token,
        },
        body: JSON.stringify({
          action: {
            type: "decrement",
          },
        }),
      });
      const cartData = await response.json();
      if (response.status === 200) {
        cartDispatch({ type: "DECREMENT_CART", payload: cartData.cart });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <cartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        getCart,
        removeFromCart,
        increment,
        decrement,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartProvder;
