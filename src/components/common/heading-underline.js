import React from "react";

const HeadingUnderline = (props) => {
  return (
    <div className="heading-underline">
      <div className="title">
        <p>{props.title}</p>
      </div>
      <div className="underline">
        <div className="first"></div>
        <div className="middle"></div>
        <div className="last"></div>
      </div>
    </div>
  );
};

export { HeadingUnderline };
