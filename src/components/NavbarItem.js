import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavbarItem extends Component {
  render() {
    const { itemName, to } = this.props;

    return (
      <li
      className="nav-item"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <NavLink
        to={to}
        className="nav-link cNavbarItem"
      >
        {itemName}
      </NavLink>
    </li>
      )
  }
}

export default NavbarItem;
