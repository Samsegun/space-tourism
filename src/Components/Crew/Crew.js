import { useState } from "react";
import styles from "./Crew.module.css";
import PageHeader from "../UI/PageHeader";
import data from "../../data.json";
// import { Carousel } from "react-responsive-carousel";

const crew = data.crew;

const Crew = () => {
  const [crewMember, setCrewMember] = useState(crew[0]);

  const memberHandler = Event => {
    const crewMemberId = +Event.target.id;

    setCrewMember(crew[crewMemberId]);
  };

  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles.container}>
        <PageHeader
          className={styles["page-header"]}
          text="02"
          intro="meet your crew"
        />
        <main className={styles.main}>
          <section className={styles["crew-info"]}>
            <div className={styles["crew-info_img"]}>
              <img src={crewMember.images.png} alt={crewMember.name} />
            </div>

            <div className={styles["crew-info_details"]}>
              <div className={styles["active-member"]}>
                {crew.map((member, idx) => (
                  <span
                    key={idx}
                    id={idx}
                    className={
                      member.name === crewMember.name ? styles["active"] : ""
                    }
                    onClick={memberHandler}
                  ></span>
                ))}
              </div>

              <div className={styles["crew-member"]}>
                <h2 className={styles["crew-member_role"]}>
                  {crewMember.role}
                </h2>
                <h1 className={styles["crew-member_name"]}>
                  {crewMember.name}
                </h1>
              </div>
              <p className={styles["crew-member_details"]}>{crewMember.bio}</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Crew;
