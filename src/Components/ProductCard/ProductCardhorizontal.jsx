import React, { useContext } from 'react'
import './Productcardhorizontal.css'
import { cartContext } from '../../Contexts/Cart/CartContext'
import { wishlistContext } from '../../Contexts/Wishlist/Wishlist'

function ProductCardhorizontal({product}) {

  const {removeFromCart,cartDispatch,getCart,increment,decrement,cartState} = useContext(cartContext)
  const {addToWishlist,wishlistState,removeFromWishlist} = useContext(wishlistContext)
  const{title,discount,name,brand,price,imageUrl,category,_id} = product

  const finalCart = cartState.cart
  console.log( )

  const handleMoveToWishlist = (product)=>{
         removeFromCart(product)
         addToWishlist(product)
  }


  return (
    <div className='product-card-body' onClick={()=> getCart()}>
    <div className='product-card-horizontal'>
      <img src={imageUrl} alt="product-image" />
      <div className="product-details">
        <p>{title}</p>
        <p>{name}</p>
        <h4>Rs.{price}</h4>
         <p style={{textDecoration:"line-through",display:"block",color:"grey"}}>({Math.floor(price *(discount+1))})</p>
        <h5 style={{color:"green"}}>Discount {discount*100} % off</h5>
        <div className="quantity-box">
            <p>Quantity</p>
           <button className="increment-button" onClick={()=>decrement(product)}>-</button>
           <p>{finalCart.find(item=>Number(item.id) === Number(product.id))?.qty } </p>
           <button className="decrement-button" onClick={()=>increment(product)}>+</button>
        </div>
        <div className="cart-btns">
           <button className="addtocart-btn button" onClick={()=>removeFromCart(product)} >Remove from cart</button>
           {wishlistState.wishlist.find(item=> item._id === _id)?<button className="addtocart-btn button" onClick={()=>removeFromWishlist(product)}>remove from wishlist</button>:<button className="addtocart-btn button" onClick={()=>handleMoveToWishlist(product)}>Move to wishlist</button>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductCardhorizontal
