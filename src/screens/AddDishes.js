import React, { useState } from "react";
import Container from "../components/Container";

const AddDishes = () => {
  // const [errorMsg, setErrorMsg] = useState("");
  // const [successMsg, setSuccessMsg] = useState("");

  const [dish, setDish] = useState("");
  const [price, setPrice] = useState("");
  const [Quentity, setQuentity] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <Container>
        <div className="container">
          <br></br>
          <br></br>
          <h1>Add Dishes </h1>
          <hr></hr>

          <form className="form-group" autoComplete="off">
            <label>Dish Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setDish(e.target.value)}
              drop={dish}
            ></input>
            <br></br>
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            ></input>
            <br></br>
            <label>avalaible stock</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setQuentity(e.target.value)}
              value={Quentity}
            ></input>
            <br></br>
            <label>descraption</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></input>
            <br></br>

            <div className="btn-box">
              <button type="submit" className="btn btn-success btn-md">
                Add Dish
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddDishes;
