import React, { Component } from "react";
import { Consumer } from "../context";

export default class TotalAndPay extends Component {
  
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

              {value.sendingOrder ? (
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
                  onClick={value.sendOrder}
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
