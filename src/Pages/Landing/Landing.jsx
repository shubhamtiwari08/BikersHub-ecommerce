import React, { useContext, useEffect, useState } from "react";
import "./Landing.css";
import Category from "../../Components/Category/Category";
import { useCategory } from "../../Contexts/Category/categoryContext";
import { FilterContext } from "../../Contexts/FilterContext/FilterContext";
import { useNavigate } from "react-router";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { cartContext } from "../../Contexts/Cart/CartContext";
import { wishlistContext } from "../../Contexts/Wishlist/WishlistContext";
import Footer from "../../Components/Footer/Footer";

function Landing() {
  const { categoryData, categoriesHandle } = useContext(useCategory);
  const { filterDispatch } = useContext(FilterContext);
  const { getCart } = useContext(cartContext);
  const { getWishlist } = useContext(wishlistContext);

  console.log(categoryData);

  const Navigate = useNavigate();

  // <img className="hero-img"src="https://www.nieuwsmotor.nl/images/motornieuws/2018/10_oktober/2019_Triumph_1200_scrambler/2019_Triumph-Motorcycles_Scrambler_1200_XC_Black.jpg" style={{width:"80rem"}} alt="hero-image" />

  useEffect(() => {
    categoriesHandle();
    filterDispatch({ type: "CLEAR" });
    getCart();
    getWishlist();
  }, []);

  return (
    <>
      <div className="landing-main-container">
        <div className="title-container">
          <div>
            <div className="hero-title">
              <h1>
                Looking for <br />
                <span className="bike-part">BIKE PARTS?</span>
              </h1>
              <h1>
                Don't worry ! we got you <br />
                <span className="covered">covered.</span>{" "}
              </h1>
              <br />
              <button
                className="Shop-now button"
                onClick={() => Navigate("/productpage")}
              >
                SHOP NOW
              </button>
            </div>
            <div className="hero-bike-img">
              <img
                className="hero-img"
                src="https://www.nieuwsmotor.nl/images/motornieuws/2018/10_oktober/2019_Triumph_1200_scrambler/2019_Triumph-Motorcycles_Scrambler_1200_XC_Black.jpg"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
        <div className="categories-container">
          <h2 className="category-title">Categories</h2>
          <div className="category-box">
            {categoryData.map((item) => (
              <Category
                image={item.image}
                categoryName={item.categoryName}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
