import styles from "./Section.module.css";
import data from "../../data.json";
import { useState } from "react";

const destinations = data.destinations;

const Section = () => {
  const [active, setActive] = useState(
    localStorage.getItem("index") ? +localStorage.getItem("index") : 0
  );

  localStorage.setItem("index", active);

  const loadData = Event => {
    setActive(
      destinations.findIndex(each => each.name === Event.target.textContent)
    );
  };

  return (
    <section>
      <div className={styles["img-container"]}>
        <img
          src={`${destinations[active].images.png}`}
          alt={`${destinations[active].name}`}
        />
      </div>

      <div className={styles["content-container"]}>
        <ul className={styles.list}>
          {destinations.map((data, idx) => (
            <li
              key={idx}
              className={
                data.name === destinations[active].name ? styles.active : ""
              }
              onClick={loadData}
            >
              {data.name}
            </li>
          ))}
        </ul>

        <div className={styles["destination-details"]}>
          <h1 className={styles.title}>{destinations[active].name}</h1>

          <p className={styles.desc}>{destinations[active].description}</p>
        </div>

        <div className={styles["destination-estimates"]}>
          <h2 className={styles.distance}>
            avg. distance <span>{destinations[active].distance}</span>
          </h2>

          <h2 className={styles.distance}>
            est. travel time <span>{destinations[active].travel}</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Section;
