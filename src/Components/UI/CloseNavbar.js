import { useContext } from "react";
import ShowNavContext from "../Context/shownav-context";

const CloseNavbar = () => {
  const ctx = useContext(ShowNavContext);

  // close mobile navbar handler

  return (
    <button className={ctx.close} onClick={ctx.showNav}>
      X
    </button>
  );
};

export default CloseNavbar;
