import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "../components/Container";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../until/config";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onFinish = (e) => {
    e.preventDefault();
    console.log("top");

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setSuccessMsg("You are signed in");
        navigate("/Dashboard");
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 2000);
      });
  };

  return (
    <div>
      <Container>
        <div className="container">
          <br></br>
          <br></br>
          <h1>login</h1>
          <hr></hr>
          {successMsg && (
            <>
              <div className="success-msg">{successMsg}</div>
              <br></br>
            </>
          )}

          <form onSubmit={onFinish} className="form-group" autoComplete="off">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>

            <br></br>

            <label>Password</label>
            <input
              type="password"
              className="form-control"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <br></br>

            <div className="btn-box">
              <span>
                have not account sign up for Resturant
                <Link to="/SignupResturant" className="link">
                  {" "}
                  Here
                </Link>
              </span>
              <br></br>
              <span>
                have not account sign up for User
                <Link to="/SignupUser" className="link">
                  {" "}
                  Here
                </Link>
              </span>
              <button type="submit" className="btn btn-success btn-md">
                SIGN UP
              </button>
            </div>
          </form>
          {errorMsg && (
            <>
              <div className="error-msg">{errorMsg}</div>
              <br></br>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Login;
