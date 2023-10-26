import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBarsStaggered,
  faCartShopping,
  faFilter,
  faHamburger,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
 
import { authContext } from "../../Contexts/Auth/AuthContext";
import { cartContext } from "../../Contexts/Cart/CartContext";
import { wishlistContext } from "../../Contexts/Wishlist/WishlistContext";
import { FilterContext } from "../../Contexts/FilterContext/FilterContext";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const { isLogged, logoutHandler } = useContext(authContext);
  const { cartState, cartDispatch } = useContext(cartContext);
  const { wishlistState, wishlistDispatch } = useContext(wishlistContext);
  const { filterDispatch } = useContext(FilterContext);

  const handleLogout = () => {
    logoutHandler();
    wishlistDispatch({ type: "CLEAR_WISHLIST" });
    cartDispatch({ type: "CLEAR_CART" });
  };

  const Navigate = useNavigate();

  const handleFilterAndNavigation = () => {
    setNavToggle(!navToggle);
    console.log();
  };

  return (
    <div className="nav-bar">
      <h3>
        {" "}
        <Link to="/">BikersHub</Link>{" "}
      </h3>
      <input
        type="text"
        name="text"
        placeholder="search products.."
        onClick={() => Navigate("/productpage")}
        onChange={(e) =>
          filterDispatch({ type: "SEARCH_FILTER", payload: e.target.value })
        }
        autoComplete="off"
      />
      <div className="Nav-btns desktop-nav">
        {isLogged ? (
          <button className="btn-login" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="btn-login">
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              Login
            </Link>
          </button>
        )}
         <div className="wishlist-info">
            <FontAwesomeIcon
              icon={faHeart}
              color="var(--primary-color)"
              size="xl"
              onClick={() => Navigate(`/wishlist`)}
            />
            <div className="wishlist-count">
              {wishlistState.wishlistCount > 0 && (
                <div className="count-num">{wishlistState.wishlistCount}</div>
              )}
            </div>
          </div>
          <div className="cart-info">
            <FontAwesomeIcon
              icon={faCartShopping}
              color="var(--primary-color)"
              size="lg"
              onClick={() => Navigate("/cart")}
              
            />
            <div className="cart-count">
              {" "}
              {cartState.cartCount > 0 && <div className="count-num">{cartState.cartCount}</div>}
            </div>
          </div>
        <FontAwesomeIcon
          icon={faUser}
          size="xl"
          color="var(--Contrast-color)"
          onClick={() => Navigate("/profile")}
        />
      </div>
      {navToggle ? (
        <div className="Nav-btns">
          {isLogged ? (
            <button className="btn-login" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn-login">
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  backgroundColor: "transparent",
                }}
              >
                Login
              </Link>
            </button>
          )}
          <div className="wishlist-info">
            <FontAwesomeIcon
              icon={faHeart}
              color="var(--primary-color)"
              size="xl"
              onClick={() => Navigate(`/wishlist`)}
            />
            <div className="wishlist-count">
              {wishlistState.wishlistCount > 0 && (
                <div className="count-num">{wishlistState.wishlistCount}</div>
              )}
            </div>
          </div>
          <div className="cart-info">
            <FontAwesomeIcon
              icon={faCartShopping}
              color="var(--primary-color)"
              size="lg"
              onClick={() => Navigate("/cart")}
              
            />
            <div className="cart-count">
              {" "}
              {cartState.cartCount > 0 && <div className="count-num">{cartState.cartCount}</div>}
            </div>
          </div>
          <FontAwesomeIcon
            icon={faUser}
            size="xl"
            color="black"
            onClick={() => Navigate("/profile")}
          />
        </div>
      ) : (
        ""
      )}
      <span
        className="filter-option-mobile"
        onClick={handleFilterAndNavigation}
      >
        {navToggle ? (
          <FontAwesomeIcon icon={faBarsStaggered} color="black" size="lg" />
        ) : (
          <FontAwesomeIcon icon={faBars} color="black" size="lg" />
        )}
      </span>
    </div>
  );
}

export default Navbar;
