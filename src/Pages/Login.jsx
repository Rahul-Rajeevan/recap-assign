import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const user = useRef({});
  const location = useLocation();
  const navigate = useNavigate();
  const { auth, loginUser, logoutUser } = useContext(AuthContext);

  async function handle(e) {
    e.preventDefault();
    // setloading(true);

    let t = { email: user.current.email.value, password: user.current.password.value};

    try {
      let r = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(t),
      });
      let res = await r.json();

      if (res.token) {
        // console.log("token",res.token)
        loginUser(res.token);
        navigate(location.state, { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  }

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
