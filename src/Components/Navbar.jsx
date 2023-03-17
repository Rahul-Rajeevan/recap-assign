import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <DIV>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>LogIn</Link>
      <Link to={"/admin"}>Add Product</Link> 
    </DIV>
  )
}

const DIV=styled.div`
background-color: white;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
box-shadow: 0 0 5px rgba(0,0,0,0.2);
top:0;
position:sticky;
`

export default Navbar