import axios from "axios"
import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes"

export const getProductSuccess=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}

export const postProductSuccess=(payload)=>{
    return {type:POST_PRODUCT_SUCCESS,payload}
}

export const editProductSuccess=(payload)=>{
    return {type:PATCH_PRODUCT_SUCCESS,payload}
}

export const productRequest=(payload)=>{
    return {type:PRODUCT_REQUEST}
}

export const productFailure=(payload)=>{
    return {type:PRODUCT_FAILURE}
}

export const addProduct=(payload)=>(dispatch)=>{
    dispatch(productRequest())
    axios.post("http://localhost:8080/products",payload).then(()=>{
        dispatch(postProductSuccess())}).catch((err)=>{
            dispatch(productFailure())
        })
}

export const getProduct=(params)=>(dispatch)=>{
    dispatch(productRequest())
    axios.get("http://localhost:8080/products",params).then((res)=>{
        dispatch(getProductSuccess(res.data))}).catch((err)=>{
            dispatch(productFailure())
        })
}

export const editProduct=(id,payload)=>(dispatch)=>{
    dispatch(productRequest())
    axios.patch(`http://localhost:8080/products/${id}`,payload).then(()=>{
        dispatch(editProductSuccess())}).catch((err)=>{
            dispatch(productFailure())
        })
}