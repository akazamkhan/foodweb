import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import SignupResturant from "./screens/SignupResturant";
import SignupUser from "./screens/SignupUser";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "bootstrap/dist/css/bootstrap.min.css";
import AddDishes from "./screens/AddDishes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignupResturant" element={<SignupResturant />} />
        <Route path="/SignupUser" element={<SignupUser />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AddDishes" element={<AddDishes />} />

        {/* <Route path="/SignupRes" element={<SignupRes />} /> */}
      </Routes>
    </div>
  );
}

export default App;
