import React, { useContext } from 'react'
import './CartDetails.css'
import { useNavigate } from 'react-router'
import { ProductContext } from '../../Contexts/Category/ProductContext'

function CartDetails({cartDetail}) {

  const {cartSum,cartDiscount,cartCount}=cartDetail
  


  const Navigate = useNavigate()

  const handleCheckout=()=>{
        Navigate('/orderSummary')
  }

  return (
    <div className='cart-details-main-box'>
    <div className='cartDetails-box'>
      <h3><hr/>PRICE DETAILS <hr/></h3>
       <div className="detail-box">
          <p>price</p><p>{cartSum}</p>
          <p>Discount</p><p>{cartDiscount}</p>
          <p>Total amount</p><p>{cartSum - cartDiscount}</p>
          <p style={{color:"green"}}><hr/>Total savings<hr/></p><p style={{color:"green"}}> <hr/>{cartDiscount}<hr/></p>
       </div>
       <button className='addtocart-btn button' onClick={handleCheckout} >Checkout</button>
    </div>
    </div>
  )
}

export default CartDetails
