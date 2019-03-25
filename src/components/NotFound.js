import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Icon from "./Icon";

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
      this._isMounted = true;
      this.setState({ redirect: true });
    }, 5000);

  render() {
    if (this.state.redirect) {
      return <Redirect to="/products/tragos/todos" />;
    }
    return (
      <div className="col-12 cVerticalCenter">
        <div className="text-center cNavbarSpace">
          <div>
            <p className="text-center text-secondary">Página no encontrada</p>
          </div>
          <Icon group="icons" symbol="errorNoFill" iconStyle="cNotFoundIcon" />
        </div>
      </div>
    );
  }
}
