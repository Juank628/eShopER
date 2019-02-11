import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Provider } from "./context";
import MainView from "./components/MainView";
import OrderSent from "./components/pages/OrderSent"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route exact path="/sent" component={OrderSent} />
          </Switch>  
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
