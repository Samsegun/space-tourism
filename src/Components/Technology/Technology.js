import styles from "./Technology.module.css";
import PageHeader from "../UI/PageHeader";
import TechContent from "./TechContent";

const Technology = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["container"]}>
        <PageHeader
          className={styles["page-header"]}
          text="03"
          intro="space launch 101"
        />
        <TechContent />
      </div>
    </div>
  );
};

export default Technology;
