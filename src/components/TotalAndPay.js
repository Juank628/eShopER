import React, { Component } from "react";
import { Consumer } from "../context";

export default class TotalAndPay extends Component {
  state={
    deliveryPrice: 3.5
  }
  
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
            <div className="cFixed px-2 cBgWhite border-sm-top">
            <div className="border-top d-sm-none"></div>
            <div className="px-2 mt-2">
              <span className="">Subtotal:</span>
              <span className="float-right">S/{totalPrice}</span>
              <br />
              <span className="">Delivery:</span>
              <span className="float-right">S/{this.state.deliveryPrice}</span>
              <br />
              <span className="cTotalAndPayTotal">Total a pagar:</span>
              <span className="cTotalAndPayTotal float-right">S/{totalPrice + this.state.deliveryPrice}</span>
            </div>

              {value.sendingOrder ? (
                <button
                  type="button"
                  className="mt-2 mb-3 float-right btn btn-success btn-lg cTotalAndPayBtn"
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
                  className="mt-2 mb-3 float-right btn btn-success btn-lg cTotalAndPayBtn"
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
