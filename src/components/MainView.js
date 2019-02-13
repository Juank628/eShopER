import React, { Component } from "react";
import ProductsCardList from "./ProductsCardList.js";
import PurchaseItemList from "./PurchaseItemList";
import TotalAndPay from "./TotalAndPay";
import Chat from "./Chat";
import { Consumer } from "../context.js";

export default class MainView extends Component {
  render() {
    const { showPurchaseList } = this.props;

    const openChat =()=>{
      window["Tawk_API"].showWidget();
      window["Tawk_API"].maximize();
    }

    return (
      <Consumer>
        {value => {
          return value.orderSent ? (
            <div className="cSentMessageImg">
              <div>
                <img src="img/icons/checked.png" alt="not found" />
              </div>
              <div className="mt-3">
                <ul className="col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6 mx-auto">
                  <li className="text-center text-secondary mb-2">
                    <img src="img/icons/chat.png" alt="not found" className="mr-2" />
                    Use nuestro <span className="cChatTextLink" onClick={openChat}>chat</span> para indicarnos la dirección de entrega
                  </li>
                  <li className="text-center text-secondary">
                    <img src="img/icons/whatsapp.png" alt="not found" className="mr-2" />
                    También puede comunicarse a nuestro whatsapp 956382973
                  </li>
                </ul>
              </div>
              <Chat />
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
