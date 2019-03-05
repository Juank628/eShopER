import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

class ProductsCardList extends Component {
  state = {
    products: [],
    loadingCards: false,

    apiQuery: (x, y, z) => {
      const apiURL =
        "https://www.elroblemarket.com/laravelApp/eShopBackend/public/api";
      this.setState({ loadingCards: true });
      axios.get(`${apiURL}${x}${y}${z}`).then(res => {
        this.setState({ products: res.data });
        this.setState({ loadingCards: false });
      });
    }
  };

  componentDidMount() {
    this.state.apiQuery("/products", "/tragos", "/vinostintos");
  }

  render() {
    const { products, loadingCards } = this.state;
    const { family, subfamily } = this.props;
    return (
      <Consumer>
        {value => {
          return loadingCards ? (
            <Loading />
          ) : (
            <div className="row justify-content-center cChatSpace">
              {family}
              {products.map((product, i) => (
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
