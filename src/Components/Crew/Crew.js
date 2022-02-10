import styles from "./Crew.module.css";
import data from "../../data.json";

const crew = data.crew;
console.log(crew);

const Crew = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles.container}>
        <main>
          <h2 className={styles.title}>
            02 <span> meet your crew</span>
          </h2>

          <section className={styles["crew-info"]}>
            <div className={styles["crew-info_img"]}>
              <img src={crew[0].images.png} alt="" />
            </div>

            <div className={styles["crew-info_details"]}>
              <div className={styles["active-member"]}>
                <span className={styles["active"]}></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className={styles["crew-member"]}>
                <h2 className={styles["crew-member_role"]}>Commander</h2>
                <h1 className={styles["crew-member_name"]}>Douglas Hurley</h1>
              </div>
              <p className={styles["crew-member_details"]}>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Crew;
