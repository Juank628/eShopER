import React, { Component } from "react";
import { Consumer } from "../../context";

export default class OrderConfirmation extends Component {
  render() {
    const openChat = () => {
      window["LC_API"].open_chat_window();
    };
    return (
      <Consumer>
        {value => {
          return (
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
          );
        }}
      </Consumer>
    );
  }
}
