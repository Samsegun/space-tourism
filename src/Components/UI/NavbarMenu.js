import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import styles from "./NavbarMenu.module.css";
import CloseNavbar from "./CloseNavbar";

const NavbarMenu = props => {
  // const [closeNav, setCloseNav] = useState(true);

  return (
    <>
      {/* {props.closeNav && ( */}
      <div className={styles["mobilenav"]}>
        <CloseNavbar
          className={styles.close}
          closeNavMenu={props.closeNavMenu}
        />
        <ul>
          <li>
            <Link className={styles.active} to="">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/detsination">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="">
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
      {/* )} */}
    </>
  );
};

export default NavbarMenu;
