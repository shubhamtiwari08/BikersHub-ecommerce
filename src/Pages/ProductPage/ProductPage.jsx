import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import './productpage.css'
import FilterCard from '../../Components/filterCard/filterCard'
import  { ProductContext } from '../../Contexts/Category/ProductContext'
import { getCategoryFilteredData, getPriceFilteredData, getRatingFilteredData, getSortedData, searchFilteredData } from '../../utils/ProductFilters'
import { FilterContext } from '../../Contexts/FilterContext/FilterContext'
import Loading from '../../Components/Loading/Loading'
 




function ProductPage() {

  const {products } = useContext(ProductContext)
  
  const {filterState:{price , sort ,word, rating, categories }} = useContext(FilterContext)
 
  const PriceFilteredData = getPriceFilteredData(products,price)
  
 
  const RatingFilteredData = getRatingFilteredData(PriceFilteredData,rating)
 
  const CategoryFilteredData = getCategoryFilteredData(RatingFilteredData,categories)

 
  const sortedData = getSortedData(CategoryFilteredData,sort)
 
  const searchData =  searchFilteredData(sortedData,word)
 
  const FinalProducts = searchData
 
  return (
    <div className='product-page'>
    <FilterCard/>
     <div className="products-container">
     {FinalProducts.length > 0 ?FinalProducts.map(item => <ProductCard product={item}/>):<Loading/>}
     </div>
    </div>
  )
}

export default ProductPage
