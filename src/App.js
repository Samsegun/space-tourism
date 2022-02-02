import React from "react";
import styles from "./App.module.css";
import Header from "./Components/UI/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Destination from "./Components/Destination/Destination";

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
