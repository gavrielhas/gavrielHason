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
        <Menu>
          <Link id="about" className="menu-item" to="/">
            Home
          </Link>
          <Link className="menu-item" id="home" to="/ProductList">
            Products list
          </Link>

          <Link id="contact" className="menu-item" to="/">
            Contact
          </Link>
        </Menu>
      </div>
    );
  }
}
