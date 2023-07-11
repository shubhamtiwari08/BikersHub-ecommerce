import React, { useContext } from 'react'
import Address from '../../Components/Address/Address'
import { cartContext } from '../../Contexts/Cart/CartContext'
import './Checkout.css'
import Toast from '../../Components/Toast/Toast'
import { useNavigate } from 'react-router'


function Checkout() {
    const{cartState,cartDispatch} = useContext(cartContext)
    const finalCart = cartState.cart
    const Navigate = useNavigate()


  

    const handlePlaceOrder = ()=>{
       Toast({type:"sucess",message:"order placed"})
       Toast({type:"error" ,message:"this is a dumy site"})
       Navigate('/')
    }


  return (
    <div className='order-main-container'>
    <h2>ORDER SUMMARY</h2>
       <div className="order-summary" style={{padding:"20px"}}>
        <ol>
        Products to be delived:
        {finalCart.map(item => <li><h4>{item.title}</h4> <h5>Rs.{item.price}</h5></li>) }</ol>
       </div>
       <div className="address-container">
      <Address/>
      <button onClick={handlePlaceOrder}>PLACE ORDER</button>
      </div>
    </div>
  )
}

export default Checkout
