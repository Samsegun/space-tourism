const CloseNavbar = props => {
  // close mobile navbar handler
  const closeNavHandler = Event => {
    console.log(Event);
    props.closeNavMenu();
  };

  return (
    <button className={props.className} onClick={closeNavHandler}>
      X
    </button>
  );
};

export default CloseNavbar;
