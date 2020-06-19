import React from "react";
import Example from "./Example";

function Header() {
  return (
    <header>
      <div className="nav navbar-inverse">
        <Example />
        {/*
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
      */}
        <div className="logo "> Logo</div>
      </div>
    </header>
  );
}

export default Header;
