import React, { useContext } from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Count from './Count';
import { authContext } from '../../Contexts/Auth/AuthContext';
import { cartContext } from '../../Contexts/Cart/CartContext';
import { wishlistContext } from '../../Contexts/Wishlist/Wishlist';
import { FilterContext } from '../../Contexts/FilterContext/FilterContext';




function Navbar() {
  const {isLogged,logoutHandler} = useContext(authContext)
  const {cartState}=useContext(cartContext)
  const {wishlistState} = useContext(wishlistContext)
  const {filterDispatch} = useContext(FilterContext)

const Navigate = useNavigate()
  return (
    <div className='nav-bar'>
      <h3> <Link to='/'>BikersHub</Link> </h3>
      <input type="text" name='text' placeholder='search products..' onClick={()=>Navigate('/productpage')} onChange={(e)=>filterDispatch({type:"SEARCH_FILTER",payload:(e.target.value)})} autoComplete="off" />
       <div className='Nav-btns'>
        {isLogged?(<button className='btn-login' onClick={logoutHandler}>Logout</button>):((<button className='btn-login'><Link to='/login'  style={{textDecoration:"none",backgroundColor:"transparent",color:"brown"}}>Login</Link></button>))}
        <FontAwesomeIcon icon={faHeart} color='var(--primary-color)' size='xl' onClick={()=>(Navigate(`/wishlist`))} />
       {wishlistState.wishlistCount >0 &&  <Count count={wishlistState.wishlistCount}/>}
        <FontAwesomeIcon icon={faCartShopping} color='var(--primary-color)' size='lg' onClick={()=>(Navigate('/cart'))}  />
       <div className='cart-count'> {cartState.cartCount>0 && <Count count={cartState.cartCount} />}</div>
       <FontAwesomeIcon icon={faUser} size='xl' color='black' onClick={()=>Navigate("/profile")}  />
       </div>
    </div>
  )
}

export default Navbar
