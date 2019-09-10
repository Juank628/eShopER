import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let addProductIndex = state.productArray.indexOf(action.productName);
      if (addProductIndex === -1) {
        state.productArray.push(action.productName);
        state.quantityArray.push(1);
        state.priceArray.push(action.productPrice);
        state.familyArray.push(action.productFamily);
        state.subFamilyArray.push(action.productSubFamily);
        state.copyStateToStorage();
      } else {
        state.quantityArray[addProductIndex]++;
        sessionStorage.setItem("quantityArray", state.quantityArray);
      }
      state.resetBadgeAnimation();
      return {
        ...state,
        purchaseList: state.makePurchaseList(),
        badgeAnimation: true
      };

    case "SUB_PRODUCT":
      let subProductIndex = state.productArray.indexOf(action.productName);
      if (subProductIndex !== -1) {
        if (state.quantityArray[subProductIndex] <= 1) {
          state.deleteProduct(subProductIndex);
          state.copyStateToStorage();
          state.clearIfEmpty();
        } else {
          state.quantityArray[subProductIndex]--;
          sessionStorage.setItem("quantityArray", state.quantityArray);
        }
      }
      state.resetBadgeAnimation();
      return {
        ...state,
        purchaseList: state.makePurchaseList(),
        badgeAnimation: true
      };

    case "DEL_PRODUCT":
      let delProductIndex = state.productArray.indexOf(action.productName);
      state.deleteProduct(delProductIndex);
      state.copyStateToStorage();
      state.clearIfEmpty();
      return {
        ...state,
        purchaseList: state.makePurchaseList()
      };

    case "SHOW_PURCHASE_LIST":
      return{
        ...state,
        showPurchaseList: !state.showPurchaseList
      }

    default:
      console.log("NO ACTION");
  }
};

class Provider extends Component {
  state = {
    products: [],
    productArray: [],
    quantityArray: [],
    priceArray: [],
    familyArray: [],
    subFamilyArray: [],
    purchaseList: [],
    badgeAnimation: false,
    loadingCards: false,
    sendingOrder: false,
    orderSent: false,
    orderNumber: 0,
    location: "",

    getData: () => {
      if (sessionStorage.length > 4) {
        this.setState({
          productArray: sessionStorage.getItem("productArray").split(","),
          quantityArray: sessionStorage.getItem("quantityArray").split(","),
          priceArray: sessionStorage.getItem("priceArray").split(","),
          familyArray: sessionStorage.getItem("familyArray").split(","),
          subFamilyArray: sessionStorage.getItem("subFamilyArray").split(",")
        });
      }
      this.setState({ purchaseList: this.state.makePurchaseList() });
    },

    makePurchaseList: () => {
      let tempArray = [];
      let productArray = [];
      let quantityArray = [];
      let priceArray = [];
      let familyArray = [];
      let subFamilyArray = [];
      if (sessionStorage.length > 4) {
        productArray = sessionStorage.getItem("productArray").split(",");
        quantityArray = sessionStorage.getItem("quantityArray").split(",");
        priceArray = sessionStorage.getItem("priceArray").split(",");
        familyArray = sessionStorage.getItem("familyArray").split(",");
        subFamilyArray = sessionStorage.getItem("subFamilyArray").split(",");
        for (let i = 0; i < productArray.length; i++) {
          tempArray.push({
            name: productArray[i],
            quantity: quantityArray[i],
            price: priceArray[i],
            family: familyArray[i],
            subfamily: subFamilyArray[i]
          });
        }
      }

      return tempArray;
    },

    deleteProduct: storageIndex => {
      this.state.productArray.splice(storageIndex, 1);
      this.state.quantityArray.splice(storageIndex, 1);
      this.state.priceArray.splice(storageIndex, 1);
      this.state.familyArray.splice(storageIndex, 1);
      this.state.subFamilyArray.splice(storageIndex, 1);
    },

    clearIfEmpty: () => {
      if (this.state.productArray.length < 1) {
        sessionStorage.removeItem("productArray");
        sessionStorage.removeItem("quantityArray");
        sessionStorage.removeItem("priceArray");
        sessionStorage.removeItem("familyArray");
        sessionStorage.removeItem("subFamilyArray");
      }
    },

    resetPurchaseList: () => {
      this.setState({
        productArray: [],
        quantityArray: [],
        priceArray: [],
        familyArray: [],
        subFamilyArray: [],
        purchaseList: []
      });
      sessionStorage.removeItem("productArray");
      sessionStorage.removeItem("quantityArray");
      sessionStorage.removeItem("priceArray");
      sessionStorage.removeItem("familyArray");
      sessionStorage.removeItem("subFamilyArray");
    },

    copyStateToStorage: () => {
      sessionStorage.setItem("productArray", this.state.productArray);
      sessionStorage.setItem("quantityArray", this.state.quantityArray);
      sessionStorage.setItem("priceArray", this.state.priceArray);
      sessionStorage.setItem("familyArray", this.state.familyArray);
      sessionStorage.setItem("subFamilyArray", this.state.subFamilyArray);
    },

    resetBadgeAnimation: () => {
      setTimeout(
        function() {
          this.setState({ badgeAnimation: false });
        }.bind(this),
        2000
      );
    },

    setLocation: () => {
      const success = position => {
        this.setState({
          location:
            position.coords.latitude +
            "," +
            position.coords.longitude +
            "/" +
            position.coords.accuracy
        });
      };

      const error = err => {
        this.setState({
          location: "/error: " + err.code
        });
        console.log(err.code);
      };

      if ("geolocation" in navigator) {
        const options = {
          enableHighAccuracy: true,
          timeout: 50000,
          maximumAge: 2000
        };
        navigator.geolocation.getCurrentPosition(success, error, options);
      }
    },

    sendOrder: () => {
      const data = {
        phone: "No phone",
        name: "No name",
        location: this.state.location,
        purchaseList: JSON.stringify(this.state.purchaseList)
      };

      const apiURL =
        "https://boiling-tor-89761.herokuapp.com";

      this.setState({ sendingOrder: true });

      axios.post(`${apiURL}/api/order`, { data }).then(res => {
        if (res.status > 199 && res.status < 300) {
          console.log(res.data);
          this.setState({ orderSent: true });
          this.state.resetPurchaseList();
          this.setState({ orderNumber: res.data });
          this.props.history.push("/ordersent");
        }
        this.setState({ sendingOrder: false });
      });
    },

    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    this.state.getData();
    this.state.setLocation();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default withRouter(Provider);
export const Consumer = Context.Consumer;
