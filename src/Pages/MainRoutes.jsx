import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Admin from "./Admin";
import SingleProduct from "./SingleProduct";
import EditProduct from "./EditProduct";
import Login from "./Login";
import PrivateRoute from "../Components/PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} /> 
      <Route path="/product/:id" element={<PrivateRoute><SingleProduct /></PrivateRoute>} />
      <Route path="edit/:id" element={<PrivateRoute><EditProduct /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoutes;
