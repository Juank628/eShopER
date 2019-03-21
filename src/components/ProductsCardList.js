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
    filterType: "todos",

    apiQuery: (x, y, z) => {
      const apiURL =
        "https://www.elroblemarket.com/laravelApp/eShopBackend/public/api";
      this.setState({ loadingCards: true });
      axios.get(`${apiURL}${x}${y}${z}`).then(res => {
        this.setState({
          products: res.data,
          loadingCards: false,
          filterType: "todos"
        });
        this.getSubFamilies();
        this.sortData();
      });
    }
  };

  getData = () => {
    if (this.routeChange()) {
      let family = this.checkFamily();
      let subfamily = this.checkSubfamily();

      this.state.apiQuery("/search", family, subfamily);

      this.setState({
        lastFamily: this.props.family,
        lastSubfamily: this.props.subfamily
      });
    }
  };

  sortData = () => {
    let sortedData = [];
    switch (this.props.sortType) {
      case "sale":
        sortedData = this.state.products.sort(function(a, b) {
          return b.sale - a.sale;
        });
        this.setState({ products: sortedData });
        break;
      case "minPrice":
        sortedData = this.state.products.sort(function(a, b) {
          return a.price - b.price;
        });
        this.setState({ products: sortedData });
        break;
      case "maxPrice":
        sortedData = this.state.products.sort(function(a, b) {
          return b.price - a.price;
        });
        this.setState({ products: sortedData });
        break;
      default:
        console.log("no sort type found");
    }
  };

  filterData = () => {
    this.setState({ filterType: this.props.filterType });
  };

  getSubFamilies = () => {
    let subFamilies = [];
    for (let i = 0; i < this.state.products.length; i++) {
      if (subFamilies.indexOf(this.state.products[i].subfamily) === -1) {
        subFamilies.push(this.state.products[i].subfamily);
      }
    }
    this.props.setSubFamilies(subFamilies);
  };

  routeChange = () => {
    return (
      this.state.lastFamily !== this.props.family ||
      this.state.lastSubfamily !== this.props.subfamily
    );
  };

  checkFamily = () => {
    return "/" + this.props.family;
  };

  checkSubfamily = () => {
    if (this.props.subfamily !== "todos") {
      return "/" + this.props.subfamily;
    } else {
      return "";
    }
  };

  componentDidUpdate(prevProps) {
    this.getData();
    if (this.props.sortType !== prevProps.sortType) {
      this.sortData();
    }
    if (this.props.filterType !== prevProps.filterType) {
      this.filterData();
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { products, loadingCards } = this.state;
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              {loadingCards ? (
                <Loading />
              ) : (
                <div className="row justify-content-center cChatSpace">
                  {products.map((product, i) => {
                    if (product.subfamily === this.state.filterType) {
                      return <ProductCard key={i} product={product} />;
                    } else if (this.state.filterType === "todos") {
                      return <ProductCard key={i} product={product} />;
                    }
                  })}
                </div>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ProductsCardList;
