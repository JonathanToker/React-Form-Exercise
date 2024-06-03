import React, { useState } from "react";
import { login } from "../libs/utils";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const isButtonDisabled = password.length < 6 || !email || isLoading;
  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      await login({ email, password });
      alert("Login successful!");
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      alert("Login failed! " + errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="field-wrapper">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field-wrapper">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={handleLogin}
        className="login-button"
        disabled={isButtonDisabled}
      >
        Login
      </button>
      {errorMessage ? <p className="error-message">{errorMessage}</p> : ""}
    </div>
  );
};

export default LoginForm;
