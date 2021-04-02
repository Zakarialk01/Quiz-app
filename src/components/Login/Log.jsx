import React, { useState } from "react";
import fire from "../base";
import "./login.css";

function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");

  const [hasAccount, sethasAccount] = useState(false);

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };
  const clearInputs = () => {
    setPassword("");
  };

  const handleLogin = (e) => {
    clearInputs();
    clearError();
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((fire) => {
        if (fire.user) {
          fire.user.updateProfile({ displayName: name });
        }
      })

      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignUp = (e) => {
    clearInputs("");
    clearError();
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((fire) => {
        if (fire.user) {
          fire.user.updateProfile({ displayName: name });
        }
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="body">
        <form className="Login">
          <img
            className="img"
            src="https://images-eu.ssl-images-amazon.com/images/I/61KrNYlxCNL.png"
          />
          {hasAccount ? (
            <>
              <h1 style={{ fontWeight: "600", fontSize: "30px" }}>
                {" "}
                <i class="fa fa-fw fa-user"></i>Login
              </h1>
              <span>
                Nickname :
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Nickname please"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </span>
            </>
          ) : (
            <>
              <h1 style={{ fontWeight: "600", fontSize: "30px" }}>
                {" "}
                <i class="fas fa-sign-in-alt"></i> SignUp
              </h1>
              <span>
                Fullname :
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Fullname please"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </span>
            </>
          )}

          <label>
            Email :
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email address"
              onChange={handleEmail}
              value={email}
            />
            <p>{emailError}</p>
          </label>
          <label>
            Password:
            <input
              type="password"
              onChange={handlePassword}
              id="password"
              placeholder="enter password"
              value={password}
            />
            <p>{passwordError}</p>
          </label>

          {hasAccount ? (
            <>
              <button className="bouton" onClick={handleLogin}>
                {" "}
                Login{" "}
              </button>
              <p style={{ textAlign: "center" }}>
                don't have an account{" "}
                <span
                  style={{ color: "yellow", cursor: "pointer" }}
                  onClick={() => sethasAccount(!hasAccount)}
                >
                  {" "}
                  Sign up{" "}
                </span>
              </p>
            </>
          ) : (
            <>
              <button className="bouton" onClick={handleSignUp}>
                {" "}
                Sign up
              </button>
              <p style={{ textAlign: "center" }}>
                have an account{" "}
                <span
                  style={{ color: "yellow", cursor: "pointer" }}
                  onClick={() => sethasAccount(!hasAccount)}
                >
                  {" "}
                  Login{" "}
                </span>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Log;
