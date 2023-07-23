import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { wishlistReducer } from "../../Reducers/WishlistReducer";
import Toast from "../../Components/Toast/Toast";

export const wishlistContext = createContext();

function WishlistProvider({ children }) {
  const initialWishlistState = { wishlist: [], wishlistCount: 0 };
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const Token = localStorage.getItem("Token");

  const getWishlist = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: Token,
        },
      });
      const wishlistData = response.json();
      if (response.status === 200) {
        wishlistDispatch({
          type: "GET_WISHLIST",
          payload: wishlistData.wishlist,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  const addToWishlist = async (product) => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: Token,
        },
        body: JSON.stringify({ product }),
      });
      const wishlistData = await response.json();

      if (response.status === 201) {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: wishlistData.wishlist,
        });
      }
      Toast({ type: "success", message: "added to wishlist" });
    } catch (error) {
      Toast({ type: "error", message: error });
    }
  };

  const removeFromWishlist = async (product) => {
    try {
      const response = await fetch(`/api/user/wishlist/${product._id}`, {
        method: "DELETE",
        headers: {
          authorization: Token,
        },
      });
      console.log("working");

      const wishlistData = await response.json();
      console.log(wishlistData);
      if (response.status === 200) {
        wishlistDispatch({
          type: "DELETE_FROM_WISHLIST",
          payload: wishlistData.wishlist,
        });
      }
      Toast({ type: "success", message: "removed from cart" });
    } catch (error) {
      Toast({ type: "error", message: error });
    }
  };

  return (
    <wishlistContext.Provider
      value={{ removeFromWishlist, addToWishlist, wishlistState, getWishlist }}
    >
      {children}
    </wishlistContext.Provider>
  );
}

export default WishlistProvider;
