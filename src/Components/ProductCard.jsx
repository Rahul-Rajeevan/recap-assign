import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div>
      <Link to={`/product/${product.id}`}><img src={product.image} alt="" /></Link>
      <h3>brand: {product.brand}</h3>
      <p>price: {product.price}</p>
      <p>category: {product.gender}</p>
      <p>description: {product.description}</p>
      <button style={{color:"blue"}}>
        <Link to={`/edit/${product.id}`}>Edit</Link>
      </button>
    </div>
  )
}

export default ProductCard