import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "READ_CARDS":
      state.apiQuery("products", action.y, action.z);
      break;
    default:
      console.log("NO ACTION");
  }
};

export class Provider extends Component {
  state = {
    products: [],

    apiQuery: (x, y, z) => {
      axios
        .get(
          `http://127.0.0.1/eShopBackend/eShopBackend/public/api/${x}${y}${z}`
        )
        .then(res => {
          this.setState({ products: res.data });
        });
    },

    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    this.state.apiQuery("products", "", "");
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
