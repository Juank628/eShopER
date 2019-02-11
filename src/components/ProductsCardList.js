import React, { Component } from "react";
import { Consumer } from "../context";
import ProductCard from "./ProductCard.js";

class ProductsCardList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="row justify-content-center">
              {value.products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ProductsCardList;
