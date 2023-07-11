import React, { Children, createContext, useContext, useEffect, useReducer } from 'react'
import { ProductContext } from './ProductContext'



const FilterContext = createContext()





function ProductCompose({children}) {

const {setProducts,products} = useContext(ProductContext)

const ProductReducer =(state,action)=>{

}

  
  
  
const [productState, productDispatch] = useReducer(ProductReducer,{price:1000,fastDelivery:false,rating : 5})



  return (
    <FilterContext.Provider value={{productState,productDispatch}}>
    {children}   
    </FilterContext.Provider>
  )
}

export default ProductCompose
