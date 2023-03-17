import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {
  const { auth } = useContext(AuthContext);
const location=useLocation();
  return auth.isAuth?children:<Navigate to={"/login"} state={location.pathname} replace={true}/>
}

export default PrivateRoute