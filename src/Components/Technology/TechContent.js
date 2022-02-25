import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./TechContent.module.css";
import data from "../../data.json";

const technology = data.technology;

const TechContent = () => {
  let tech = useRef(null);

  // current terminology displayed on page
  const [active, setActive] = useState(technology[0]);

  //assign current viewport to a state
  // const [matches, setMatches] = useState(window.visualViewport.width > 969);
  const [matches, setMatches] = useState(window.innerWidth > 968);

  // this function resets 'active' state above on each button click
  const buttonHandler = Event => {
    const newIndex = +Event.target.textContent - 1;
    setActive(technology[newIndex]);
  };

  // for animations
  const navVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 30,
      },
    },
    hidden: {
      y: 200,
      opacity: 0,
    },
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 968) {
        setMatches(true);
      } else {
        setMatches(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles["tech-info"]}>
      <motion.div
        className={`${styles["img-container"]}`}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {matches && <img src={active.images.portrait} alt="" />}
        {!matches && <img src={active.images.landscape} alt="" />}
      </motion.div>

      <motion.div
        className={styles["tech-nav"]}
        ref={tech}
        variants={navVariants}
        animate="visible"
        initial="hidden"
      >
        {technology.map((tech, idx) => (
          <button
            key={idx}
            className={tech.name === active.name ? styles.active : ""}
            onClick={buttonHandler}
          >
            {++idx}
          </button>
        ))}
      </motion.div>

      <article className={styles["page-article"]}>
        <h2 className={styles.intro}>the terminology...</h2>
        <h1 className={styles.title}>{active.name}</h1>
        <p className={styles.text}>{active.description}</p>
      </article>
    </section>
  );
};

export default TechContent;
