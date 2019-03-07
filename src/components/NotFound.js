import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class NotFound extends Component {

  state={
    redirect: false
  }

  componentDidMount = () => {
    this.timeout = this.timer();
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeout);
  };

  timer = () =>
    setTimeout(() => {
      console.log('init')
      this._isMounted = true;
      const { redirect } = this.state;
      this.setState({ redirect: true })
    }, 5000);

  render() {
    if (this.state.redirect) {
      console.log('redirect')
      return <Redirect to="/products/tragos/cervezas" />;
    }
    return (
      <div className="my-auto h-50 ">
        <img src="img/icons/warning.png" alt="Not found" />
        <h3 className="text-center mt-5">Página no encontrada</h3>
      </div>
    );
  }
}
