import { useState } from "react";
import ShowNavContext from "../Context/shownav-context";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import NavbarButton from "./NavbarButton";
import NavbarMenu from "./NavbarMenu";

const Header = () => {
  const navLinks = ["home", "destination", "crew", "technology"];

  const [showNav, setShowNav] = useState(false);

  // const [currentPage, setCurrentPage] = useState(navLinks[0]);

  // const navLinkHandler = Event => {
  //   const target = Event.target.textContent;

  //   const newTarget = target.slice(3, target.length);

  //   setCurrentPage(newTarget);
  // };

  const navbuttonHandler = () => {
    setShowNav(true);
  };

  const closeNavMenu = () => {
    setShowNav(false);
  };

  return (
    <ShowNavContext.Provider
      value={{
        showNav: closeNavMenu,
        close: styles.close,
      }}
    >
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

        {/* backdrop */}
        {/* port backdrop before the root element */}
        {ReactDOM.createPortal(
          <div
            className={`${styles.backdrop} ${
              !showNav ? styles.hidebackdrop : styles.showbackdrop
            }`}
            onClick={closeNavMenu}
          ></div>,
          document.getElementById("backdrop-root")
        )}

        {/* show mobile menu when toggle  button is clicked */}
        {/* port navbarmenu before the root element */}
        {ReactDOM.createPortal(
          <NavbarMenu
            navLinks={navLinks}
            showNav={showNav}
            closeNav={closeNavMenu}
          />,
          document.getElementById("mobilenavbar-root")
        )}

        <nav className={styles.navbar}>
          <ul>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink to={`${link === "home" ? "/" : `/${link}`}`}>
                  <span className={styles["link-span"]}>0{idx}</span> {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </ShowNavContext.Provider>
  );
};

export default Header;
