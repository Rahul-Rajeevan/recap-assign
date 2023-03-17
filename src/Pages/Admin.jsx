import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../Redux/ProductReducer/action";

const initialSate = {
  image: "https://via.placeholder.com/300",
  brand: "",
  price: "",
  description: "",
  gender: "",
};
const Admin = () => {
  const [product, setproduct] = useState(initialSate);
  const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product))
    setproduct(initialSate)
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setproduct((prev) => {
      return { ...prev, [name]: name==="price"?+value:value };
    });
   
  };

  return (
    <Wrapper>
      <form className="form1" onSubmit={(e) => handleSubmit(e)}>
        <FormControl
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <FormLabel>Image</FormLabel>
          <Input
            type="url"
            name="image"
            value={product.image}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Brand</FormLabel>
          <Input
            type="text"
            name="brand"
            value={product.brand}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            name="price"
            value={product.price}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            name="description"
            value={product.description}
            onChange={(e) => handleChange(e)}
          />
          <Select placeholder="Select category" value={product.gender} name="gender" onChange={(e) => handleChange(e)}>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
          </Select>
        </FormControl> 
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
width: 400px;
margin: auto;

.form-1{
  display:flex;
  flex-direction:column;
  gap:15px;
}

input{
  width:80%;
  height:40px;
}
select{
  width:80%;
  height:40px;
}
button{
  width:20%;
  height:35px;
}
`;

export default Admin;
