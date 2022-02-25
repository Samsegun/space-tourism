import { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import styles from "./Explore.module.css";

const Explore = props => {
  const [isAnimating, setIsAnimating] = useState(false);

  const classes = `${styles.button} ${props.className ? props.className : ""}`;

  return (
    <motion.button
      className={classes}
      animate={{
        opacity: isAnimating ? 0.5 : 1,
        rotate: isAnimating ? 720 : 0,
      }}
      initial={{
        opacity: 1,
        rotate: 720,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
      }}
      onClick={() => setIsAnimating(!isAnimating)}
    >
      EXPLORE
    </motion.button>
  );
};

export default Explore;
