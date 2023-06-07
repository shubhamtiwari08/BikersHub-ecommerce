import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router'
import { cartContext } from '../../Contexts/Cart/CartContext'
import { wishlistContext } from '../../Contexts/Wishlist/Wishlist'
import { authContext } from '../../Contexts/Auth/AuthContext'

function ProductCard({product}) {
  const {title,price,imageUrl,name,_id,category,rating} = product
  const {addToCart,cartState} = useContext(cartContext) 
  
  const {removeFromWishlist,addToWishlist,wishlistState} = useContext(wishlistContext)
  const {isLogged} = useContext(authContext)
  const Navigate = useNavigate()
  const finalCart = cartState.cart
  const finalWishlist = wishlistState.wishlist


  return (
    <div className='product-container'>
      <img src={imageUrl} onClick={()=> Navigate(`/productpage/${category}/${_id}`)}/>
      <h4>{title}</h4>
       <p className='product-name'>{name}</p>
       <h5>Rs.{price}</h5>
       <p>Rating : {rating}</p>
       {finalCart.find(item=> product._id === item._id)?(<button className='addtocart-btn' style={{backgroundColor:"brown"}} onClick={()=> Navigate('/cart')}>Go to cart</button>):(<button className='addtocart-btn' onClick={isLogged?()=> addToCart(product):()=>Navigate('/login')}>Add to cart</button>)}
       {finalWishlist.find(item=> item._id === product._id)?
        <button className='wishlist-btn' style={{backgroundColor:finalWishlist.find(item=> item._id === product._id)?"red":""}} onClick={()=>removeFromWishlist(product)}><FontAwesomeIcon icon={faHeart} size='xl' /></button>:
      <button className='wishlist-btn' style={{backgroundColor:finalWishlist.find(item=> item._id === product._id)?"red":""}} onClick={isLogged?()=>addToWishlist(product):()=>Navigate('/login')}><FontAwesomeIcon icon={faHeart} size='xl' /></button>
       }
    </div>
  )
}

export default ProductCard
