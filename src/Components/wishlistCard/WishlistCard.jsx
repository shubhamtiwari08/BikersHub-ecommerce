import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import './WishlistCard.css'
import { useNavigate } from 'react-router'
import { cartContext } from '../../Contexts/Cart/CartContext'
import { wishlistContext } from '../../Contexts/Wishlist/Wishlist'

function WishlistCard({product}) {
  const {title,price,imageUrl,name,_id,category} = product
  const {addToCart,cartState} = useContext(cartContext) 
  
  const {addToWishlist,removeFromWishlist} = useContext(wishlistContext)
  const Navigate = useNavigate()
  const finalCart = cartState.cart

  const moveToCart = (product) =>{
    removeFromWishlist(product)
    addToCart(product)
  }

  return (
    <div className='product-container'>
    <div className='product-image
    '><img src={imageUrl} onClick={()=> Navigate(`/productpage/${category}/${_id}`)}/>
    </div>
      <h4>{title}</h4>
      <h2>{price}</h2>
       <p>{name}</p>
       <button className='addtocart-btn' onClick={()=>moveToCart(product)}>Move to cart</button>
      
      <button className='wishlist-btn' onClick={()=>removeFromWishlist(product)}><FontAwesomeIcon icon={faHeart} size='xl' style={{color:"red",cursor:"pointer"}} /></button>
    </div>
  )
}

export default WishlistCard
