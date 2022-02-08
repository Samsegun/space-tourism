import styles from "./DestinationContent.module.css";
import Img from "../../assets/destination/image-moon.png";
import data from "../../data.json";

const DestinationContent = () => {
  const loadData = () => {
    console.log(data.destinations);
    console.log(data.destinations[0].images.png);
  };

  return (
    <main className={styles.wrapper}>
      <h2 className={styles.intro}>
        <span>01</span> Pick your destination
      </h2>

      <section>
        <div className={styles["img-container"]} onClick={loadData}>
          <img src={Img} alt="" />
          {/* <img src={data.destinations[0].images.png} alt="" /> */}
        </div>

        <ul className={styles.list}>
          {data.destinations.map((data, idx) => (
            <li
              key={idx}
              className={
                data.name.toLowerCase() === "moon" ? styles.active : ""
              }
            >
              {data.name}
            </li>
          ))}
        </ul>

        <div className={styles["destination-details"]}>
          <h1 className={styles.title}>{data.destinations[0].name}</h1>

          <p className={styles.desc}>{data.destinations[0].description}</p>
        </div>

        <div className={styles["destination-estimates"]}>
          <h2 className={styles.distance}>
            avg. distance <span>{data.destinations[0].distance}</span>
          </h2>

          <h2 className={styles.distance}>
            est. travel time <span>{data.destinations[0].travel}</span>
          </h2>
        </div>
      </section>
    </main>
  );
};

export default DestinationContent;
