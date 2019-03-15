import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class ProductCard extends Component {
  state = {
    quantity: 0
  };

  clickAdd = (dispatch, name, price, family, subfamily) => {
    dispatch({
      type: "ADD_PRODUCT",
      productName: name,
      productPrice: price,
      productFamily: family,
      productSubFamily: subfamily
    });
  };

  clickSub = (dispatch, name) => {
    dispatch({ type: "SUB_PRODUCT", productName: name });
  };

  render() {
    const { name, price, sale, family, subfamily } = this.props.product;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card col-5 col-sm-3 col-md-2 col-lg-2 col-xl-2 mx-2 mb-2">
              <img
                className="card-img-top"
                src={
                  "img/products/" +
                  family +
                  "/" +
                  subfamily +
                  "/" +
                  name.replace(/ /g, "").replace(/%/g,"(p)")+
                  ".jpg"
                }
                alt="not found"
              />
              <div className="card-body px-0">
                <div className="cCardNameHeight">
                  <h5 className="card-title cCardTitle">{name}</h5>
                </div>

                <div className="cCardPrice">
                  <span>S/</span>
                  <span>{price}</span>
                </div>

                {sale == 1 ? (
                  <div className="cCardSale">
                    <span>Oferta!</span>
                  </div>
                ) : null}

                {value.quantityArray[value.productArray.indexOf(name)] ===
                undefined ? (
                  <img
                    src="img/icons/add-cart.png"
                    alt="not found"
                    className="float-right cCardCart"
                    onClick={this.clickAdd.bind(
                      this,
                      dispatch,
                      name,
                      price,
                      family,
                      subfamily
                    )}
                  />
                ) : (
                  <form className="form-inline justify-content-center">
                    <button
                      className="btn btn-sm btn-success mr-1 cFontMono"
                      type="button"
                      onClick={this.clickAdd.bind(
                        this,
                        dispatch,
                        name,
                        price,
                        family,
                        subfamily
                      )}
                    >
                      +
                    </button>

                    <input
                      type="text"
                      className="text-center form-control form-control-sm col-4"
                      placeholder={
                        value.quantityArray[value.productArray.indexOf(name)]
                      }
                      disabled
                    />

                    <button
                      className="btn btn-sm btn-danger ml-1 cFontMono"
                      type="button"
                      onClick={this.clickSub.bind(this, dispatch, name)}
                    >
                      -
                    </button>
                  </form>
                )}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

ProductCard.defaultProps = {
  name: "no name",
  price: 9999,
  img: ""
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};

export default ProductCard;
