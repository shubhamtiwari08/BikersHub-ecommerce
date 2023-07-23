import React, { useContext } from "react";
import "./Category.css";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FilterContext } from "../../Contexts/FilterContext/FilterContext";

function Category({ name, image, categoryName }) {
  const navigate = useNavigate();
  const { filterDispatch } = useContext(FilterContext);

  const handleNavigation = () => {
    navigate(`/productpage/${categoryName}`);
    filterDispatch({ type: "CATEGORY_FILTER", payload: categoryName });
  };

  return (
    <div className="cartegory-container" onClick={handleNavigation}>
      <div className="img-category-container">
        <img src={image} className="category-img" />
        <h3 className="category-name">{categoryName}</h3>
      </div>
    </div>
  );
}

export default Category;
