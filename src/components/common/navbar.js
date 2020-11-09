import React from "react";
import { Button } from "./index";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="ml-5 pl-5 order-0">
        <a className="navbar-brand mx-auto" href="#">
          <img src={"./svg/brand.svg"} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing Plans
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <Button title="Login/Register" href="#" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export { Navbar };
