import React from "react";
import "./container.css";
import { Link, useNavigate } from "react-router-dom";
import Logofainal from "../Images/logofainal.png";
import { signOut, auth } from "../until/config";

const Container = ({ children }) => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    signOut(auth).then(() => navigate("/login"));
  };

  return (
    <div>
      <header>
        <div className="lf-side">
          <img className="nav-logo" src={Logofainal} alt="Logo" />
          {/* <nav>
                        <ul className="nav-links">
                            <li><a href="#">All Events</a></li>
                            <li><a href="#">My Events</a></li>
                        </ul>
                    </nav> */}
        </div>
        <div className="rf-side">
          <Link to={"/SignupResturant"} className="cta">
            <button>Signup Resturant</button>
          </Link>
          <Link to={"/SignupUser"} className="cta">
            <button>Signup User</button>
          </Link>
          <Link to={"/login"} className="cta">
            <button>login</button>
          </Link>
          <button onClick={onClickLogout} className="cta">
            logout
          </button>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Container;
