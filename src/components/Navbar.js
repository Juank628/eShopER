import React, { Component } from "react";
import { Consumer } from "../context";
import NavbarItem from "./NavbarItem";
import NavbarSubItem from "./NavbarSubItem";

class Navbar extends Component {

  cartPressed = (dispatch) => {
    dispatch({type: "SHOW_PURCHASE_LIST"});
  };

  linkPressed = (dispatch, family, subfamily) => {
    dispatch({ type: "READ_CARDS", x: "/products", y: family, z: subfamily });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          let totalQuantity = 0;
          let badgeAnimation = value.badgeAnimation ? "cNavBarBadge" : null;

          for (let i = 0; i < value.quantityArray.length; i++) {
            totalQuantity = totalQuantity + parseInt(value.quantityArray[i]);
          }

          return (
            <nav className="navbar navbar-dark fixed-top cBgBlack cNavBarHeight">
              <div>
                <img
                  onClick={this.cartPressed.bind(this, dispatch)}
                  className="mr-auto"
                  src={
                    !value.showPurchaseList
                      ? window.location.origin +
                        "/img/icons/shopping-cart-white.png"
                      : window.location.origin +
                        "/img/icons/left-arrow-key-white.png"
                  }
                  alt="not found"
                />
              </div>

              {!value.showPurchaseList && totalQuantity > 0 ? (
                <span
                  className={
                    "badge mr-auto badge-pill badge-danger mt-n3 ml-n1 " +
                    badgeAnimation
                  }
                  onClick={this.cartPressed}
                >
                  {totalQuantity}
                </span>
              ) : null}

              {!value.showPurchaseList ? (
                <React.Fragment>
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
                          <span className="cFontColorWhite">Licores</span>
                        </div>
                        <div
                          className="dropdown-menu cBlackTransparent text-center"
                          aria-labelledby="navbarDropdown"
                        >
                          <NavbarSubItem
                            itemName="Cervezas"
                            onClick={this.linkPressed.bind(
                              this,
                              dispatch,
                              "/tragos",
                              "/cervezas"
                            )}
                          />
                          <NavbarSubItem
                            itemName="Rones"
                            onClick={this.linkPressed.bind(
                              this,
                              dispatch,
                              "/tragos",
                              "/rones"
                            )}
                          />
                          <NavbarSubItem
                            itemName="Piscos"
                            onClick={this.linkPressed.bind(
                              this,
                              dispatch,
                              "/tragos",
                              "/piscos"
                            )}
                          />
                          <NavbarSubItem
                            itemName="Vinos"
                            onClick={this.linkPressed.bind(
                              this,
                              dispatch,
                              "/tragos",
                              "/vinos"
                            )}
                          />
                          <NavbarSubItem
                            itemName="Otros"
                            onClick={this.linkPressed.bind(
                              this,
                              dispatch,
                              "/tragos",
                              "/otros"
                            )}
                          />
                          <div className="dropdown-divider" />
                          <NavbarSubItem
                            itemName="Todos"
                            onClick={this.linkPressed.bind(
                              this,
                              dispatch,
                              "/tragos",
                              ""
                            )}
                          />
                        </div>
                      </li>

                      <NavbarItem
                        itemName="Cigarros"
                        itemClass="cNavBarCigarros"
                        onClick={this.linkPressed.bind(
                          this,
                          dispatch,
                          "/cigarros",
                          ""
                        )}
                      />
                      <NavbarItem
                        itemName="Tapas"
                        itemClass="cNavBarTapas"
                        onClick={this.linkPressed.bind(
                          this,
                          dispatch,
                          "/tapas",
                          ""
                        )}
                      />
                    </ul>
                  </div>
                </React.Fragment>
              ) : null}
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default Navbar;
