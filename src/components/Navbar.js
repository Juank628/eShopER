import React, { Component } from "react";
import { Consumer } from "../context";
import NavbarItem from "./NavbarItem";
import NavbarSubItem from "./NavbarSubItem";
import ProductsList from "./Views/ProductsList";
import PurchaseList from "./Views/PurchaseList";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          let totalQuantity = 0;
          let badgeAnimation = value.badgeAnimation ? "cNavbarBadgeMove" : null;

          for (let i = 0; i < value.quantityArray.length; i++) {
            totalQuantity += parseInt(value.quantityArray[i]);
          }

          return (
            <HashRouter>
              <div>
                <nav className="navbar navbar-dark fixed-top bg-success cNavBarHeight">
                  <NavLink to="/products">
                    <div className="cNavbarLink_1 text-center py-2">
                      <img src="img/icons/grocery.png" />
                    </div>
                  </NavLink>

                  <NavLink to="/purchase">
                    <div className="cNavbarLink_2 text-center py-2">
                      <img src="img/icons/cart.png" />
                      {totalQuantity > 0 ? (
                        <span
                          className={
                            "badge badge-pill badge-danger cNavbarBadge " +
                            badgeAnimation
                          }
                        >
                          {totalQuantity}
                        </span>
                      ) : null}
                    </div>
                  </NavLink>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown cNavBarLicores">
                        <div
                          className="nav-link dropdown-toggle text-center"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="cNavbarItem">Licores</span>
                        </div>
                        <div
                          className="dropdown-menu cBlackTransparent text-center"
                          aria-labelledby="navbarDropdown"
                        >
                          <NavbarSubItem
                            itemName="Cervezas"
                            onClick={value.apiQuery.bind(
                              this,
                              "/products",
                              "/tragos",
                              "/cervezas"
                            )}
                          />
                          <NavbarSubItem
                            itemName="Rones"
                            onClick={value.apiQuery.bind(
                              this,
                              "/products",
                              "/tragos",
                              "/rones"
                            )}
                          />
                          <NavbarSubItem
                            itemName="Piscos"
                            onClick={value.apiQuery.bind(
                              this,
                              "/products",
                              "/tragos",
                              "/piscos"
                            )}
                          />
                          <NavbarSubItem
                            itemName="Vinos tintos"
                            onClick={value.apiQuery.bind(
                              this,
                              "/products",
                              "/tragos",
                              "/vinostintos"
                            )}
                          />
                          <NavbarSubItem
                            itemName="Vinos blancos"
                            onClick={value.apiQuery.bind(
                              this,
                              "/products",
                              "/tragos",
                              "/vinosblancos"
                            )}
                          />
                          <NavbarSubItem
                            itemName="Otros"
                            onClick={value.apiQuery.bind(
                              this,
                              "/products",
                              "/tragos",
                              "/otros"
                            )}
                          />
                          <div className="dropdown-divider" />
                          <NavbarSubItem
                            itemName="Todos"
                            onClick={value.apiQuery.bind(
                              this,
                              "/products",
                              "/tragos",
                              ""
                            )}
                          />
                        </div>
                      </li>

                      <NavLink to="/products/cigarros/todos">
                        <NavbarItem
                          itemName="Cigarros"
                          itemClass="cNavBarCigarros"
                        />
                      </NavLink>

                      <NavbarItem
                        itemName="Tapas"
                        itemClass="cNavBarTapas"
                        onClick={value.apiQuery.bind(
                          this,
                          "/products",
                          "/tapas",
                          ""
                        )}
                      />
                    </ul>
                  </div>
                </nav>
                <div>
                  <Route exact path="/purchase" component={PurchaseList} />
                  <Route exact path="/products/:family/:subfamily" component={ProductsList} />
                </div>
              </div>
            </HashRouter>
          );
        }}
      </Consumer>
    );
  }
}

export default Navbar;
