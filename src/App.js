import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Provider } from "./context";
import Navbar from "./components/Navbar.js";
import ProductsCardList from "./components/ProductsCardList.js";
import PurchaseItemList from "./components/PurchaseItemList";
import TotalAndPay from "./components/TotalAndPay";
import Chat from "./components/Chat";

class App extends Component {
  state = {
    showPurchaseList: false,
    orderSent: false
  };

  cartPressed = () => {
    this.setState({
      showPurchaseList: !this.state.showPurchaseList
    });
  };

  orderSent = () => {
    this.setState({
      orderSent: true
    });
  };

  render() {
    const { showPurchaseList, orderSent } = this.state;

    return (
      <Provider>
        <div className="App">
          <Navbar cartPressedHandler={this.cartPressed} />
          <div className="container col-12 cNavBarSpace">
            <div className="row">
              {!showPurchaseList ? (
                <div className="col-12 justify-content-center">
                  <ProductsCardList />
                </div>
              ) : null}

              {showPurchaseList ? (
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                      {orderSent ? null : <PurchaseItemList />}
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <TotalAndPay orderSentHandler={this.orderSent} />
                      <Chat />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
