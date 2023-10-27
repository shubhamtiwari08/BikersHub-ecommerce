import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { authContext } from "../../Contexts/Auth/AuthContext";
import { useNavigate } from "react-router";
import Toast from "../../Components/Toast/Toast";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function Login() {
  const { isLogged, userData, setUserData, logoutHandler, setIsLogged } =
    useContext(authContext);

  const defaultData = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(defaultData);
  const guest = { email: "adarshbalika@gmail.com", password: "adarshbalika" };
  const Navigate = useNavigate();

  const handleInput = (e) => {
    const { value, name } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (loginData) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (response.status === 200) {
        setIsLogged(true);
        const data = await response.json();
        setUserData(data.foundUser);
        const { encodedToken } = data;
        localStorage.setItem("Token", encodedToken);
        console.log(localStorage.getItem("Token"),"tokeeeeeeeeeeen")
        setLoginData(defaultData);
        Navigate("/productpage");
        setIsLogged(true);
        Toast({ type: "success", message: "Logged in successfully" });
      } else {
        if (loginData.email.length === 0||loginData.password.length === 0) {
          Toast({ type: "error", message: "wrong email or password" });
        }
      }
    } catch (error) {
      Toast({ type: "error", message: error });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginData);
  };

  const handleGuest = () => {
    setLoginData(guest)
  };

  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWI5NWYyMC04ZDgzLTQ0MzktOGI3ZC1lNGEzOGRlMjUxODkiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.xnaHqWs8YqgBptGtuky3F0xtHJDfz-J8_Wglpu2vYtY

  return (
    <>
    <div className="login-form-maincontainer">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleInput}
          />

          <button className="button" type="submit">
            Login
          </button>
          <button className="button" onClick={handleGuest}>
            Login as guest
          </button>
          <p>
            New user? <Link to={"/signup"}>Signup</Link>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
