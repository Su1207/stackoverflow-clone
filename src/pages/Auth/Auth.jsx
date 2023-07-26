import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Auth.css";
import AboutAuth from "./AboutAuth";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <section className="auth-section">
      {isSignUp && <AboutAuth />}

      <div className="auth-container-2">
        {!isSignUp && (
          <img
            src={logo}
            alt="stackOverflow"
            className="auth-logo"
            height="50px"
          />
        )}
        <form>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" name="name" id="name" />
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>

          <label htmlFor="password">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              <h4>Password</h4>
              {!isSignUp && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot password?
                </p>
              )}
            </div>

            <input type="password" name="password" id="password" />
            {isSignUp && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Passwords must contain at least eight <br /> characters,
                including at least 1 letter and 1 number.
              </p>
            )}
          </label>

          {isSignUp && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional product <br />
                updates, user research invitations, company
                <br /> announcements, and digests.
              </p>
            </label>
          )}

          <button className="auth-btn" type="submit">
            {isSignUp ? "Sign up" : "Log in"}
          </button>

          {isSignUp && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking “Sign up”, you agree to our{" "}
              <span style={{ color: "#007ac6" }}>
                terms of <br />
                service{" "}
              </span>
              and acknowledge that you have read and <br />
              understand our{" "}
              <span style={{ color: "#007ac6" }}>privacy policy</span> and{" "}
              <span style={{ color: "#007ac6" }}>code of conduct</span>.
            </p>
          )}
        </form>
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignUp ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
