import { useState } from "react";
import ShowNavContext from "../Context/shownav-context";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import NavbarButton from "./NavbarButton";
import NavbarMenu from "./NavbarMenu";

const Header = () => {
  const navLinks = ["home", "destination", "crew", "technology"];

  const [showNav, setShowNav] = useState(false);

  // for animations
  const headerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        when: "beforeChildren",
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // for animations
  const listVariants = {
    visible: {
      // y: 0,
      opacity: 1,
      transition: {
        delay: 1.1,
        when: "beforeChildren",
        staggerChildren: 0.4,
        // type: "spring",
        // stiffness: 100,
        // damping: 10,
      },
    },
    hidden: {
      // y: 50,
      opacity: 0,
    },
  };

  // for animations
  const listItem = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

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
      <motion.header
        className={styles.header}
        variants={headerVariants}
        animate="visible"
        initial="hidden"
      >
        <div className={styles.logo}>
          <Link to="/" aria-label="Read more about Seminole tax hike">
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
          <motion.ul variants={listVariants} animate="visible" initial="hidden">
            {navLinks.map((link, idx) => (
              <motion.li key={idx} variants={listItem}>
                <NavLink to={`${link === "home" ? "/" : `/${link}`}`}>
                  <span className={styles["link-span"]}>0{idx}</span> {link}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.header>
    </ShowNavContext.Provider>
  );
};

export default Header;
