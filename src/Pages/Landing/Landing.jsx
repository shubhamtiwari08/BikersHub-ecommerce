import React, { useContext, useEffect, useState } from 'react'
import './Landing.css'
import Category from '../../Components/Category/Category'
import { useCategory } from '../../Contexts/Category/categoryContext'
import { FilterContext } from '../../Contexts/FilterContext/FilterContext'
import {  useNavigate } from 'react-router'

function Landing() {
  const images = ["https://wallpaper.dog/large/20373886.jpg",
                "https://wallpaper.dog/large/20373887.jpg",
                "https://wallpaper.dog/large/20373908.jpg",
                "https://wallpaper.dog/large/20373931.jpg"]

const {categoryData,categoriesHandle} = useContext(useCategory)
const {filterDispatch} = useContext(FilterContext)

console.log(categoryData)
 
 
const Navigate = useNavigate()
 
 
 
 
useEffect(()=>{
  categoriesHandle()
  filterDispatch({type:"CLEAR"})
},[])

return (
    <div className='landing-main-container'  >
      <div className='title-container'>
   
        <div>    <div className='hero-title'><h1>LOOKING FOR BIKE PARTS?</h1>
        <h3>Don't worry ! we got you covered. </h3></div>
        <img className="hero-img"src="https://wallpaperaccess.com/download/black-hd-motorcycle-4441" style={{width:"80rem"}} alt="hero-image" />
        </div>
      <button className='Shop-now' onClick={()=>Navigate('/productpage')}>SHOP NOW</button>
      </div>
    
      <div className='categories-container'>
      <h2 className='category-title'>shop by categories</h2>
      {
        categoryData.map(item => <Category image={item.image} categoryName={item.categoryName} id={item.id}/>)
      }
      </div>
   
    
    </div>
  )
}

export default Landing
