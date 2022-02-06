import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import NavbarMenu from "./NavbarMenu";

const Header = () => {
  const navLinks = ["home", "destination", "crew", "technology"];
  const [showNav, setShowNav] = useState(false);

  const navLinkHandler = () => {
    console.log("hi");
  };

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

      {/* show toggle button when mobilenav is closed and vice-versa */}
      {!showNav && <NavbarButton onClick={navbuttonHandler} />}

      {/* show mobile menu when mobilenav toggle  button is closed */}
      {showNav && <NavbarMenu closeNavMenu={closeNavMenu} />}

      <nav className={styles.navbar}>
        <ul>
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={idx === 0 ? styles.active : ""}
              onClick={navLinkHandler}
            >
              <Link to={`/${link === "home" ? "" : link}`}>
                <span className={styles["link-span"]}>0{idx} </span> {link}
              </Link>
            </li>
          ))}
          {/* <li className={styles.active}>
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
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
