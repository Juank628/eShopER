import React, { Component } from "react";
import { Consumer } from "../context";

export default class TotalAndPay extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          let totalPrice = 0;
          for(let i=0;i<value.productArray.length;i++){
            totalPrice=totalPrice+value.quantityArray[i]*value.priceArray[i];
          }
          return (
            <div className="cFixed cBgWhite">
              <span className="cTotalAndPayTitle">Total:</span>
              <br />
              <span className="cTotalAndPayPrice">S/{totalPrice}</span>
              <br />
              <button className="mt-2 mb-3 btn btn-success btn-lg btn-block">
                <span className="cTotalAndPayBtn">Pedir</span>
              </button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
