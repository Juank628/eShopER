import React, { Component } from "react";
import PurchaseItem from "./PurchaseItem";

export default class PurchaseItemList extends Component {
  state = {
    purchaseList: [
      {
        name: "Cocacola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Incakola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Sprite 2.25l",
        price: "S/7.00"
      },
      {
        name: "Cocacola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Incakola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Sprite 2.25l",
        price: "S/7.00"
      },
      {
        name: "Cocacola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Incakola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Sprite 2.25l",
        price: "S/7.00"
      },
      {
        name: "Cocacola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Incakola 2.25l",
        price: "S/7.00"
      },
      {
        name: "Last product",
        price: "S/7.00"
      }
    ],

    showPurchaseList: false
  };

  showList = () => {
    this.setState({
      showPurchaseList: !this.state.showPurchaseList
    });
  };

  render() {
    const { purchaseList } = this.state;

    return (
      <div className="cTotalAndPaySpace">
        <ul className="list-group">
          {purchaseList.map((item, i) => (
            <PurchaseItem key={i} item={item} />
          ))}
        </ul>
      </ div>
    );
  }
}
