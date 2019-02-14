import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Provider } from "./context";
import Navbar from "./components/Navbar.js";
import MainView from "./components/MainView";
import LiveChat from "./components/LiveChat";

class App extends Component {
  state = {
    showPurchaseList: false,
  };

  cartPressed = () => {
    this.setState({
      showPurchaseList: !this.state.showPurchaseList
    });
  };

  render() {
    const { showPurchaseList } = this.state;

    return (
      <Provider>
        <div className="App">
          <Navbar cartPressedHandler={this.cartPressed} />
          <MainView showPurchaseList={showPurchaseList} />
          <LiveChat />
        </div>
      </Provider>
    );
  }
}

export default App;
