import React, { Component } from "react";
import { Consumer } from "../context";
import { NavLink, withRouter } from "react-router-dom";
import NavItem from "./NavItem";
import Icon from "./Icon"

class Navbar extends Component {
  state = {
    path: "/products/tragos/cervezas",
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.location.pathname !== this.props.location.pathname &&
      this.props.location.pathname !== "/purchase" &&
      this.props.location.pathname !== "/products" &&
      this.props.location.pathname !== "/ordersent"
    ) {
      this.setState({
        path: this.props.location.pathname
      });
    }
  }

  render() {
    const { path } = this.state;
    return (
      <Consumer>
        {value => {
          let totalQuantity = 0;
          let badgeAnimation = value.badgeAnimation ? "cNavbarBadgeMove" : null;

          for (let i = 0; i < value.quantityArray.length; i++) {
            totalQuantity += parseInt(value.quantityArray[i]);
          }

          return (
            <div>
              <nav className="navbar navbar-dark fixed-top bg-success cNavBar">
                <NavLink to={path}>
                  <div className="cNavbarLink_1 text-center py-2">
                    <img src="img/icons/grocery.png" alt="not found" />
                  </div>
                </NavLink>

                <NavLink to="/purchase">
                  <div className="cNavbarLink_2 text-center py-2">
                    <img src="img/icons/cart.png" alt="not found" />
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
                  className="navbar-toggler mr-2 cToogleButton"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Icon group="icons" symbol="menu" iconStyle="cMenuIcon" />
                </button>

                <div
                  className="collapse navbar-collapse mt-2"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav cScrollableMenu">
                    <NavItem
                      route="/products/tragos/todos"
                      name="Licores"
                      color="cNavbarItem_1"
                    />
                    <NavItem
                      route="/products/cigarros/todos"
                      name="Cigarros"
                      color="cNavbarItem_2"
                    />
                    <NavItem
                      route="/products/bebidas/todos"
                      name="Bebidas"
                      color="cNavbarItem_1"
                    />
                    <NavItem
                      route="/products/golosinas/todos"
                      name="Golosinas"
                      color="cNavbarItem_2"
                    />
                    <NavItem
                      route="/products/panetones/todos"
                      name="Panetones"
                      color="cNavbarItem_1"
                    />
                    <NavItem
                      route="/products/abarrotes/todos"
                      name="Abarrotes"
                      color="cNavbarItem_2"
                    />
                    <NavItem
                      route="/products/limpieza/todos"
                      name="Limpieza"
                      color="cNavbarItem_1"
                    />
                    <NavItem
                      route="/products/higiene/todos"
                      name="Higiene"
                      color="cNavbarItem_2"
                    />
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default withRouter(Navbar);
