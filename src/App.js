import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Provider } from "./context";
import Navbar from "./components/Navbar.js";
import LiveChat from "./components/LiveChat";

class App extends Component {

  render() {
    return (
      <Provider>
        <div className="App">
          <Navbar />
          <LiveChat />
        </div>
      </Provider>
    );
  }
}

export default App;
