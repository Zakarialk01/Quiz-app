import "./App.css";
import { Log } from "./components";
import React, { useState, useEffect } from "react";
import Choice from "./Choice/Choice";
import Quiz from "./quizzes/quiz";
import Quiz2 from "./quizzes/ReactQuiz";
import Quiz3 from "./quizzes/htmlQuiz";
import Quiz4 from "./quizzes/footballQuiz";
import Quiz5 from "./quizzes/cssQuiz";
import Quiz6 from "./quizzes/geoQuiz";
import fire from "./components/base";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              {user ? <Choice /> : <Log />}
            </Route>
            <Route exact path="/capital">
              <Quiz />
            </Route>
            <Route exact path="/react">
              <Quiz2 />
            </Route>
            <Route exact path="/html">
              <Quiz3 />
            </Route>
            <Route exact path="/football">
              <Quiz4 />
            </Route>
            <Route exact path="/css">
              <Quiz5 />
            </Route>
            <Route exact path="/geo">
              <Quiz6 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
