import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./productpage.css";
import FilterCard from "../../Components/filterCard/filterCard";
import { ProductContext } from "../../Contexts/Category/ProductContext";
import {
  getCategoryFilteredData,
  getPriceFilteredData,
  getRatingFilteredData,
  getSortedData,
  searchFilteredData,
} from "../../utils/ProductFilters";
import { FilterContext } from "../../Contexts/FilterContext/FilterContext";
import Loading from "../../Components/Loading/Loading";
import { cartContext } from "../../Contexts/Cart/CartContext";
import { wishlistContext } from "../../Contexts/Wishlist/WishlistContext";

function ProductPage() {
  const [filterToggle,setFilterToggle] = useState(true)
  const { products } = useContext(ProductContext);
  const { getCart } = useContext(cartContext);
  const { wishlistState, getWishlist } = useContext(wishlistContext);

  const {
    filterState: { price, sort, word, rating, categories },
  } = useContext(FilterContext);

  const PriceFilteredData = getPriceFilteredData(products, price);

  const RatingFilteredData = getRatingFilteredData(PriceFilteredData, rating);

  const CategoryFilteredData = getCategoryFilteredData(
    RatingFilteredData,
    categories
  );

  const sortedData = getSortedData(CategoryFilteredData, sort);

  const searchData = searchFilteredData(sortedData, word);

  const FinalProducts = searchData;


  const handleFilters = ()=>{
    setFilterToggle(!filterToggle)
  }

  useEffect(() => {
    getCart();
    getWishlist();
    setFilterToggle(false)
    console.log(wishlistState, "wishlist-check");
  }, []);

  return (
    <div className="product-page">
     <span className="filter-toggle-btn">
       <button className="addtocart-btn" onClick={handleFilters}>Filters</button>
     </span>
      <div className="filter-card" >
        
         <div className="desktop-filter"><FilterCard /></div> 
        {filterToggle&&<><div className="background-filter" onClick={handleFilters}></div><FilterCard /></> }
      </div>
      <div className="products-container">
        {FinalProducts.length > 0 ? (
          FinalProducts.map((item) => <ProductCard product={item} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default ProductPage;
