import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router";
import { cartContext } from "../../Contexts/Cart/CartContext";
import { wishlistContext } from "../../Contexts/Wishlist/WishlistContext";
import { authContext } from "../../Contexts/Auth/AuthContext";

function ProductCard({ product }) {
  const { title, price, imageUrl, name, _id, category, rating, discount } =
    product;
  const { addToCart, cartState } = useContext(cartContext);

  const { removeFromWishlist, addToWishlist, wishlistState } =
    useContext(wishlistContext);
  const { isLogged } = useContext(authContext);
  const Navigate = useNavigate();
  const finalCart = cartState?.cart;
  const finalWishlist = wishlistState?.wishlist;

  return (
    <div className="product-container">
      <div className="product-image">
        <img
          src={imageUrl}
          onClick={() => Navigate(`/productpage/${category}/${_id}`)}
        />
      </div>
      <div className="product-content">
        <h4>{title}</h4>
        <p className="product-name">{name}</p>
        <div className="price-box">
          <p>
            Rs.{price}{" "}
            <span style={{ color: "green" }}>({discount * 100}%)</span>{" "}
            <span style={{ color: "grey", textDecoration: "line-through" }}>
              {Number(price) + Number(price * discount)}
            </span>
          </p>
        </div>

        <div className="rating">
          <p>
            <FontAwesomeIcon
              icon={faStar}
              color="white"
              style={{ backgroundColor: "orange" }}
              size="sm"
            />
            {rating}{" "}
          </p>
        </div>
        {finalCart?.find((item) => product._id === item._id) ? (
          <button
            className="addtocart-btn"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--Accent-color)",
            }}
            onClick={() => Navigate("/cart")}
          >
            Go to cart
          </button>
        ) : (
          <button
            className="addtocart-btn"
            onClick={
              isLogged ? () => addToCart(product) : () => Navigate("/login")
            }
          >
            Add to cart
          </button>
        )}
        {finalWishlist.find((item) => item._id === product._id) ? (
          <button
            className="wishlist-btn"
            onClick={() => removeFromWishlist(product)}
          >
            <FontAwesomeIcon icon={faHeart} color="red" size="xl" />
          </button>
        ) : (
          <button
            className="wishlist-btn"
            onClick={
              isLogged ? () => addToWishlist(product) : () => Navigate("/login")
            }
          >
            <FontAwesomeIcon icon={faHeart} color="lightgrey" size="xl" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
