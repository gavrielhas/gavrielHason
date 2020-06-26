import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default class Example extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          right
        >
          <Link
            onClick={() => this.closeMenu()}
            id="about"
            className="menu-item text-capitalize"
            to="/"
          >
            <p>דף הבית</p>
          </Link>
          <Link
            onClick={() => this.closeMenu()}
            className="menu-item text-capitalize"
            id="home"
            to="/ProductList"
          >
            <p>אגוזים ופיצוחים</p>
          </Link>

          <Link
            onClick={() => this.closeMenu()}
            className="menu-item text-capitalize"
            id="home"
            to="/DryProductList"
          >
            <p>פירות יבשים</p>
          </Link>

          <Link
            onClick={() => this.closeMenu()}
            id="cart"
            className="menu-item text-capitalize"
            to="/cart"
          >
            <p>עגלה</p>
          </Link>
        </Menu>
      </div>
    );
  }
}
