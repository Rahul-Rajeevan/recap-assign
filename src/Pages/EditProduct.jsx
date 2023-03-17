import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductContext } from '../Context/ProductContext';
import axios from 'axios';
import styled from 'styled-components';

const EditProduct = () => {
  // const location=useLocation()
  // console.log(location);
  const {state,dispatch} = useContext(ProductContext);
  const {id}=useParams()
  const [data,setData]=useState("")
  const handle=()=>{
    const newData={
      price:data
    }
    const editProduct=(id,payload)=>{
      dispatch({ type: "PRODUCT_REQUEST" });
      axios.patch(`http://localhost:8080/products/${id}`,payload).then(()=>{
        dispatch({ type: "PATCH_PRODUCT_SUCCESS" })}).catch((err)=>{
            dispatch({ type: "PRODUCT_FAILURE" });
          })
    }
    console.log(newData);
  }
  useEffect(() => {
   const item= state.products.find((e)=>e.id===+id)
   item&&setData(item.price)
  }, [])
  
  return (
    <DIV>
      <input type="number" placeholder='price' value={data} onChange={(e)=>setData(e.target
        .value)}/>
      <button onClick={handle}>Submit</button>
    </DIV>
  )
}
const DIV = styled.div`
button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3e8e41;
}

`;
export default EditProduct