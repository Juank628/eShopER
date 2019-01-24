import React, { Component } from "react";
import PropTypes from 'prop-types'

class ProductCard extends Component {
  render() {
    const { name, price, family, subfamily }  = this.props.product;

    return (
      <div className="card col-5 col-sm-3 col-md-2 col-lg-2 col-xl-2 mx-2 mb-2">
        <img
          className="card-img-top"
          src={
            window.location.origin +
            "/img/products/" + family + "/" + subfamily + "/" + name + ".jpg"
          }
          alt="not found"
        />
        <div className="card-body px-0">
          <h5 className="card-title cCardTitle">{name}</h5>
          <h5 className="card-text cCardPrice">{price}</h5>
          <button className="btn btn-sm btn-success mr-2 cFontMono">+</button>
          <button className="btn btn-sm btn-danger cFontMono">-</button>
        </div>
      </div>
    );
  }
}

ProductCard.defaultProps = {
  name: 'no name',
  price: 9999,
  img: ''
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

export default ProductCard;
