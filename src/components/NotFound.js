import React, { Component } from "react";

export default class NotFound extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/products/tragos/cervezas");
    }, 5000);
  }
  render() {
    return (
      <div className="my-auto h-50 ">
        <img src="img/icons/warning.png" alt="Not found" />
        <h3 className="text-center mt-5">Página no encontrada</h3>
      </div>
    );
  }
}
