import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "READ_CARDS":
      state.apiQuery("products", action.y, action.z);
      break;

    case "ADD_PRODUCT":
      let addProductIndex = state.productArray.indexOf(action.productName);
      if (addProductIndex === -1) {
        state.productArray.push(action.productName);
        state.quantityArray.push(1);
        state.priceArray.push(action.productPrice);
        sessionStorage.setItem("productArray", state.productArray);
        sessionStorage.setItem("quantityArray", state.quantityArray);
        sessionStorage.setItem("priceArray", state.priceArray);
      } else {
        state.quantityArray[addProductIndex]++;
        sessionStorage.setItem("quantityArray", state.quantityArray);
      }
      state.makePurchaseList();
      break;

    case "SUB_PRODUCT":
      let subProductIndex = state.productArray.indexOf(action.productName);
      if (subProductIndex !== -1) {
        if (state.quantityArray[subProductIndex] <= 1) {
          state.productArray.splice(subProductIndex, 1);
          state.quantityArray.splice(subProductIndex, 1);
          state.priceArray.splice(subProductIndex, 1);
          sessionStorage.setItem("productArray", state.productArray);
          sessionStorage.setItem("quantityArray", state.quantityArray);
          sessionStorage.setItem("priceArray", state.priceArray);
          if (state.productArray.length < 1) {
            sessionStorage.clear();
          }
        } else {
          state.quantityArray[subProductIndex]--;
          sessionStorage.setItem("quantityArray", state.quantityArray);
        }
      }
      state.makePurchaseList();
      break;

    default:
      console.log("NO ACTION");
  }
};

export class Provider extends Component {
  state = {
    products: [],
    productArray: [],
    quantityArray: [],
    priceArray: [],
    purchaseList: [],

    apiQuery: (x, y, z) => {
      axios
        .get(
          `http://127.0.0.1/eShopBackend/eShopBackend/public/api/${x}${y}${z}`
        )
        .then(res => {
          this.setState({ products: res.data });
        });
    },

    makePurchaseList: () => {
      let tempArray = [];
      let productArray = [];
      let quantityArray = [];
      let priceArray = [];
      if (sessionStorage.length > 0) {
        productArray = sessionStorage.getItem("productArray").split(",");
        quantityArray = sessionStorage.getItem("quantityArray").split(",");
        priceArray = sessionStorage.getItem("priceArray").split(",");
        for (let i = 0; i < productArray.length; i++) {
          tempArray.push({
            name: productArray[i],
            quantity: quantityArray[i],
            price: priceArray[i]
          });
        }
      }
      this.setState({ purchaseList: tempArray });
    },

    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    this.state.apiQuery("products", "/tragos", "/vinos");
    if (sessionStorage.length > 0) {
      this.setState({
        productArray: sessionStorage.getItem("productArray").split(","),
        quantityArray: sessionStorage.getItem("quantityArray").split(","),
        priceArray: sessionStorage.getItem("priceArray").split(",")
      })
    }
    this.state.makePurchaseList();
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
