import React, { useState, useEffect } from "react";
import { formatTime } from "../utils";
import Modal from "../Modal/Modal";
import fire from "../base";
const End = ({ results, data, time, onReset, onCheckAnswer }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a == data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    console.log(correctAnswers);
    console.log(onCheckAnswer);
    console.log(fire.auth().currentUser);

    // eslint-disable-next-line
  }, []);

  return (
    <div class="carde">
      <div class="card-content">
        <div class="content">
          <h4>Result of user : {fire.auth().currentUser.displayName}</h4>
          {correctAnswers == data.length && (
            <h3>Perfect ,Congratulaions 👏🏻🎉</h3>
          )}
          {Math.floor((correctAnswers / data.length) * 100) > 80 &&
            Math.floor((correctAnswers / data.length) * 100) < 90 && (
              <h3> very good 👏</h3>
            )}
          {Math.floor((correctAnswers / data.length) * 100) > 70 &&
            Math.floor((correctAnswers / data.length) * 100) < 80 && (
              <h3> good 👏</h3>
            )}
          {Math.floor((correctAnswers / data.length) * 100) > 50 &&
            Math.floor((correctAnswers / data.length) * 100) < 70 && (
              <h3> Not bad, you can do better 😄 </h3>
            )}
          {Math.floor((correctAnswers / data.length) * 100) < 50 && (
            <h3>You're under the average , just try again you can do it 😄</h3>
          )}
          <strong>
            {" "}
            <p>
              {correctAnswers} of {data.length}
            </p>
          </strong>
          <strong>
            <p>{Math.floor((correctAnswers / data.length) * 100)} %</p>
          </strong>
          <strong>
            <p>your time : {formatTime(time)} </p>
          </strong>
          <br></br>
          <div
            className="flex-btn"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <button class="button is-info" onClick={onCheckAnswer}>
              Check your answers
            </button>
            <br></br>
            <br></br>
            <br></br>
            <Modal />
            <button
              class="button is-link"
              style={{ background: "#081a3b", border: "none" }}
              onClick={onReset}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
