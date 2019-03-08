import React, { Component } from "react";

class NavbarSubItem extends Component {
  render() {
    const {itemName} = this.props;

    return (
      <span
        className="dropdown-item cNavbarSubItem"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        {itemName}
      </span>
    );
  }
}

export default NavbarSubItem;
