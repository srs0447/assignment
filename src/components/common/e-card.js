import React from "react";
import { Button } from "./index";
const ECard = (props) => {
  return (
    <div className="e-card">
      <div className="row">
        <div
          className={
            "col-sm-12 col-md-6 order-sm-12" + "order-md" + props.order1
          }
        >
          <div className="photo">
            <img src={props.photo} />
          </div>
        </div>
        <div className={"col-sm-12 col-md-6 " + "order-" + props.order2}>
          <div className="content">
            <h2>{props.heading}</h2>
            <p>{props.para}</p>
            <Button title="Explore" href="#" />
          </div>
        </div>
      </div>
    </div>
  );
};
export { ECard };
