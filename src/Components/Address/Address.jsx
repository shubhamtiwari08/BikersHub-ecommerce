import React, { useContext, useEffect, useState } from 'react'
import './Address.css'
import { authContext } from '../../Contexts/Auth/AuthContext'
import { orderContext } from '../../Contexts/OrderContext/OrderContext'


function Address({values}) {
   
  const {orderState,getAddress,addAddress,removeAddress,editAddress} = useContext(orderContext)
  const {orderAddress} = orderState
  const [inputToggle,setInputToggle] = useState(false)
  const [edit,setEdit]=useState(false)

    const dummyDetail =  {
      firstName :"pandu",
      lastName :"sandu",
      address:"xyz, ohio, aret d51",
      streetAddress:"green street",
      pincode:"9999888",
      city:"Delli",
      state:"Mental pradesh"
    } 
    const [inputAddress, setInputAddress]= useState( {
      name :"pandu",
      house :"sandu",
      city:"xyz, ohio, aret d51",
      state:"green street",
      country:"India",
      pincode:"9999888",
      mobile:"811238288"
    })

    const {userData} = useContext(authContext)
    const [address , setAddress] = useState( [{
      name :"",
      house :"",
      city:"",
      state:"",
      country:"",
      pincode:"",
      mobile:""
    }])

    const handleInput=(e)=>{
       const name = e.target.name
       const value = e.target.value
      setInputAddress({...inputAddress,[name]:value})
    }
    
    const handleSubmit = (e)=>{
       e.preventDefault(e)
       if(edit){

       }
       addAddress(inputAddress)
       setInputToggle(!inputToggle)
    }

    const handleDummyAddress=(e)=>{
      e.preventDefault()
      setAddress()
    }

    const handleRemoveAddress=(id)=>{
       removeAddress(id)
    }

    const handleEditAddress=(item)=>{
       setEdit(!edit)
       setAddress(item)
       setInputToggle(!inputToggle)
    }


 

    useEffect(()=>{
      getAddress()
    },[])

    console.log(orderAddress)

  return (
    <div className='address-contanier' >
    <div className="address-box">
      <div className='all-address-box'>
      {orderAddress.map(item => 
        <div className='single-address-box'>
        <input type='radio' value={`${item.name}, ${item.house}, ${item.city}, ${item.state},${item.country},${item.pincode}` }/>
        {`${item.name}, ${item.house}, ${item.city}, ${item.state},${item.country},${item.pincode}`} 
        <div className='single-address-btns'>
        <button className='remove-btn btn' onClick={()=>handleRemoveAddress(item._id)}>remove</button>
        <button className='edit-btn btn' onClick={()=>handleEditAddress(item)}>edit</button>
        </div>
        </div>)}
      </div>
    </div>
      {inputToggle?<div className='address-form'>
        <form type="submit">
                <input type="text" onChange={handleInput} value={address?.name} name='name' placeholder='name'/>
                <input type="text" onChange={handleInput} value={address?.house} name='house' placeholder='house'/>
                <input type="text" onChange={handleInput} value={address?.city} name='city' placeholder='city'/>
                <input type="text" onChange={handleInput} value={address?.state} name='state' placeholder='state'/>
                <input type="text" onChange={handleInput} value={address?.country} name='country' placeholder='country'/>
                <input type="text" onChange={handleInput} value={address?.pincode} name='pincode' placeholder='pincode'/>
                <input type="text" onChange={handleInput} value={address?.mobile} name='mobile' placeholder='mobile'/>
                <div className="address-btns">
                    <button onClick={handleSubmit}>{edit?"update":"save"}</button>
                    <button onClick={()=>setInputToggle(!inputToggle)}>Cancel</button>
                    <button onClick={handleDummyAddress}>fill with Dummy details</button>
                </div>
                </form>
        </div>:  <button className='addtocart-btn' onClick={()=>setInputToggle(!inputToggle)}>add new address</button>}   
    </div>
  )
}

export default Address
