import { useEffect, useState } from "react";
import styles from "./Technology.module.css";
import data from "../../data.json";

const technology = data.technology;

const Technology = () => {
  // current terminology displayed on page
  const [active, setActive] = useState(technology[0]);

  //assign current viewport to a state
  const [matches, setMatches] = useState(window.visualViewport.width > 969);

  // this function resets 'active' state above on each button click
  const buttonHandler = Event => {
    const newIndex = +Event.target.textContent - 1;
    setActive(technology[newIndex]);
  };

  useEffect(() => {
    window
      .matchMedia("(min-width: 969px)")
      .addEventListener("change", Event => setMatches(Event.matches));

    return () =>
      window
        .matchMedia("(min-width: 969px)")
        .removeEventListener("change", Event => setMatches(Event.matches));
  }, []);

  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["container"]}>
        <h2 className={styles.heading}>
          03 <span>space launch 101</span>
        </h2>

        <section className={styles["tech-info"]}>
          <div className={`${styles["img-container"]}`}>
            {matches && <img src={active.images.portrait} alt="" />}
            {!matches && <img src={active.images.landscape} alt="" />}
          </div>

          <div className={styles["tech-nav"]}>
            {technology.map((tech, idx) => (
              <button
                key={idx}
                className={tech.name === active.name ? styles.active : ""}
                onClick={buttonHandler}
              >
                {++idx}
              </button>
            ))}
          </div>

          <article className={styles["page-article"]}>
            <h2 className={styles.intro}>the terminology...</h2>
            <h1 className={styles.title}>{active.name}</h1>
            <p className={styles.text}>{active.description}</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Technology;
