import { Question, Start, End, Modal } from "../components";
import React, { useState, useEffect } from "react";
import geo from "../data/geo.json";

import Navbar from "../navbar/Navbar";

let interval;
function GeoQuiz() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (activeStep == 3) {
      clearInterval(interval); //stop count
    }
  }, [activeStep]);

  const quizStartHandler = () => {
    setActiveStep(2);
    interval = setInterval(() => {
      //start count
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  /*const quizBackHandler = () => {
    setActiveStep(1);
  };*/
  const onResetTest = () => {
    setAnswers([]);
    setActiveStep(2);

    setActiveQuestion(0);
    setTime(0); // we should start count time anathor time after reset with setInterval
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <Navbar />
      <div className="quiz">
        {activeStep == 1 && <Start nextStep={quizStartHandler} />}
        {activeStep == 2 && (
          <Question
            data={geo.data[activeQuestion]}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={geo.data.length}
            activeQuestion={activeQuestion}
            onSetStep={setActiveStep}
            onSetActiveQuestion={setActiveQuestion}
          />
        )}
        {activeStep == 3 && (
          <End
            results={answers}
            data={geo.data}
            time={time}
            onReset={onResetTest}
            onCheckAnswer={openModal}
          />
        )}
        {showModal == true && (
          <Modal
            onClose={() => setShowModal(false)}
            data={geo.data}
            results={answers}
          />
        )}
      </div>
    </>
  );
}

export default GeoQuiz;
