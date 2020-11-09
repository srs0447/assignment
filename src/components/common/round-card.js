import React from "react";

const RoundCard = (props) => {
  return (
    <div className="user-card">
      <div className="logo">
        <img src={props.src} />
      </div>
      <div className="user-detail">
        <p className="title">{props.title}</p>
        <p>Explore</p>
      </div>
    </div>
  );
};

export { RoundCard };
