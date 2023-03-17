import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';
import axios from"axios";
import { ProductContext } from '../Context/ProductContext';

const initialState={
  isLoading:false,
  products:[],
  isError:false
}
const ProductList = () => {
const [searchParams]=useSearchParams()
const location=useLocation()
const { state, dispatch } = useContext(ProductContext);

const getProduct=(params)=>{
  dispatch({type:"PRODUCT_REQUEST"})
  axios.get("http://localhost:8080/products",params).then((res)=>{
      dispatch({type:"GET_PRODUCT_SUCCESS",payload:res.data})}).catch((err)=>{
          dispatch({type:"PRODUCT_FAILURE"})
      })
}

  useEffect(() => {
    let obj={params:{gender:searchParams.getAll("category"),_sort:searchParams.get("order")&&"price",_order:searchParams.get("order")}}
    getProduct(obj)
  }, [location.search])
  
  return (
    <DIV>
{state.products.length>0&&state.products.map((e)=><ProductCard key={e.id} product={e}/> )}
    </DIV>
  )
}

const DIV=styled.div`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(300px,max-content));
grid-gap:10px;
`

export default ProductList