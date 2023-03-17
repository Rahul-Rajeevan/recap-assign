import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const user = useRef({});
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store.authentication);

  const handle = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: user.current.email.value,
        password: user.current.password.value,
      })
    ).then(() => navigate(location.state, { replace: true }));
  };
  return (
    <DIV auth={auth}>
      <h3>{auth ? "Login Success" : "Login Failure"}</h3>
      <form className="form-1" onSubmit={(e) => handle(e)}>
        <input
          type="email"
          placeholder="email"
          ref={(e) => (user.current["email"] = e)}
        />
        <input
          type="password"
          placeholder="password"
          ref={(e) => (user.current["password"] = e)}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: auto;

  .form-1 {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  h3 {
    color: ${({ auth }) => (auth ? `green` : `red`)};
  }

  input {
    width: 80%;
    height: 40px;
  }

  button {
    width: 20%;
    height: 35px;
  }
`;

export default Login;
