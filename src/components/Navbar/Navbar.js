import React, { Component } from "react";
import "./navbar.scss";
import Logo from "../../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="navbar">
          <img src={Logo} alt="logo" className="navbar___logo" />
          <ul className="navbar__menu">
            <li className="navbar__item">
              <a href="/">Home</a>
            </li>
            <li className="navbar__item">
              <a href="/">Somewhere</a>
            </li>
            <li className="navbar__item">
              <a href="/">Pomiris</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
