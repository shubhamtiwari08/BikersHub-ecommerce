import React, { useContext, useState } from 'react'
import './Address.css'
import { authContext } from '../../Contexts/Auth/AuthContext'


function Address({values}) {
  
  const addressBox = ["d muniyappa layout,bengaluru"]
    const [inputToggle,setInputToggle] = useState(false)

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
      firstName :"pandu",
      lastName :"sandu",
      address:"xyz, ohio, aret d51",
      streetAddress:"green street",
      pincode:"9999888",
      city:"Delli",
      state:"Mental pradesh"
    })
    const {userData} = useContext(authContext)
    const [address , setAddress] = useState( [{
      firstName :"pandu",
      lastName :"sandu",
      address:"xyz, ohio, aret d51",
      streetAddress:"green street",
      pincode:"9999888",
      city:"Delli",
      state:"Mental pradesh"
    }])

    const handleInput=(e)=>{
       const name = e.target.name
       const value = e.target.value
      setInputAddress({...inputAddress,[name]:value})
    }

    const handleSubmit = (e)=>{
       e.preventDefault(e)
        const newAddressBox = [...address,inputAddress]
       setAddress(newAddressBox)
       setInputToggle(!inputToggle)
    }

    const handleDummyAddress=(e)=>{
      e.preventDefault()
      setAddress()
    }



    const findAddress = address.find((item)=>item.firstName === userData.firstName)

    console.log(userData.firstName)
    console.log(findAddress)
 


  return (
    <div className='address-contanier' >
    <div className="address-box">
      {address.map(item => <div>{`${item.firstName}, ${item.address}, ${item.streetAddress}, ${item.pincode},${item.city},${item.state}`}</div>)}
    </div>
      {inputToggle?<div className='address-form'>
        <form type="submit">
                <input type="text" onChange={handleInput} value={findAddress?.firstName} name='firstName' placeholder='firstName'/>
                <input type="text" onChange={handleInput} value={findAddress?.lastName} name='lastName' placeholder='lastName'/>
                <input type="text" onChange={handleInput} value={findAddress?.address} name='address' placeholder='address'/>
                <input type="text" onChange={handleInput} value={findAddress?.streetAddress} name='streetAddress' placeholder='streetAddress'/>
                <input type="text" onChange={handleInput} value={findAddress?.pincode} name='pincode' placeholder='pincode'/>
                <input type="text" onChange={handleInput} value={findAddress?.city} name='city' placeholder='city'/>
                <input type="text" onChange={handleInput} value={findAddress?.state} name='state' placeholder='state'/>
                <div className="address-btns">
                    <button onClick={handleSubmit}>save</button>
                    <button onClick={()=>setInputToggle(!inputToggle)}>Cancel</button>
                    <button onClick={handleDummyAddress}>fill with Dummy details</button>
                </div>
            </form>
        </div>:  <button onClick={()=>setInputToggle(!inputToggle)}>add new address</button>}   
    </div>
  )
}

export default Address
