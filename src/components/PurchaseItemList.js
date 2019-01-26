import React, { Component } from "react";
import PurchaseItem from "./PurchaseItem";
import { Consumer } from "../context";

export default class PurchaseItemList extends Component {

  render() {
    
    return (
      <Consumer>
        {value => {
          return(
          <div className="cTotalAndPaySpace">
            <ul className="list-group">
              {value.purchaseList.map((item, i) => (
                <PurchaseItem key={i} item={item} />
              ))}
            </ul>
          </div>
          );
        }}
      </Consumer>
    );
  }
}
