import React, { Component } from 'react'
import { NavLink } from "react-router-dom";


export default class NavItem extends Component {
  render() {
    const {route, name, color} = this.props;
    return (
        <li
        className="nav-item"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <NavLink
          to={route}
          className={"nav-link cNavbarItem cUnselText " + color}
        >
          {name}
        </NavLink>
      </li>
    )
  }
}
