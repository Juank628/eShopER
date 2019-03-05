import React, { Component } from "react";
import PurchaseItemList from "../PurchaseItemList";
import TotalAndPay from "../TotalAndPay";

export default class PurchaseList extends Component {
  render() {
    return (
      <div className="col-12 cNavbarSpace">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <PurchaseItemList />
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <TotalAndPay />
          </div>
        </div>
      </div>
    );
  }
}
