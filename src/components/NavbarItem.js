import React, { Component } from "react";

class NavbarItem extends Component {
  render() {
    const { itemName, itemClass } = this.props;

    return (
      <li
        className={"nav-item " + itemClass}
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        onClick={this.props.onClick}
      >
        <div className="nav-link text-center cBlackTransparent">
          <span className="cFontColorWhite">{itemName}</span>
        </div>
      </li>
    );
  }
}

export default NavbarItem;
