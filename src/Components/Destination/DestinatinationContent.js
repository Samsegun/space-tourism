import styles from "./DestinationContent.module.css";
// import Img from "../../assets/destination/image-moon.png";
import data from "../../data.json";

const destinations = data.destinations;
console.log(destinations);

const DestinationContent = () => {
  const loadData = () => {
    console.log(destinations);
    console.log(destinations[0].images.png);
  };

  return (
    <main className={styles.wrapper}>
      <h2 className={styles.intro}>
        <span>01</span> Pick your destination
      </h2>

      <section>
        <div className={styles["img-container"]}>
          {/* <img src={Img} alt="" /> */}
          <img
            src={`${destinations[0].images.png}`}
            alt={`${destinations[0].name}`}
          />
        </div>

        <div className={styles["content-container"]}>
          <ul className={styles.list}>
            {destinations.map((data, idx) => (
              <li
                key={idx}
                className={
                  data.name.toLowerCase() === "moon" ? styles.active : ""
                }
                onClick={loadData}
              >
                {data.name}
              </li>
            ))}
          </ul>

          <div className={styles["destination-details"]}>
            <h1 className={styles.title}>{destinations[0].name}</h1>

            <p className={styles.desc}>{destinations[0].description}</p>
          </div>

          <div className={styles["destination-estimates"]}>
            <h2 className={styles.distance}>
              avg. distance <span>{destinations[0].distance}</span>
            </h2>

            <h2 className={styles.distance}>
              est. travel time <span>{destinations[0].travel}</span>
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationContent;
