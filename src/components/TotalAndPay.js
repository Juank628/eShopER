import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";

export default class TotalAndPay extends Component {
  state = {
    sending: false
  };

  sendOrder = purchaseList => {
    const data = {
      phone: "9898",
      name: "ReactS",
      purchaseList: JSON.stringify(purchaseList)
    };

    this.setState({ sending: true });

    axios.post("/api/order", { data }).then(res => {
      if (res.status > 199 && res.status < 300) {
        console.log("sent ok");
      }
      this.setState({ sending: false });
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          let totalPrice = 0;
          for (let i = 0; i < value.productArray.length; i++) {
            totalPrice =
              totalPrice + value.quantityArray[i] * value.priceArray[i];
          }
          return (
            <div className="cFixed cBgWhite">
              <span className="cTotalAndPayTitle">Total:</span>
              <br />
              <span className="cTotalAndPayPrice">S/{totalPrice}</span>
              <br />

              {this.state.sending ? (
                <button
                  type="button"
                  className="mt-2 mb-3 btn btn-success btn-lg cTotalAndPayBtn"
                  disabled
                >
                  <span
                    className="spinner-grow float-left"
                    role="status"
                    aria-hidden="true"
                  />
                  <span>Enviando...</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="mt-2 mb-3 btn btn-success btn-lg cTotalAndPayBtn"
                  onClick={this.sendOrder.bind(this, value.purchaseList)}
                >
                  <span className="cTotalAndPayBtnTxt">Pedir</span>
                </button>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
