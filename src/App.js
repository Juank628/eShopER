import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Provider from "./context";
import Navbar from "./components/Navbar.js";
import LiveChat from "./components/LiveChat";
import ProductsList from "./components/Views/ProductsList";
import PurchaseList from "./components/Views/PurchaseList";
import OrderConfirmation from "./components/Views/OrderConfirmation";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Provider>
          <div className="App">
            <Navbar />
            <div className="container h-100">
              <div className="row h-100">
                <Switch>
                  <Redirect exact from="/" to="/products/tragos/vinostintos" />
                </Switch>
                <Switch>
                  <Route path="/ordersent" component={OrderConfirmation} />
                  <Route path="/purchase" component={PurchaseList} />
                  <Route
                    path="/products/:family/:subfamily"
                    component={ProductsList}
                  />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
            <LiveChat />
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
