import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ProductContext } from '../../Contexts/Category/ProductContext'
import './singleProduct.css'
import { cartContext } from '../../Contexts/Cart/CartContext'



function SingleProduct() {

const [toggle,setToggle] = useState(false)
const {singleProductId} = useParams()
const {products} = useContext(ProductContext)
const {addToCart} = useContext(cartContext)
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
       <div className="image-container">
          <img src={imageUrl} alt={title} />
       </div>
       <div className="product-details-container">
         <p>{title}</p>
          <p>{name}</p>
          <p>Rs.{price}</p>
          <p style={{color:"yellow"}}>Discount : {discount*100}%</p>
          {toggle?<button onClick={()=>handleGoToCart()}>go to cart</button>:<button onClick={()=>handleAddtoCart()}>add to cart</button>}
       </div>
    </div>
  )
}

export default SingleProduct
 