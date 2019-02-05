import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";

export default class TotalAndPay extends Component {
  sendOrder = () => {
    const data = {
      ip: "192,168,1,99",
      orderNo: "0101"
    };

    axios
      .post(
        "/api/order",
        { data }
      )
      .then(res => {
        console.log(res);
      });
    console.log("send");
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
              <button
                type="button"
                className="mt-2 mb-3 btn btn-success btn-lg btn-block"
                onClick={this.sendOrder}
              >
                <span className="cTotalAndPayBtn">Pedir</span>
              </button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
