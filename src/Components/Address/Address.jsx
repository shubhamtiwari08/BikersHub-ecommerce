import React, { useContext, useState } from 'react'
import './Address.css'
import { authContext } from '../../Contexts/Auth/AuthContext'


function Address({values}) {
  
  const addressBox = ["d muniyappa layout,bengaluru"]
    const [inputToggle,setInputToggle] = useState(false)
    const [inputAddress, setInputAddress]= useState("")
    const {userData} = useContext(authContext)
    const [address , setAddress] = useState([{
      firstName :"pandu",
      lastName :"sandu",
      address:"xyz, ohio, aret d51",
      streetAddress:"green street",
      pincode:"9999888",
      city:"Delli",
      state:"Mental pradesh"
    }])

    const addingAddress = ()=>{
        const newAddressBox = [...address,inputAddress]
       setAddress(newAddressBox)

    }

    const findAddress = address.find((item)=>item.firstName === userData.firstName)

    console.log(userData.firstName)
    console.log(findAddress)
 


  return (
    <div className='address-contanier' >
    <div className="address-box">
      {address.map(item => <div>{`${item.firstName}, ${item.address}, ${item.streetAddress}, ${item.pincode},${item.city},${item.state}`}</div>)}
    </div>
      {inputToggle?<div>
        <form type="submit">
                <input type="text" value={findAddress?.firstName} name='firstName' placeholder='firstName'/>
                <input type="text" value={findAddress?.lastName} name='lastName' placeholder='lastName'/>
                <input type="text" value={findAddress?.address} name='address' placeholder='address'/>
                <input type="text" value={findAddress?.streetAddress} name='streetAddress' placeholder='streetAddress'/>
                <input type="text" value={findAddress.pincode} name='pincode' placeholder='pincode'/>
                <input type="text" value={findAddress.city} name='city' placeholder='city'/>
                <input type="text" value={findAddress.state} name='state' placeholder='state'/>
                <div className="address-btns">
                    <button>save</button>
                    <button>Cancel</button>
                    <button>fill with Dummy details</button>
                </div>
            </form>
        </div>:  <button onClick={()=>setInputToggle(!inputToggle)}>add new address</button>}   
    </div>
  )
}

export default Address
