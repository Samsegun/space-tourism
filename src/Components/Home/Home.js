import React from "react";
import Main from "./main";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles.container}>
        <Main />
      </div>
    </div>
  );
};

export default Home;
