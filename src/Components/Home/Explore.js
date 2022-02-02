import styles from "./Explore.module.css";

const Explore = props => {
  // const classes = styles.button + props.styles.explore;
  const classes = `${styles.button} ${props.className ? props.className : ""}`;

  return <button className={classes}>EXPLORE</button>;
};

export default Explore;
