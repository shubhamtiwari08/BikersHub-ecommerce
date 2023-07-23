import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router";
import Toast from "../../Components/Toast/Toast";
import { Link } from "react-router-dom";

function Signup() {
  const defaultData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [signupData, setSignupData] = useState(defaultData);
  const Navigate = useNavigate();

  console.log(signupData);

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(signupData);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupData.firstName === "" || signupData.password === "") {
      Toast({ type: "error", message: "invalid details" });
    } else {
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        });

        if (response.status === 201) {
          Toast({ type: "success", message: "user signed in" });

          Navigate("/login");
        } else {
          Toast({ type: "error", message: "something broke" });
        }
      } catch (error) {
        if (error.response === 422) {
          Toast({ type: "error", message: error });
        } else {
          Toast({ type: "error", message: "something broke" });
        }
      }
    }
  };

  return (
    <div className="signup-body">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="firstName"
            value={signupData.firstName}
            placeholder="First Name"
            onChange={handleInput}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={signupData.lastName}
            onChange={handleInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={handleInput}
          />
          <button type="submit" className="button">
            Signup
          </button>
        </form>
        <p>
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
