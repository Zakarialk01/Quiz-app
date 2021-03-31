import React from "react";

const Start = ({ nextStep }) => {
  return (
    <div class="cardd">
      <div class="card-content">
        <div class="content">
          <h1>Start the quiz</h1>
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
