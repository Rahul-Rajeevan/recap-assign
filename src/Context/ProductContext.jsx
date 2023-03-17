import { useReducer, useState } from "react";
import { createContext } from "react";

export const ProductContext=createContext()
const initialState={
    isLoading:false,
    products:[],
    isError:false
  }
function ProductContextProvider({children}) {
    const reducer=(state=initialState,{type,payload})=>{
        switch(type){
            case "PRODUCT_REQUEST":
                return {...state,isLoading:true}
            case "PRODUCT_FAILURE":
                return {...state,isLoading:false, isError:true}
            case "GET_PRODUCT_SUCCESS":
                return {...state,isLoading:false,products:payload}
            case "POST_PRODUCT_SUCCESS":
                return {...state,isLoading:false}
            case "PATCH_PRODUCT_SUCCESS":
                return {...state,isLoading:false}
            default:
                return state;
        }
        }
        const [state, dispatch] = useReducer(reducer,initialState) 
return <ProductContext.Provider value={{ state,dispatch}}>{children}</ProductContext.Provider>
}

export default ProductContextProvider;
