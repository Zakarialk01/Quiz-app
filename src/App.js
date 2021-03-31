import "./App.css";
import { Log } from "./components";
import React, { useState, useEffect } from "react";
import Choice from "./Choice";
import Quiz from "./quiz";
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
    <Router>
      <div>
        <Switch>
          {user ? <Choice /> : <Log />}
          <Route exact path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
