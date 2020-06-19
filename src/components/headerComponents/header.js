import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo "> Logo</div>
      <nav className="nav navbar-inverse navbar-expand-sm px-sm-5">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ProductList">Products list</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li className="last">
            <Link to="/cart">
              <button>
                <i className="fas fa-cart-plus">my cart</i>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
