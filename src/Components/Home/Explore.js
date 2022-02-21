import { useRef, useEffect } from "react";
import styles from "./Explore.module.css";
import { gsap } from "gsap";

const Explore = props => {
  const exploreButton = useRef(null);

  const classes = `${styles.button} ${props.className ? props.className : ""}`;

  useEffect(() => {
    gsap.fromTo(
      exploreButton.current,
      {
        opacity: 0,
        scale: 0,
        rotation: 720,
      },
      { duration: 2, opacity: 1, scale: 1, rotation: 0, ease: "bounce" }
    );
  }, []);

  return (
    <button className={classes} ref={exploreButton}>
      EXPLORE
    </button>
  );
};

export default Explore;
