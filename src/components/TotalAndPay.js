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
          let subTotal = 0;
          let totalPrice = 0;
          let deliveryPrice = this.state.deliveryPrice;
          
          for (let i = 0; i < value.productArray.length; i++) {
            subTotal =
              subTotal + parseInt(value.quantityArray[i]) * parseFloat(value.priceArray[i]);
          }
          totalPrice = parseFloat(subTotal) + parseFloat(deliveryPrice)
          
          subTotal = parseFloat(subTotal)
          deliveryPrice = parseFloat(deliveryPrice)
          totalPrice = parseFloat(totalPrice)

          subTotal = subTotal.toFixed(2)
          deliveryPrice = deliveryPrice.toFixed(2)
          totalPrice = totalPrice.toFixed(2)

          return (
            <div className="cFixed px-2 cBgWhite border-sm-top">
            <div className="border-top d-sm-none"></div>
            <div className="px-2 mt-2">
              <span className="">Subtotal:</span>
              <span className="float-right">S/{subTotal}</span>
              <br />
              <span className="">Delivery:</span>
              <span className="float-right">S/{deliveryPrice}</span>
              <br />
              <span className="cTotalAndPayTotal">Total a pagar:</span>
              <span className="cTotalAndPayTotal float-right">S/{totalPrice}</span>
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
                  disabled={value.productArray.length === 0}
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
