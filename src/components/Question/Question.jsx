import React, { useState, useEffect, useRef } from "react";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetStep,
  onSetActiveQuestion,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const [praise, setPraise] = useState("");
  const radiosWrapper = useRef();
  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector(
      // pour enlever le checked dans les prochaines questiions
      "input:checked"
    );
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);
  const changeHandler = (e) => {
    setSelected(e.target.value);
  };
  const nextClickHandler = () => {
    if (selected === "") {
      return setError("Please Select an option");
    }

    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);

    setPraise("thank you !");

    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h2>
            Question : {activeQuestion} / {numberOfQuestions}
          </h2>
          <h2 className="is-size-4">{data.question} </h2>

          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice) => (
              <label className="radio has-background-light">
                <input
                  type="radio"
                  name="answer"
                  value={choice}
                  onChange={changeHandler}
                />
                {choice}
              </label>
            ))}
          </div>
        </div>
        {selected == "" && <div className="has-text-danger">{error} </div>}
        {selected !== "" && <div className="has-text-link">{praise} </div>}
        <br></br>
        <button class="button is-link is-active" onClick={nextClickHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
