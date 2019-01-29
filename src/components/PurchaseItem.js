import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class PurchaseItem extends Component {
  clickAdd = (dispatch, name, price) => {
    dispatch({ type: "ADD_PRODUCT", productName: name, productPrice: price });
  };

  clickSub = (dispatch, name) => {
    dispatch({ type: "SUB_PRODUCT", productName: name });
  };

  clickDel = (dispatch, name) => {
    dispatch({ type: "DEL_PRODUCT", productName: name });
  };

  render() {
    const { name, quantity, price, family, subfamily } = this.props.item;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="row mx-1">
              <li className="list-group-item col-12">
                <div className="row">
                  <div className="col-sm-3 col-lg-2 d-none d-sm-none d-md-block">
                    <img
                      className="card-img-top cPurchaseListImg"
                      src={
                        window.location.origin +
                        "/img/products/" +
                        family +
                        "/" +
                        subfamily +
                        "/" +
                        name +
                        ".jpg"
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
                            <h5 className="cPurchaseListPrice text-right">
                              S/{price}
                            </h5>
                          </div>
                          <div className="col-12">
                            <h5 className="cPurchaseListSubTotal text-right">
                              S/{price * quantity}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <form className="form-inline justify-content-center">
                          <button
                            type="button"
                            className="btn btn-sm btn-success mr-1 cFontMono"
                            onClick={this.clickAdd.bind(
                              this,
                              dispatch,
                              name,
                              price
                            )}
                          >
                            +
                          </button>
                          <input
                            type="number"
                            className="text-center form-control form-control-sm col-3"
                            placeholder={quantity}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-danger ml-1 cFontMono"
                            onClick={this.clickSub.bind(this, dispatch, name)}
                          >
                            -
                          </button>

                          <img
                            className="ml-3"
                            src={
                              window.location.origin +
                              "/img/icons/trash-red.png"
                            }
                            alt="not found"
                            onClick={this.clickDel.bind(
                              this,
                              dispatch,
                              name,
                            )}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

PurchaseItem.defaultProps = {
  name: "no name",
  price: 9999
};

PurchaseItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default PurchaseItem;
