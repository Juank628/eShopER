import React, { Component } from "react";

export default class PurchaseItem extends Component {
  render() {
    const { name, price } = this.props.item;
    return (
      <div className="row mx-1">
        <li className="list-group-item col-12">
          <div className="row">
            <div className="col-sm-3 col-lg-2 d-none d-sm-none d-md-block">
              <img
                className="card-img-top cPurchaseListImg"
                src={
                  window.location.origin +
                  "/img/tragos/vinos/Casa silva cabernet sauvignon carmenere 750ml.jpg"
                }
                alt="not found"
              />
            </div>

            <div className="col-sm-9 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-8">
                  <h5 className="cPurchaseListName">{name}</h5>
                </div>
                <div className="col-4">
                  <div className="row">
                    <div className="col-12">
                      <h5 className="cPurchaseListPrice text-right">{price}</h5>
                    </div>
                    <div className="col-12">
                      <h5 className="cPurchaseListSubTotal text-right">{price}</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <form className="form-inline justify-content-center">
                    <img
                      className="mr-3"
                      src={window.location.origin + "/img/icons/trash-red.png"}
                      alt="not found"
                    />
                    <button className="btn btn-sm btn-success mr-1 cFontMono">
                      +
                    </button>
                    <input
                      type="number"
                      className="form-control form-control-sm col-3"
                    />
                    <button className="btn btn-sm btn-danger ml-1 cFontMono">
                      -
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
