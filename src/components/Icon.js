import React, { Component } from "react";

export default class Icon extends Component {
  render() {
    const { group, symbol, iconStyle } = this.props;
    return (
      <svg className={iconStyle}>
        <use
          xlinkHref={group ? `/img/icons/${group}.svg#${symbol}` : `#${symbol}`}
        />
      </svg>
    );
  }
}
