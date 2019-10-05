import React from "react";

const Button = ({ text, handleClick, classes }) => (
  <button className={classes} onClick={handleClick}>
    {text}
  </button>
);

export default Button;
