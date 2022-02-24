import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/destination" element={<Destination />} />

          <Route path="/crew" element={<Crew />} />

          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
