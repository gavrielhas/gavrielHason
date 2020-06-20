import React from "react";
import Example from "./Example";
import logo from "./LOGO-1.png";
import { Link } from "react-router-dom";

console.log(logo);

function Header() {
  return (
    <header>
      <div className="nav navbar-inverse">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              style={{ width: "5rem", height: "5rem" }}
              alt="brand"
            />
          </Link>
        </div>
        <Example />
        <div className="headerCart">
          <Link className="ml-6" to="/cart">
            <div className="ButtonContainer">
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i>
              </span>
              my cart
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
