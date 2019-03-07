import React, { Component } from "react";
import { Consumer } from "../context";
import NavbarItem from "./NavbarItem";
import NavbarSubItem from "./NavbarSubItem";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {
    path: "/products/tragos/cervezas"
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.location.pathname !== this.props.location.pathname &&
      this.props.location.pathname !== "/purchase" &&
      this.props.location.pathname !== "/products"
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
              <nav className="navbar navbar-dark fixed-top bg-success cNavBarHeight">
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
                        <NavLink to="/products/tragos/cervezas">
                          <NavbarSubItem itemName="Cervezas" />
                        </NavLink>

                        <NavLink to="/products/tragos/rones">
                          <NavbarSubItem itemName="Rones" />
                        </NavLink>

                        <NavLink to="/products/tragos/piscos">
                          <NavbarSubItem itemName="Piscos" />
                        </NavLink>

                        <NavLink to="/products/tragos/vinostintos">
                          <NavbarSubItem itemName="Vinos tintos" />
                        </NavLink>

                        <NavLink to="/products/tragos/vinosblancos">
                          <NavbarSubItem itemName="Vinos blancos" />
                        </NavLink>

                        <NavLink to="/products/tragos/otros">
                          <NavbarSubItem itemName="Otros" />
                        </NavLink>

                        <NavLink to="/products/tragos/todos">
                          <NavbarSubItem itemName="Todos" />
                        </NavLink>
                      </div>
                    </li>

                    <NavLink to="/products/cigarros/todos">
                      <NavbarItem
                        itemName="Cigarros"
                        itemClass="cNavBarCigarros"
                      />
                    </NavLink>

                    <NavbarItem itemName="Tapas" itemClass="cNavBarTapas" />
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
