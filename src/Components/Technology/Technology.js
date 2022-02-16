import styles from "./Technology.module.css";
import TechContent from "./TechContent";

const Technology = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["container"]}>
        <h2 className={styles.heading}>
          03 <span>space launch 101</span>
        </h2>

        <TechContent />
      </div>
    </div>
  );
};

export default Technology;
