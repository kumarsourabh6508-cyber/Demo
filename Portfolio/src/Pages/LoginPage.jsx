import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email.trim() || !password.trim()) {
      alert("Please fill all the fields");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("PortFolioUsers")) || [];

    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (!existingUser) {
      alert("User is not available. Please signup first.");
      return;
    }

    if (existingUser.password !== password) {
      alert("Incorrect password");
      return;
    }

    const fakeToken =
      `privateToken-${existingUser.id}-${Date.now()}`;

    localStorage.setItem("token", fakeToken);

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      })
    );

    alert("Login successfully");

    navigate("/");
  };

  return (
    <section className="login-page">
      <div className="login-card">

        <div className="login-heading">
          <span className="login-badge">
            Welcome Back
          </span>

          <h1>Login</h1>

          <p>
            Enter your email and password to continue.
          </p>
        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <div className="login-form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="login-form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>
        </form>

        <p className="login-footer">
          Don&apos;t have an account?{" "}
          <Link to="/signup">
            Create Account
          </Link>
        </p>

      </div>
    </section>
  );
};

export default LoginPage;