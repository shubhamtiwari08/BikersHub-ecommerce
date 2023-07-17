import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ProductContext } from '../../Contexts/Category/ProductContext'
import './singleProduct.css'
import { cartContext } from '../../Contexts/Cart/CartContext'
import { wishlistContext } from '../../Contexts/Wishlist/Wishlist'



function SingleProduct() {

const [toggle,setToggle] = useState(false)
const {singleProductId} = useParams()

const {products} = useContext(ProductContext)
const {removeFromWishlist,addToWishlist,wishlistState} = useContext(wishlistContext)
const {addToCart,cartState} = useContext(cartContext)
const Navigate = useNavigate()


const singleProduct = products.find(({_id})=> _id === singleProductId)

const {_id,name,title,price,imageUrl,rating,discount} = singleProduct


const handleGoToCart = ()=>{
  setToggle(!toggle)
  Navigate('/cart')
}

const handleAddtoCart = ()=>{
  setToggle(!toggle)
  addToCart(singleProduct)
  
}

  return (
    <div className='product-container-main'>
      <div className="content-container">
       <div className="image-container">
          <img src={imageUrl} alt={title} />
       </div>
       <div className="product-details-container">
         <h3>{title}</h3>
          <p>{name}</p>
          <p>Rs.{price} <span style={{color:"grey", textDecoration:"line-through"}}>({Number(price)+Number(price*discount)})</span></p>
          <span className="discount">Discount : {discount*100}%</span>
          <div className="singleProduct-btns">
          {wishlistState.wishlist.find(item=> singleProduct._id === item._id)?<button className="addtocart-btn button" style={{backgroundColor:"var(--primary-color)",color:"var(--Neutral-color)"}}  onClick={()=>removeFromWishlist(singleProduct)}>remove from wishlist</button>:<button className="addtocart-btn button" onClick={()=>addToWishlist(singleProduct)}>add to wishlist</button>}
          {cartState.cart.find(item => item._id === singleProduct._id)?<button className="addtocart-btn button" style={{backgroundColor:"var(--primary-color)",color:"var(--Neutral-color)"}}  onClick={()=>handleGoToCart()}>go to cart</button>:<button className="addtocart-btn button" onClick={()=>handleAddtoCart()}>add to cart</button>}
          </div>
       </div>
       </div>
    </div>
  )
}

export default SingleProduct
 