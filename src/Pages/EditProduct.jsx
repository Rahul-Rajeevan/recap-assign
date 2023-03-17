import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { store } from '../Redux/store'
import { editProduct } from '../Redux/ProductReducer/action'

const EditProduct = () => {
  // const location=useLocation()
  // console.log(location);
  const {id}=useParams()
  const {products}=useSelector((store)=>store.product)
  const [data,setData]=useState("")
  const dispatch=useDispatch()
  const handle=()=>{
    const newData={
      price:data
    }
    dispatch(editProduct(id,newData))
    // console.log(newData);
  }
  useEffect(() => {
   const item= products.find((e)=>e.id===+id)
   item&&setData(item.price)
  }, [])
  
  return (
    <div>
      <input type="number" placeholder='price' value={data} onChange={(e)=>setData(e.target
        .value)}/>
      <button onClick={handle}>Submit</button>
    </div>
  )
}

export default EditProduct