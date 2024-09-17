import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "username") {
      setUser(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/signup", {
        username: user,
        password: password,
      })
      .then((response) => {
        console.log("Item posted", response.data);
        // Store the token in localStorage
        localStorage.setItem("jwtToken", response.data.token);
        // Optionally navigate to another page
        // navigate("/dashboard");
      })
      .catch((err) => {
        console.log("error posting user", err);
      });
  }

  function handleLoginClick() {
    navigate("/login");
  }

  return (
    <div>
      <h1>Signup</h1>
      <p>
        Already have an account?{" "}
        <a href="#" onClick={handleLoginClick}>
          Sign in
        </a>
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            name="username"
            value={user}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            value={password}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
