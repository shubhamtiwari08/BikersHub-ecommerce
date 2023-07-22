import React, { createContext, useReducer, useState } from 'react'
import { initialState, orderReducer } from '../../Reducers/orderReducer'

export const orderContext = createContext()






function OrderProvider({children}) {

    const [orderState,orderDispatch] = useReducer(orderReducer,initialState)

    const Token = localStorage.getItem("Token")

    const getAddress = async ()=>{
        try {
          const response = await fetch("api/user/address",{
            headers:{
                authorization:Token
            }
          })
          const data = await response.json()
          orderDispatch({type:"INITIALIZE_ADDRESS",payload:data.address})
        } catch (error) {
          
        }
      }

      const addAddress = async(address)=>{
         try {
            const response = await fetch("api/user/address",{
                method:"POST",
                headers:{
                    authorization:Token
                },
                body:JSON.stringify({
                    address,
                })
            })
            const data = await response.json()
            orderDispatch({type:"ADD_ADDRESS",payload:data.address})
            console.log(response,data)
         } catch (error) {
            console.log(error)
         }
      }

      const removeAddress = async(id)=>{
          try {
            const response = await fetch(`api/user/address/${id}`,{
                method:"DELETE",
                headers:{
                    authorization:Token
                }
            })

            const data = await response.json()
            orderDispatch({type:"ADD_ADDRESS",payload:data.address})
          
          } catch (error) {
            console.error(error) 
          }
      }


      const editAddress = async(id,updatedAddress)=>{
        try {
            const response = await fetch(`api/user/address/${id}`,{
                method:"POST",
                headers:{
                    authorization:Token
                },
                body:JSON.stringify({address:updatedAddress})
            })
            const data = await response.json()
            console.log(data, id)
            orderDispatch({type:"ADD_ADDRESS",payload:data.address})
        } catch (error) {
            
        }
      }


  return (
    <orderContext.Provider value={{getAddress,addAddress,removeAddress,orderState,editAddress}}>{children}</orderContext.Provider>
  )
}

export default OrderProvider
