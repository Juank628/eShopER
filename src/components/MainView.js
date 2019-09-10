import React, { Component } from "react";
import ProductsCardList from "./ProductsCardList.js";
import PurchaseItemList from "./PurchaseItemList";
import TotalAndPay from "./TotalAndPay";
import { Consumer } from "../context.js";

export default class MainView extends Component {
  render() {
    const { showPurchaseList } = this.props;

    const openChat = () => {
      window["LC_API"].open_chat_window();
    };

    return (
      <Consumer>
        {value => {
          return value.orderSent ? (
            <div className="cSentMessageImg">
              <div>
                <img src="img/icons/checked.png" alt="not found" />
              </div>
              <div className="mt-3 cUnselText">
                <ul className="col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6 mx-auto">
                  <li className="text-center text-secondary mb-2">
                    Su número de orden es:{" "}
                    <span className="cTotalAndPayOrdNo">
                      {value.orderNumber}
                    </span>
                  </li>
                  <li className="text-center text-secondary mb-2">
                    <img
                      src="img/icons/chat.png"
                      alt="not found"
                      className="mr-2"
                    />
                    Use nuestro{" "}
                    <span className="cChatTextLink" onClick={openChat}>
                      chat
                    </span>{" "}
                    para indicarnos la dirección de entrega
                  </li>
                  <li className="text-center text-secondary">
                    <img
                      src="img/icons/whatsapp.png"
                      alt="not found"
                      className="mr-2"
                    />
                    También puede comunicarse a nuestro whatsapp{" "}
                    <span className="cSelText">956382973</span>
                  </li>
                </ul>
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
