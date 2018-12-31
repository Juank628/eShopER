import React, { Component } from 'react'

export default class TotalAndPay extends Component {
  render() {
    return (
      <div className="cFixed cBgWhite">
        <span className="cTotalAndPayTitle">Total:</span><br />
        <span className="cTotalAndPayPrice">S/28.99</span><br />
        <button className="mt-2 mb-3 btn btn-success btn-lg btn-block"><span className="cTotalAndPayBtn">Pedir</span></button>
      </div>
    )
  }
}
