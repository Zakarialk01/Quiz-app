import { Question, Start, End, Modal } from "../components";
import React, { useState, useEffect } from "react";
import football from "../data/football.json";

import Navbar from "../navbar/Navbar";

let interval;
function ReactQuiz() {
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
            data={football.data[activeQuestion]}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={football.data.length}
            activeQuestion={activeQuestion}
            onSetStep={setActiveStep}
            onSetActiveQuestion={setActiveQuestion}
          />
        )}
        {activeStep == 3 && (
          <End
            results={answers}
            data={football.data}
            time={time}
            onReset={onResetTest}
            onCheckAnswer={openModal}
          />
        )}
        {showModal == true && (
          <Modal
            onClose={() => setShowModal(false)}
            data={football.data}
            results={answers}
          />
        )}
      </div>
    </>
  );
}

export default ReactQuiz;
