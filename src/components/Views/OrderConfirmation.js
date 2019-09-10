import React, { Component } from "react";
import { Consumer } from "../../context";

export default class OrderConfirmation extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="col-12">
              <div className="cSentMessageImg">
                <div>
                  <img src="img/icons/checked.png" alt="not found" />
                </div>
                <div className="mt-3 cUnselText">
                  <ul className="col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6 mx-auto">
                    <li className="text-center text-secondary mb-2">
                      Su código de orden es:{" "}
                      <span className="cTotalAndPayOrdNo">
                        {value.orderNumber}
                      </span>
                    </li>
                    <li className="text-center text-secondary">
                      Comuniquese a nuestro whatsapp, para indicarnos la dirección de entrega{" "}
                      <br />
                      <img
                        src="img/icons/whatsapp.png"
                        alt="not found"
                        className="mr-2"
                      />
                      <span className="cSelText">999999999</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
