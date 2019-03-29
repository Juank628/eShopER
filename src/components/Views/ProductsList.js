import React, { Component } from "react";
import ProductsCardList from "../ProductsCardList";
import ProductFilter from "../ProductFilter";

export default class ProductsList extends Component {
  state = {
    sortType: "",
    filterType: "",
    subFamilies: ['a','b']
  };

  setSortType = sortType => {
    this.setState({ sortType });
  };

  setFilterType = filterType => {
    this.setState({ filterType })
  }

  setSubFamilies = subFamilies => {
    this.setState({ subFamilies });
  };

  render() {
    return (
      <div className="col-12 cNavbarSpace">
        <ProductFilter
          setSortType={this.setSortType}
          setFilterType={this.setFilterType}
          subFamilies={this.state.subFamilies}
        />
        <ProductsCardList
          family={this.props.match.params.family}
          product={this.props.match.params.product}
          sortType={this.state.sortType}
          filterType={this.state.filterType}
          setSubFamilies={this.setSubFamilies}
        />
      </div>
    );
  }
}
