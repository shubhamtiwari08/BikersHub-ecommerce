import React, { useContext, useEffect } from 'react'
import './cart.css'
import ProductCardhorizontal from '../../Components/ProductCard/ProductCardhorizontal'
import CartDetails from '../../Components/cartdetail/CartDetails'
import { cartContext } from '../../Contexts/Cart/CartContext'
import Loading from '../../Components/Loading/Loading'
import { authContext } from '../../Contexts/Auth/AuthContext'

function Cart() {

  const {cartState,cartDispatch}=useContext(cartContext)
  const {isLogged} = useContext(authContext)
  const Token = localStorage.getItem("Token")

  const finalCart = cartState.cart
  console.log(finalCart)

  

  return (
    <div>
    {finalCart.length  > 0 ?<div className='cart-main-container'>
    <div className="products-container">
    {finalCart.map(item=> <ProductCardhorizontal product={item}/>)}
    </div>
     <CartDetails cartDetail={cartState}/>
    </div>:
    <div className="cart-empty"><h1>YOUR CART IS EMPTY</h1><img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="Empty-cart-img"/></div>}
    </div>
  )
}

export default Cart
