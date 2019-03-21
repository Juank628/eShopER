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
      <div className="col-12 justify-content-center cNavbarSpace">
        <ProductFilter
          setSortType={this.setSortType}
          setFilterType={this.setFilterType}
          subFamilies={this.state.subFamilies}
        />
        <ProductsCardList
          family={this.props.match.params.family}
          subfamily={this.props.match.params.subfamily}
          sortType={this.state.sortType}
          filterType={this.state.filterType}
          setSubFamilies={this.setSubFamilies}
        />
      </div>
    );
  }
}
