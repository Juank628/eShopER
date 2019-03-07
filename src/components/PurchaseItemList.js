import React, { Component } from "react";
import PurchaseItem from "./PurchaseItem";
import { Consumer } from "../context";

export default class PurchaseItemList extends Component {

  render() {
    
    return (
      <Consumer>
        {value => {
          return(
          value.productArray.length > 0 ?
          (
          <div className="cTotalAndPaySpace">
            <ul className="list-group">
              {value.purchaseList.map((item, i) => (
                <PurchaseItem key={i} item={item} />
              ))}
            </ul>
          </div>
          ):
          (
            <div className="cVerticalCenter">
              <p className="font-weight-bold">Tu lista está vacía</p>
              <img src="img/icons/empty-cart.png" alt="not found" />
            </div>
          )
          );
        }}
      </Consumer>
    );
  }
}
