import React, { Component } from "react";

class ProductCard extends Component {
  state = {};

  remove = (name, price) => {
    console.log(name + price);
  };

  render() {
    const { name, price } = this.props.product;

    return (
      <div className="card col-5 col-sm-3 col-md-2 col-lg-2 col-xl-2 mx-2 mb-2">
        <img
          className="card-img-top"
          src={
            window.location.origin +
            "/img/tragos/vinos/Casa silva cabernet sauvignon carmenere 750ml.jpg"
          }
          alt="not found"
        />
        <div className="card-body px-0">
          <h5 className="card-title cCardTitle">{name}</h5>
          <h5 className="card-text cCardPrice">{price}</h5>
          <button className="btn btn-sm btn-success mr-2 cFontMono">+</button>
          <button
            className="btn btn-sm btn-danger cFontMono"
            onClick={this.remove.bind(this, name, price)}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
