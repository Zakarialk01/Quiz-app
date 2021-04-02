import React from "react";
import { useLocation, withRouter, Link } from "react-router-dom";
const Start = ({ nextStep }) => {
  const location = useLocation();
  return (
    <div class="cardd">
      <div class="card-content">
        <div class="content">
          {location.pathname == "/html" && <h1>Start Html quiz</h1>}

          {location.pathname == "/react" && <h1>Start Reactjs quiz</h1>}
          {location.pathname == "/capital" && <h1>Start Capital quiz</h1>}
          {location.pathname == "/football" && <h1>Start Football quiz</h1>}
          {location.pathname == "/css" && <h1>Start Css quiz</h1>}

          <h4>Good Luck !</h4>
          <button class="button is-link is-active" onClick={nextStep}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
