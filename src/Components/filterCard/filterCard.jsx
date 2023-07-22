import React, { useContext, useEffect } from 'react'
import './filtercard.css'
import { useNavigate, useParams } from 'react-router'
import { useCategory } from '../../Contexts/Category/categoryContext'
import { ProductContext } from '../../Contexts/Category/ProductContext'
import { FilterContext } from '../../Contexts/FilterContext/FilterContext'

function FilterCard() {

  const {categoryId} = useParams()
  const Navigate = useNavigate()
  const {categoryData} = useContext(useCategory)
  const {filterState,filterDispatch} = useContext(FilterContext)


  const {categories,price,rating,sort} = filterState

  const enders = "Fenders"

  console.log(filterState.categories[enders])

  console.log(categoryData)


  const updateCategory = (pageName)=> {
    Navigate(`/productpage/${pageName}`,
    filterDispatch({type:"CATEGORY_FILTER", payload:pageName}))
  }

  console.log(filterState.categories)

  const clear = () =>{
    filterDispatch({type:'CLEAR'})
    Navigate('/productpage')
}


  return (
    <div className='filter-main-container'>
      <div className="filter-heading">
        <h3>FILTER</h3>
        <button onClick={clear}>CLEAR</button>
      </div>
      <div className="price-range-container">
        <h3>Price</h3>
         <div className="price-range">
          <p>1k</p>
          <p>2k</p>
          <p>5k</p>
         </div>
        <input type="Range"  
        min="1000"
        max="5000"
        step="2000"
        className="slider"
        value={price} 
        onChange={(e)=>filterDispatch({type:"PRICE_FILTER",payload:e.target.value})}
        />
      </div>
      <div className="category-container">
        <h3>Category</h3>
        {categoryData.map(({categoryName})=>{
          return (<label htmlFor={`${categoryName}`}> 
          <input type="checkbox" name='categories'  checked={filterState.categories[categoryName] } value={categoryName}  onClick={(e)=>updateCategory(e.target.value)}  />{categoryName}
          </label>)
        })}
      </div>
      <div className="rating-container">
      <h3>Rating</h3>
        <label htmlFor="4stars">
        <input type="checkbox" name='4stars'  onClick={()=> filterDispatch({type:"RATING_FILTER",payload:4})}/>4 stars & above
        </label> <label htmlFor="3stars">
        <input type="checkbox" name='3stars' onClick={()=> filterDispatch({type:"RATING_FILTER",payload:3})}/>3 stars & above
        </label> <label htmlFor="2stars">
        <input type="checkbox" name='2stars' onClick={()=> filterDispatch({type:"RATING_FILTER",payload:2})}/>2 stars & above
        </label> <label htmlFor="1star">
        <input type="checkbox" name='1star' onClick={()=> filterDispatch({type:"RATING_FILTER",payload:1})}/>1 stars & above
        </label>
      </div>
      <div className="sort-container">
      <h3>Sort By</h3>
       <label htmlFor="two">
      <input type="radio" name='two' onClick={()=>filterDispatch({type:"SORT_FILTER",payload:"HIGH_TO_LOW"})}/>High to Low
      </label>
     <label htmlFor="two">
      <input type="radio" name='two' onClick={()=>filterDispatch({type:"SORT_FILTER",payload:"LOW_TO_HIGH"})}/>Low to High
      </label>
      </div>

    </div>
  )
}

export default FilterCard
