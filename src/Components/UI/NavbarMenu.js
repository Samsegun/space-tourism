import { NavLink } from "react-router-dom";
import styles from "./NavbarMenu.module.css";
import CloseNavbar from "./CloseNavbar";

const NavbarMenu = props => {
  return (
    <>
      <div
        className={`${styles.mobilenav} ${
          props.showNav ? styles["slide-in"] : styles["slide-out"]
        }`}
      >
        <CloseNavbar />
        <ul>
          {props.navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                exact
                to={`${link === "home" ? "/" : `/${link}`}`}
                activeClassName={styles["active-class"]}
                onClick={props.closeNav}
              >
                <span className={styles["link-span"]}>0{idx}</span> {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
