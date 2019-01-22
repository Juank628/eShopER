import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    products: []
  };

  apiQuery = () => {
    axios
      .get(`http://127.0.0.1/eShopBackend/eShopBackend/public/api/products`)
      .then(res => {
        //console.log(res.data);
        this.setState({ products: res.data });
      });
  };

  componentDidMount() {
    this.apiQuery();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
