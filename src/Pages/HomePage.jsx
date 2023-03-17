import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import ProductList from '../Components/ProductList'

const HomePage = () => {
  return (
    <div style={{display:"flex",gap:"40px"}}>
    <div style={{width:"15%"}}><Sidebar/></div>
    <div style={{width:"85%"}}><ProductList/></div>
    
    </div>
  )
}

export default HomePage