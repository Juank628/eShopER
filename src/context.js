import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
let productArray = [];
let quantityArray = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "READ_CARDS":
      state.apiQuery("products", action.y, action.z);
      break;

    case "ADD_PRODUCT":
      let addProductIndex = productArray.indexOf(action.productName);
      if (addProductIndex === -1) {
        productArray.push(action.productName);
        quantityArray.push(1);
        sessionStorage.setItem("productArray", productArray);
        sessionStorage.setItem("quatityArray", quantityArray);
      } else {
        quantityArray[addProductIndex]++;
        sessionStorage.setItem("quatityArray", quantityArray);
      }
      break;

    case "SUB_PRODUCT":
      let subProductIndex = productArray.indexOf(action.productName);
      if (quantityArray[subProductIndex] <= 1) {
        productArray.splice(subProductIndex, 1);
        quantityArray.splice(subProductIndex, 1);
        sessionStorage.setItem("productArray", productArray);
        sessionStorage.setItem("quatityArray", quantityArray);
      } else {
        quantityArray[subProductIndex]--;
        sessionStorage.setItem("quatityArray", quantityArray);
      }
      break;

    default:
      console.log("NO ACTION");
  }
};

export class Provider extends Component {
  state = {
    products: [],

    apiQuery: (x, y, z) => {
      axios
        .get(
          `http://127.0.0.1/eShopBackend/eShopBackend/public/api/${x}${y}${z}`
        )
        .then(res => {
          this.setState({ products: res.data });
        });
    },

    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    this.state.apiQuery("products", "/tragos", "/vinos");
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
