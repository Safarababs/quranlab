import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for page navigation
import PageHeader from "./Pages Header/PageHeader"; // Import the PageHeader component

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "almas" && password === "51214") {
      // Store user info in localStorage for persistence
      localStorage.setItem("username", username);
      navigate("/write"); // Redirect to the Write page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      {/* PageHeader Section */}
      <PageHeader
        title="Login"
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Login", active: true },
        ]}
      />

      <div className="container py-5">
        <h2 className="mb-4 text-center">Login</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h3 className="text-center mb-4">Please log in to continue</h3>

              {/* Username Input */}
              <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="form-group mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="btn btn-primary btn-block"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
