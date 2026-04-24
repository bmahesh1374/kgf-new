import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

 const handleLogin = (e) => {
    e.preventDefault();

 
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter Email and Password");
      return;
    }

    if (email === "kgf@gmail.com" && password === "kgfadmin123") {
      alert("Login Successful");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
  <div className="login-page">
    <div className="login-box">

      {!showRegister ? (
        <>
          <h3 className="login-title">MEMBER LOGIN</h3>

          <span
            className="close-btn"
            onClick={() => navigate(-1)}
          >
            ✖
          </span>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email-ID</label>
              <input
                type="text"
                placeholder="Email-ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-actions">
              <button type="submit">LOGIN</button>

              <div className="links-fr">
                <p>Forgot Password</p>

                <p onClick={() => setShowRegister(true)}>
                  Register Now
                </p>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <h3 className="login-title">MEMBER REGISTRATION</h3>

          <span
            className="close-btn"
            onClick={() => navigate(-1)}
          >
            ✖
          </span>

          <div className="input-group">
            <label>Email-ID</label>
            <input type="text" placeholder="Email / Phone" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" />
          </div>

          <div className="login-actions">
            <button>REGISTER</button>

            <div className="links-fr">
              <p onClick={() => setShowRegister(false)}>
                Already have account? Login
              </p>
            </div>
          </div>
        </>
      )}

    </div>
  </div>

  );
}

export default Login;