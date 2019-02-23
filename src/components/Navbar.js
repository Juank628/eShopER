import React, { Component } from "react";
import { Consumer } from "../context";
import NavbarItem from "./NavbarItem";
import NavbarSubItem from "./NavbarSubItem";

class Navbar extends Component {
  state = {
    showMenu: true
  };

  cartPressed = () => {
    this.props.cartPressedHandler();
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    let { showMenu } = this.state;

    return (
      <Consumer>
        {value => {
          let totalQuantity = 0;
          let badgeAnimation = value.badgeAnimation ? "cNavBarBadge" : null;

          for (let i = 0; i < value.quantityArray.length; i++) {
            totalQuantity = totalQuantity + parseInt(value.quantityArray[i]);
          }

          return (
            <nav className="navbar navbar-dark fixed-top bg-success cNavBarHeight">
              {!value.orderSent ? (
                <div>
                  <img
                    onClick={this.cartPressed}
                    className="mr-auto"
                    src={
                      showMenu
                        ? 
                          "img/icons/shopping-cart-white.png"
                        :
                          "img/icons/left-arrow-key-white.png"
                    }
                    alt="not found"
                  />
                </div>
              ) : null}

              {showMenu && totalQuantity > 0 && !value.orderSent ? (
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

              {showMenu && !value.orderSent ? (
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
                            itemName="Vinos"
                            onClick={value.apiQuery.bind(
                              this,
                              "/products",
                              "/tragos",
                              "/vinos"
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

                      <NavbarItem
                        itemName="Cigarros"
                        itemClass="cNavBarCigarros"
                        onClick={value.apiQuery.bind(
                          this,
                          "/products",
                          "/cigarros",
                          ""
                        )}
                      />
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
