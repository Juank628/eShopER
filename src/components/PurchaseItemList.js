import React, { Component } from "react";
import PurchaseItem from "./PurchaseItem";
import { Consumer } from "../context";
import Icon from "./Icon";

export default class PurchaseItemList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return value.productArray.length > 0 ? (
            <div className="cTotalAndPaySpace mt-2">
              <ul className="list-group">
                {value.purchaseList.map((item, i) => (
                  <PurchaseItem key={i} item={item} />
                ))}
              </ul>
            </div>
          ) : (
            <div className="cVerticalCenter text-center">
              <p className="text-secondary">Tu lista está vacía</p>
              <Icon group="icons" symbol="emptyCart" iconStyle="cEmptyCartIcon" />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
