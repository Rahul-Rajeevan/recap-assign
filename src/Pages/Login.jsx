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
      <form className="form-1" onSubmit={(e) => handle(e)}>
      <h3>{auth.isAuth ? "Login Success" : "Login Failure"}</h3>
      <label>Email</label>
        <input
          type="email"
          placeholder="email"
          ref={(e) => (user.current["email"] = e)}
        />
        <label>Password</label>
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
  background-color: #cf3c3c;
  width: 100%;
  height: 100vh;
  margin-top: -70px;
  padding-top: 70px;
  margin: auto;

  .form-1 {
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
    height: 60vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;
    /* color: white; */
    margin: auto;
    justify-content: space-evenly;
  }

  h3 {
    color: ${({ auth }) => (auth.isAuth ? `green` : `red`)};
  }

  input {
    width: 80%;
    height: 40px;
  }

  button {
    background-color: #cf3c3c;
    color: white;
    width: 70%;
    height: 45px;
    border-radius: 25px;
    font-size: 20px;
    border: none;
  }
  button:hover{
    background-color: #071a52;
    color: white;
    font-weight: bold;
    cursor: pointer;
}
`;

export default Login;
