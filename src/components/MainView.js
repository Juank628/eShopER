import React, { Component } from "react";
import ProductsCardList from "./ProductsCardList.js";
import PurchaseItemList from "./PurchaseItemList";
import TotalAndPay from "./TotalAndPay";
import Chat from "./Chat";
import { Consumer } from "../context.js";

export default class MainView extends Component {
  render() {
    const { showPurchaseList } = this.props;

    return (
      <Consumer>
        {value => {
          return value.orderSent ? (
            <div>
                <div className="cSentMessageImg">
                    <img src="img/icons/checked.png" alt="not found" />
                </div>
            </div>
          ) : (
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
                        <PurchaseItemList />
                      </div>
                      <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <TotalAndPay />
                        <Chat />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
