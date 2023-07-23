import React, { useContext } from "react";
import "./wishlist.css";

import { wishlistContext } from "../../Contexts/Wishlist/WishlistContext";
import WishlistCard from "../../Components/wishlistCard/WishlistCard";
import Loading from "../../Components/Loading/Loading";

function Wishlist() {
  const { wishlistState } = useContext(wishlistContext);

  const finalWishlist = wishlistState.wishlist;

  console.log(finalWishlist);

  return (
    <div className="wishlist-body">
      <h1>wishlist</h1>
      <div className="wishlist-box">
        {finalWishlist.length === 0 ? (
          <div>
            <h1>YOUR WISHLIST IS EMPTY</h1>
            <img
              src="https://cdn.dribbble.com/users/1231310/screenshots/6196902/stest-all2.gif"
              alt="empty-wishlisht-img"
              className="empty-wishlist-img"
            />
          </div>
        ) : (
          finalWishlist.map((item) => <WishlistCard product={item} />)
        )}
      </div>
    </div>
  );
}

export default Wishlist;
