import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class ProductCard extends Component {

  clickAdd = (dispatch, name, price) => {
      dispatch({type: 'ADD_PRODUCT', productName: name, productPrice: price});
  };

  clickSub = (dispatch, name) => {
    dispatch({type: 'SUB_PRODUCT', productName: name});
  };
  
  render() {
    const { name, price, family, subfamily } = this.props.product;

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;

          return (
            <div className="card col-5 col-sm-3 col-md-2 col-lg-2 col-xl-2 mx-2 mb-2">
              <img
                className="card-img-top"
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
              <div className="card-body px-0">
                <h5 className="card-title cCardTitle">{name}</h5>
                <h5 className="card-text cCardPrice">{price}</h5>
                <button
                  className="btn btn-sm btn-success mr-2 cFontMono"
                  onClick={this.clickAdd.bind(this,dispatch,name,price)}
                >
                  +
                </button>
                <button
                  className="btn btn-sm btn-danger cFontMono"
                  onClick={this.clickSub.bind(this,dispatch,name)}
                >
                  -
                </button>
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
