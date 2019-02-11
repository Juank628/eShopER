import React, { Component } from "react";
import { Consumer } from "../context";
import Navbar from "./Navbar.js";
import ProductsCardList from "./ProductsCardList.js";
import PurchaseItemList from "./PurchaseItemList";
import TotalAndPay from "./TotalAndPay";
import Chat from "./Chat";

export default class MainView extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <Navbar />
              <div className="container col-12 cNavBarSpace">
                <div className="row">
                  {!value.showPurchaseList ? (
                    <div className="col-12 justify-content-center">
                      <ProductsCardList />
                    </div>
                  ) : null}

                  {value.showPurchaseList ? (
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
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
