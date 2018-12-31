import React, { Component } from "react";
import ProductCard from "./ProductCard.js";

class ProductsCardList extends Component {
  state = {
    products: [
      {
        name: "Cocacola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Incakola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Sprite 2.25l",
        price: "S/7.00"
      },
      {
        name: "Cocacola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Incakola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Sprite 2.25l",
        price: "S/7.00"
      }
    ]
  };

  render() {
    const { products } = this.state;

    return (
      <div className="row justify-content-center">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductsCardList;
