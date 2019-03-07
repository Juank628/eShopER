import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

class ProductsCardList extends Component {
  state = {
    products: [],
    lastFamily: "",
    lastSubfamily: "",
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

  getData = () => {
    if (this.routeChange()) {
      let family = this.checkFamily();
      let subfamily = this.checkSubfamily();

      this.state.apiQuery("/products", family, subfamily);

      this.setState({
        lastFamily: this.props.family,
        lastSubfamily: this.props.subfamily
      });
    }
  };

  routeChange = () => {
    return (
      this.state.lastFamily !== this.props.family ||
      this.state.lastSubfamily !== this.props.subfamily
    );
  };

  checkFamily = () => {
    return '/' + this.props.family;
  };

  checkSubfamily = () => {
    if (this.props.subfamily !== "todos") {
      return "/" + this.props.subfamily;
    } else {
      return "";
    }
  };

  componentDidUpdate() {
    this.getData();
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { products, loadingCards } = this.state;
    return (
      <Consumer>
        {value => {
          return loadingCards ? (
            <Loading />
          ) : (
            <div className="row justify-content-center cChatSpace">
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
