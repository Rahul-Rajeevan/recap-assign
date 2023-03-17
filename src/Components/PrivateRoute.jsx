import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
const {auth}=useSelector((store)=>store.authentication)
const location=useLocation();
console.log(location.pathname);
  return auth?children:<Navigate to={"/login"} state={location.pathname} replace={true}/>
}

export default PrivateRoute