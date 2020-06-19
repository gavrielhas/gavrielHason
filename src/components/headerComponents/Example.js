import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default class Example extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className="justify-content-right">
        <Menu right>
          <Link id="about" className="menu-item text-capitalize" to="/">
            home
          </Link>
          <Link
            className="menu-item text-capitalize"
            id="home"
            to="/ProductList"
          >
            product list
          </Link>

          <Link id="contact" className="menu-item text-capitalize" to="/">
            Contact
          </Link>
          <Link id="cart" className="menu-item text-capitalize" to="/cart">
            cart
          </Link>
        </Menu>
      </div>
    );
  }
}
