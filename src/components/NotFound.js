import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class NotFound extends Component {
  state = {
    redirect: false
  };

  componentDidMount = () => {
    this.timeout = this.timer();
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeout);
  };

  timer = () =>
    setTimeout(() => {
      console.log("init");
      this._isMounted = true;
      this.setState({ redirect: true });
    }, 5000);

  render() {
    if (this.state.redirect) {
      console.log("redirect");
      return <Redirect to="/products/tragos/cervezas" />;
    }
    return (
      <div className="col-12">
        <div className="text-center cNavbarSpace">
          <div>
            <img src="img/icons/warning.png" alt="Not found" />
          </div>
          <div>
            <h3 className="text-center mt-5">Página no encontrada</h3>
          </div>
        </div>
      </div>
    );
  }
}
