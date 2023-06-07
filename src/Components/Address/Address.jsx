import React, { useContext, useState } from 'react'
import './Address.css'


function Address({values}) {
  
  const addressBox = ["d muniyappa layout,bengaluru"]
    const [inputToggle,setInputToggle] = useState(false)
    const [inputAddress, setInputAddress]= useState("")
    const [address , setAddress] = useState(addressBox)

    const addingAddress = ()=>{
        const newAddressBox = [...address,inputAddress]
       setAddress(newAddressBox)

    }

 


  return (
    <div className='address-contanier' >
    <div className="address-box">
    {address.map((item)=><div><input type='Radio' name='address' value={item}></input>{item} <button onClick={()=>setAddress(address.filter(name=> item !==(name)))}>delete</button></div>)}
    </div>
      {inputToggle?<div><input type='text' onChange={(e)=>setInputAddress(e.target.value)}/><button onClick={addingAddress}>add</button></div>: <button onClick={()=>setInputToggle(!inputToggle)}>add new address</button>}   
      
      
      </div>
  )
}

export default Address
