import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </a>
      </div>

      <button className={styles.toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </button>

      <nav className={styles.navbar}>
        <ul>
          <li className={styles.active}>
            <a href="/">
              <span className={styles["link-span"]}>00</span> Home
            </a>
          </li>
          <li>
            <a href="/">
              <span className={styles["link-span"]}>01</span> Destination
            </a>
          </li>
          <li>
            <a href="/">
              <span className={styles["link-span"]}>02</span> Crew
            </a>
          </li>
          <li>
            <a href="/">
              <span className={styles["link-span"]}>03</span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
