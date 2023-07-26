import React, { createContext, useEffect, useReducer } from "react";
import { wishlistReducer } from "../../Reducers/WishlistReducer";
import Toast from "../../Components/Toast/Toast";

export const wishlistContext = createContext();

function WishlistProvider({ children }) {
   

  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    { wishlist: [], wishlistCount: 0 }
  );
 

  console.log(wishlistState)

  

  const getWishlist = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        headers: {
          authorization: localStorage.getItem("Token"),
        },
      });
      console.log(localStorage.getItem("Token"),)
      const wishlistData = await response.json();
      if (response.status === 200 || 201) {
        console.log(wishlistData)
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
          authorization: localStorage.getItem("Token"),
        },
        body: JSON.stringify({ product }),
      });
      const wishlistData = await response.json();
      console.log(response,wishlistData)

      if (response.status === 201) {
        console.log("addwish")
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: wishlistData.wishlist,
        })
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
          authorization: localStorage.getItem("Token"),
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
      value={{
        wishlistDispatch,
        removeFromWishlist,
        addToWishlist,
        wishlistState,
        getWishlist,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}

export default WishlistProvider;
