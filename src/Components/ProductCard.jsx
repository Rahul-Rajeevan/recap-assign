import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ProductCard = ({product}) => {
  // const editProduct=(id,payload)=>{
  //   dispatch(productRequest())
  //   axios.patch(`http://localhost:8080/products/${id}`,payload).then(()=>{
  //       dispatch(editProductSuccess())}).catch((err)=>{
  //           dispatch(productFailure())
  //       })
  // }
  return (
    <DIV>
      <Link to={`/product/${product.id}`}><img src={product.image} alt="" /></Link>
      <h3> <strong>Brand:</strong> {product.brand}</h3>
      <p><strong>Price: </strong>{product.price}</p>
      <p><strong>Category: </strong> {product.gender}</p>
      <p><strong>Description: </strong> {product.description}</p>
      <button style={{color:"blue"}}>
        <Link to={`/edit/${product.id}`}>Edit</Link>
      </button>
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
export default ProductCard