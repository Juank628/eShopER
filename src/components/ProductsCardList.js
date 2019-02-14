import React, { Component } from "react";
import { Consumer } from "../context";
import ProductCard from "./ProductCard.js";

class ProductsCardList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return value.loadingCards ? (
            <div className="cVerticalCenter text-center">
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row justify-content-center cChatSpace">
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
