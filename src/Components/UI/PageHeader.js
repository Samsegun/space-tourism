import styles from "./PageHeader.module.css";

const PageHeader = props => {
  const classes = `${styles.intro} ${props.className ? props.className : ""}`;

  return (
    <h2 className={classes}>
      <span>{props.text}</span> {props.intro}
    </h2>
  );
};

export default PageHeader;
