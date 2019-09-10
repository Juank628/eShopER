import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";
import Provider from "./context";
import Navbar from "./components/Navbar.js";
import ProductsList from "./components/Views/ProductsList";
import PurchaseList from "./components/Views/PurchaseList";
import OrderConfirmation from "./components/Views/OrderConfirmation";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Provider>
          <div className="App">
            <Navbar />
              <div className="container">
              <div className="row h-100">
                <Switch>
                  <Redirect exact from="/" to="/products/tragos/todos" />
                </Switch>
                <Switch>
                  <Route path="/ordersent" component={OrderConfirmation} />
                  <Route path="/purchase" component={PurchaseList} />
                  <Route
                    path="/products/:family/:product"
                    component={ProductsList}
                  />
                  <Route component={NotFound} />
                </Switch>
              </div>
              </div>
            </div>
          
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
