import styles from "./Destination.module.css";
import DestinationContent from "./DestinatinationContent";

const Destination = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles.container}>
        <DestinationContent />
      </div>
    </div>
  );
};

export default Destination;
