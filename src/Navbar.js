import React from "react";
import "./Navbar.css";
import fire from "./components/base";

function Navbar() {
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

      <button className="btn" onClick={logout}>
        <i class="fas fa-sign-in-alt"> </i> LogOut
      </button>
    </div>
  );
}

export default Navbar;
