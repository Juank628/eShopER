import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Icon from "./Icon";

class ProductFilter extends Component {
  state = {
    family: "todos",
    product: "todos",
    searchExpanded: false
  };

  expandSearch = () => {
    this.setState({ searchExpanded: true });
  };

  reduceSearch = () => {
    this.setState({ searchExpanded: false });
    console.log("y");
  };

  checkEnter = e => {
    if (e.keyCode === 13) {
      this.search();
    }
  };

  updateProduct = e => {
    this.setState({ product: e.target.value });
  };

  search = () => {
    this.props.history.push(
      "/products/" + this.state.family + "/" + this.state.product
    );
  };

  render() {
    return !this.state.searchExpanded ? (
      <div className="row mb-3">
        <div className="col-4 p-1 mx-auto text-center border-right cFilterButton cUnselText cBoxShadow">
          <div
            className="dropdown-toggle"
            id="orderDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Icon group="icons" symbol="sort" iconStyle="cFilterIcon" />
            <span className="cFilterFont ml-1">Ordenar</span>
          </div>

          <div className="dropdown-menu w-100" aria-labelledby="orderDropdown">
            <span
              className="dropdown-item"
              onClick={this.props.setSortType.bind(this, "sale")}
            >
              Ofertas
            </span>
            <span
              className="dropdown-item"
              onClick={this.props.setSortType.bind(this, "minPrice")}
            >
              Menor precio
            </span>
            <span
              className="dropdown-item"
              onClick={this.props.setSortType.bind(this, "maxPrice")}
            >
              Mayor precio
            </span>
          </div>
        </div>

        <div className="col-4 p-1 mx-auto text-center border-right cFilterButton cUnselText cBoxShadow">
          <div
            className="dropdown-toggle"
            id="filterDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Icon group="icons" symbol="filter" iconStyle="cFilterIcon" />
            <span className="cFilterFont ml-1">Filtrar</span>
          </div>

          <div className="dropdown-menu w-100" aria-labelledby="filterDropdown">
            {this.props.subFamilies.map((item, i) => (
              <span
                key={i}
                className="dropdown-item"
                onClick={this.props.setFilterType.bind(this, item)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="col-4 p-1 cBoxShadow" onClick={this.expandSearch}>
          <Icon group="icons" symbol="search" iconStyle="cSearchIcon ml-2" />
          <span
            className="cSearchFont cUnselText ml-1"
          >
            Buscar...
          </span>
        </div>
      </div>
    ) : (
      <div className="row mb-3">
        <div className="col-12 p-1 mx-auto text-center border-right cFilterButton cUnselText cBoxShadow cSearchExpanded">
          <form className="form-inline">
            <div onClick={this.reduceSearch}>
              <Icon
                group="icons"
                symbol="backArrow"
                iconStyle="cBackIcon mr-2 ml-1"
              />
            </div>
            <input
              className="cSearchInput"
              type="text"
              placeholder="Buscar..."
              onKeyUp={this.updateProduct}
              onKeyDown={this.checkEnter}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductFilter);
