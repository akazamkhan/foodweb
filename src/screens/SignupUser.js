import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import {
  auth,
  createUserWithEmailAndPassword,
  UserRef,
  addDoc,
} from "../until/config";

const SignupUser = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [ResName, setResName] = useState("");
  const [email, setEmail] = useState("");
  const [addres, setAddres] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  //   const [drop, setDrop] = useState("");

  //   const handleChange = (event) => {
  //     setDrop(event.target.value);
  //     console.log("check value =>", drop);
  //   };

  const handleSignupUser = (e) => {
    e.preventDefault();
    // console.log( 'top' )
    // console.log(ResName, email, password);
    createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        console.log("auth done");
        const user = userCredential.user;
        // console.log("user ==>",user.uid);

        // await setDoc(doc(db,"Resturant",user.id),{
        let UserObj = {
          uid: user.uid,
          ResName: ResName,
          email: email,
          addres: addres,
          city: city,
          password: password,
          //   drop: drop,
        };
        console.log("UserRef", UserRef);
        addDoc(UserRef, UserObj)
          .then(() => {
            console.log("collection add data");
            setSuccessMsg(
              "Signup Successfull. You will now automatically get redirected to Login"
            );
            navigate("/Dashboard");
            console.log("resturant obj ==>", UserObj);
          })
          .catch((err) => {
            setTimeout(() => {
              setErrorMsg("");
            }, 3000);
            setErrorMsg(err.message);
            console.log(err);
          });
      }
    );
  };
  return (
    <div>
      <Container>
        <div className="container">
          <br></br>
          <br></br>
          <h1>Sign Up </h1>
          <hr></hr>
          {successMsg && (
            <>
              <div className="success-msg">{successMsg}</div>
              <br></br>
            </>
          )}

          <form
            onSubmit={handleSignupUser}
            className="form-group"
            autoComplete="off"
          >
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setResName(e.target.value)}
              drop={ResName}
            ></input>
            <br></br>
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <br></br>
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setAddres(e.target.value)}
              value={addres}
            ></input>
            <br></br>
            <label>City</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setCity(e.target.value)}
              value={city}
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
            {/* <select value={drop} onChange={handleChange} required>
              <option value=""></option>
              <option value="User">User</option>
              <option value="Resturant">Resturant</option>
            </select> */}

            <div className="btn-box">
              <span>
                Already have an account login
                <Link to="/Login" className="link">
                  {" "}
                  Here
                </Link>
              </span>
              <button
                type="submit"
                className="btn btn-success btn-md"
                onClick={handleSignupUser}
              >
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

export default SignupUser;
