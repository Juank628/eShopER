import React, { Component } from "react";
import Icon from "./Icon";

class ProductFilter extends Component {
  render() {
    return (
      <div className="row mb-2">
        <div className="col-6 p-1 mx-auto text-center border cFilterButton cUnselText">
          <div
            className="dropdown-toggle"
            id="filterDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Icon group="icons" symbol="filter" iconStyle="cFilterIcon" />
            <span className="ml-1">Filtrar</span>
          </div>

          <div className="dropdown-menu w-100" aria-labelledby="filterDropdown">
            {this.props.subFamilies.map((item, i) => (
              <span
                key={i}
                className="dropdown-item"
                onClick={this.props.setFilterType.bind(this,item)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="col-6 p-1 mx-auto text-center border cFilterButton cUnselText">
          <div
            className="dropdown-toggle"
            id="orderDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Icon group="icons" symbol="sort" iconStyle="cFilterIcon" />
            <span className="ml-1">Ordenar</span>
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
      </div>
    );
  }
}

export default ProductFilter;
