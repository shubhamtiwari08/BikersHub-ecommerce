export const initialState = {
    orderAddress:[],
    priceDetails:{
        price:0,
        discount:0,
        coupoun:0,
        totalAmt:0,
        totalDiscount:0,
    }
}

export const orderReducer = (state,{type,payload})=>{
       switch (type){
        case "CHECKOUT":
            return {...state,priceDetails:{...state.priceDetails,payload}}
        case "INITIALIZE_ADDRESS":
            console.log("address")
            return {...state,orderAddress:payload}
        case "ADD_ADDRESS":
            return{...state,orderAddress:payload}
        default:
            return state
       }
}

