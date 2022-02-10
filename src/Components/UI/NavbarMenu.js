import { Link } from "react-router-dom";

import styles from "./NavbarMenu.module.css";
import CloseNavbar from "./CloseNavbar";

const NavbarMenu = props => {
  return (
    <>
      <div className={`${styles.mobilenav}`}>
        <CloseNavbar
          className={styles.close}
          closeNavMenu={props.closeNavMenu}
        />
        <ul>
          {props.navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                to={`/${link === "home" ? "" : link}`}
                className={link === props.currentPage ? styles.active : ""}
                onClick={props.navLinkHandler}
              >
                <span className={styles["link-span"]}>0{idx}</span> {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
