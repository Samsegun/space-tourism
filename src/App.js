import React from "react";
import styles from "./App.module.css";
import Header from "./Components/UI/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Destination from "./Components/Destination/Destination";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/destination">
            <Destination />
          </Route>
          <Route exact path="/crew">
            <Crew />
          </Route>
          <Route exact path="/technology">
            <Technology />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
