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
display:flex;
align-items:center;
gap:20px;
border-bottom: 1px solid gray;
`

export default Navbar