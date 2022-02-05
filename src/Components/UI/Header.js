import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import NavbarMenu from "./NavbarMenu";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const navbuttonHandler = Event => {
    console.log(Event);
    // setShowNav(showNav ? false : true);
    setShowNav(true);
  };

  const closeNavMenu = () => {
    setShowNav(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </Link>
      </div>

      <NavbarButton onClick={navbuttonHandler} />

      {showNav && <NavbarMenu closeNavMenu={closeNavMenu} />}

      <nav className={styles.navbar}>
        <ul>
          <li className={styles.active}>
            <Link to="/">
              <span className={styles["link-span"]}>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span className={styles["link-span"]}>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className={styles["link-span"]}>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className={styles["link-span"]}>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
