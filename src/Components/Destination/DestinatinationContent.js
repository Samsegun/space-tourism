import styles from "./DestinationContent.module.css";
import Section from "./Section";

const DestinationContent = () => {
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.intro}>
        <span>01</span> Pick your destination
      </h2>

      <Section />
    </main>
  );
};

export default DestinationContent;
