import React from "react";

const Button = (props) => {
  return (
    <a href={props.href} className="round-button">
      {props.title}
    </a>
  );
};

export { Button };