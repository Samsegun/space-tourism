import styles from "./Technology.module.css";
import data from "../../data.json";

const technology = data.technology;
console.log(technology);

const Technology = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["container"]}>
        <h2 className={styles.heading}>
          03 <span>space launch 101</span>
        </h2>

        <section className={styles["tech-info"]}>
          <div className={styles["img-container"]}>
            <img src={technology[0].images.landscape} alt="" />
          </div>

          <div className={styles["tech-nav"]}>
            <button className={styles.active}>1</button>
            <button>2</button>
            <button>3</button>
          </div>

          <article className={styles["page-article"]}>
            <h2 className={styles.intro}>the terminology...</h2>
            <h1 className={styles.title}>launch vehicle</h1>
            <p className={styles.text}>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Technology;
