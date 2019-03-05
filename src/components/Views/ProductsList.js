import React, { Component } from "react";
import ProductsCardList from "../ProductsCardList";

export default class ProductsList extends Component {
  render() {
    return (
      <div className="col-12 justify-content-center cNavbarSpace">
        <ProductsCardList
          family={this.props.match.params.family}
          subfamily={this.props.match.params.subfamily}
        />
      </div>
    );
  }
}
