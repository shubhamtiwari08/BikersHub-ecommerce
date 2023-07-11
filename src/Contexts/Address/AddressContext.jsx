import React, { createContext, useState } from 'react'

export const addressContext = createContext()

function AddressProvider() {
    const addressBox = []
    const [inputToggle,setInputToggle] = useState(false)
    const [inputAddress, setInputAddress]= useState("")
    const [address , setAddress] = useState(addressBox)

  return (
    <addressContext.Provider value={{inputToggle,setInputToggle,inputAddress,setInputAddress,address,setAddress,addressBox}}>
    </addressContext.Provider>


    )
}


export default AddressProvider
