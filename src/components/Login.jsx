import React, { useState } from "react";
import '../Login.css';
function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (form) => {
    setCurrentForm(form);
  };

  return (
    <div className="parent-container">
      <div className="card">
        <div className="Left-container"></div>

        {currentForm === "login" && (
          <div className="Right-container">
            <h1 className="header">MuYMuY</h1>
            <div className="nav">
              <nav className="login">
                <a href="#login" onClick={() => toggleForm("login")}>Login</a>
              </nav>
              <nav className="register">
                <a href="#register" onClick={() => toggleForm("register")}>Register</a>
              </nav>
            </div>
            <form className="container">
              <div className="input">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Username/Email Address"
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <div className="checkbox-container">
                <input className="checkbox" type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
                <label className="forgot-pw">
                  <a href="#" onClick={() => toggleForm("forgot-pw")}>Forgot Password?</a>
                </label>
              </div>
              <button type="submit">Sign in</button>
              <div className="other-container">
                <hr />
                <span className="Other">Other Login</span>
                <hr />
              </div>
              <div className="other-sign">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/img/facebook.png" alt="facebook" />
                </a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  <img src="/img/google.png" alt="google" />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                  <img src="/img/github.png" alt="github" />
                </a>
              </div>
              <label>
                <a className="back-homepage" href="homepage.html">Back to Homepage</a>
              </label>
            </form>
          </div>
        )}

        {currentForm === "register" && (
          <div className="Right-container">
            <h1 className="header">MuYMuY</h1>
            <div className="nav2">
              <nav className="login">
                <a href="#login" onClick={() => toggleForm("login")}>Login</a>
              </nav>
              <nav className="register">
                <a href="#register" onClick={() => toggleForm("register")}>Register</a>
              </nav>
            </div>
            <form className="Register-container">
              <div className="register-input">
                <input
                  type="email"
                  id="register-email"
                  placeholder="Enter Email Address"
                  required
                />
                <input
                  type="text"
                  id="register-username"
                  placeholder="Enter Username"
                  required
                />
                <input
                  type="text"
                  id="register-firstname"
                  placeholder="Enter First Name"
                  required
                />
                <input
                  type="text"
                  id="register-lastname"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
              <button
                className="register-next"
                type="button"
                onClick={() => toggleForm("register-next")}
              >
                Next
              </button>
            </form>
          </div>
        )}

        {currentForm === "register-next" && (
          <div className="Right-container">
            <h1 className="header">MuYMuY</h1>
            <div className="nav2">
              <nav className="login">
                <a href="#login" onClick={() => toggleForm("login")}>Login</a>
              </nav>
              <nav className="register">
                <a href="#register" onClick={() => toggleForm("register")}>Register</a>
              </nav>
            </div>
            <form className="Register-container">
              <div className="register-input">
                <input type="password" placeholder="Enter Password" required />
                <div className="verification">
                  <input
                    type="text"
                    id="verification-code"
                    placeholder="Verification Code"
                    required
                  />
                  <button type="button">Send</button>
                </div>
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        )}

        {currentForm === "forgot-pw" && (
          <div className="Right-container">
            <h1 className="header">MuYMuY</h1>
            <div className="Forgot">
              <label className="forgot-title">Forgot Password?</label>
            </div>
            <form className="Forgot-container">
              <div className="input">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email Address"
                  required
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter new Password"
                  required
                />
                <div className="verification">
                  <input
                    type="text"
                    id="verification-code"
                    placeholder="Verification Code"
                    required
                  />
                  <button type="button">Send</button>
                </div>
                <button className="Send" type="submit">Send</button>
                <div>
                  <label className="Back-login">
                    <a href="#" onClick={() => toggleForm("login")}>Back to Login</a>
                  </label>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
