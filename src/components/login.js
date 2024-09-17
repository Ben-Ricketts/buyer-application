import React from "react";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleAccountCreateClick() {
    navigate("/signup");
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" />
        </div>
      </form>
      <button>Login</button>
      <button onClick={handleAccountCreateClick}>Create an account</button>
    </div>
  );
}

export default Login;
