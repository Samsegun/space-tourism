import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./Components/UI/Header";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}>
            {/* <Home /> */}
          </Route>
          <Route exact path="/destination" component={Destination}>
            {/* <Destination /> */}
          </Route>
          <Route exact path="/crew" component={Crew}>
            {/* <Crew /> */}
          </Route>
          <Route exact path="/technology" component={Technology}>
            {/* <Technology /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
