import React, { useContext } from 'react'
import './wishlist.css'
 
import { wishlistContext } from '../../Contexts/Wishlist/Wishlist'
import WishlistCard from '../../Components/wishlistCard/WishlistCard'
import Loading from '../../Components/Loading/Loading'


function Wishlist() {
 
  const {wishlistState} = useContext(wishlistContext)
 
  const finalWishlist = (wishlistState.wishlist)

  console.log(finalWishlist)

  return (

    <div className='wishlist-body'>
    <h1>wishlist</h1>
     <div className="wishlist-box">
     {finalWishlist.length === 0 ?(<div><h1 style={{display:"flex",justifyContent:'center',alignItems:"center",color:"yellow" }}>YOUR WISHLIST IS EMPTY</h1><Loading/></div>):finalWishlist.map(item => <WishlistCard product={item}/>)}
     
     </div>
 

    </div>
  )
}

export default Wishlist
