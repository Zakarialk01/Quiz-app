import React from "react";
import "./Navbar.css";
import fire from "../components/base";
import { useLocation, withRouter, Link } from "react-router-dom";
function Navbar() {
  console.log(fire.auth().currentUser);
  const location = useLocation();

  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div class="topnav">
      <a href="#home">
        {" "}
        <strong>
          Welcome {fire.auth().currentUser.displayName}{" "}
          <i class="fa fa-fw fa-user"></i>
        </strong>
      </a>
      {location.pathname === "/capital" ||
      location.pathname === "/react" ||
      location.pathname === "/html" ||
      location.pathname === "/football" ||
      location.pathname === "/css" ||
      location.pathname === "/geo" ? (
        <>
          <button className="btn-link">
            <Link style={{ textDecoration: "none" }} to="/">
              <i class="	fa fa-chevron-circle-left"> </i> {"   "}Back
            </Link>
          </button>
        </>
      ) : (
        <>
          <button className="btn" onClick={logout}>
            <i class="fas fa-sign-in-alt"> </i> LogOut
          </button>
        </>
      )}
    </div>
  );
}

export default withRouter(Navbar);
