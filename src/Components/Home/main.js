import styles from "./main.module.css";
import Explore from "./Explore";

const Main = () => {
  return (
    <main className={styles.main}>
      <div>
        <h2 className={styles.intro}>So, you want to travel to</h2>
        <h1 className={styles.title}>space</h1>
        <p className={styles.text}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div>
        <Explore className={styles.explore} />
      </div>
    </main>
  );
};

export default Main;
