import React, { useEffect } from 'react'
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Redux/ProductReducer/action';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const dispatch=useDispatch()
  const [searchParams]=useSearchParams()
  const location=useLocation()
  const {products}=useSelector((store)=>store.product)
  useEffect(() => {
    let obj={params:{gender:searchParams.getAll("category"),_sort:searchParams.get("order")&&"price",_order:searchParams.get("order")}}
    dispatch(getProduct(obj))
  }, [location.search])
  
  return (
    <DIV>
{products.length>0&&products.map((e)=><ProductCard key={e.id} product={e}/> )}
    </DIV>
  )
}

const DIV=styled.div`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(300px,max-content));
grid-gap:10px;
`

export default ProductList