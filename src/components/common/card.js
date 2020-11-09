import React from "react";

const Card = (props) => {
  return (
    <div className="rect-card">
      <p>{props.title}</p>
      {props.by ? <p className="by">{props.by}</p> : ""}
    </div>
  );
};

export { Card };
