import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
// import Dashboard from "./Dashboard";
import {
  auth,
  createUserWithEmailAndPassword,
  ResRef,
  addDoc,
} from "../until/config";

const SignupResturant = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [ResName, setResName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupRes = (e) => {
    e.preventDefault();
    // console.log( 'top' )
    // console.log(ResName, email, password);
    createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        console.log("auth done");
        const user = userCredential.user;
        // console.log("user ==>",user.uid);

        // await setDoc(doc(db,"Resturant",user.id),{
        let ResObj = {
          uid: user.uid,
          ResName: ResName,
          email: email,
          country: country,
          city: city,
          password: password,
          // drop: drop,
        };
        console.log("resref", ResRef);
        addDoc(ResRef, ResObj)
          .then(() => {
            console.log("collection add data");
            setSuccessMsg(
              "Signup Successfull. You will now automatically get redirected to Login"
            );
            navigate("/Dashboard");
            console.log("resturant obj ==>", ResObj);
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
            onSubmit={handleSignupRes}
            className="form-group"
            autoComplete="off"
          >
            <label>Resturant Name</label>
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
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setCountry(e.target.value)}
              value={country}
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
            {/* <br></br>
            <select value={drop} onChange={handleChange} required>
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
                onClick={handleSignupRes}
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

export default SignupResturant;
// import { Form, Button, Upload, Alert } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

// const normFile = (e) => {
//   console.log("Upload event:", e);
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e && e.fileList;
// };

//    <Form.Item
//                 name="upload"
//                 label="Upload"
//                 valuePropName="fileList"
//                 getValueFromEvent={normFile}
//                 extra="longgggggggggggggggggggggggggggggggggg"
//             >
//                 <Upload name="logo" action="/upload.do" listType="picture">
//                     <Button icon={<UploadOutlined />}>Click to upload</Button>
//                 </Upload>
//             </Form.Item>
