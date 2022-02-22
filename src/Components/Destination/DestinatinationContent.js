import styles from "./DestinationContent.module.css";
import PageHeader from "../UI/PageHeader";
import Section from "./Section";

const DestinationContent = () => {
  return (
    <main className={styles.wrapper}>
      <PageHeader text="01" intro="pick your destination" />

      <Section />
    </main>
  );
};

export default DestinationContent;
