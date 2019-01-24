import React, { Component } from "react";

class NavbarSubItem extends Component {
  render() {
    const {itemName} = this.props;

    return (
      <span
        className="dropdown-item cFontColorWhite"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        onClick={this.props.onClick}
      >
        {itemName}
      </span>
    );
  }
}

export default NavbarSubItem;
