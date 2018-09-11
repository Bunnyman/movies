import React from "react";

const Header = props => {
  return (
    <div>
      <h1>What to watch</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Header;
