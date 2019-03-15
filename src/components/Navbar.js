import React, { Component } from "react";
import { Consumer } from "../context";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {
    path: "/products/tragos/cervezas"
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
                  className="collapse navbar-collapse mt-2"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <div
                        className="nav-link dropdown-toggle nav-link cNavbarItem cNavbarItem_1 cUnselText"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Licores
                      </div>
                      <div
                        className="dropdown-menu py-0 my-0 border-0"
                        aria-labelledby="navbarDropdown"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                      >
                        <NavLink
                          to="/products/tragos/cervezas"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Cervezas
                        </NavLink>

                        <NavLink
                          to="/products/tragos/rones"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Rones
                        </NavLink>

                        <NavLink
                          to="/products/tragos/piscos"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Piscos
                        </NavLink>

                        <NavLink
                          to="/products/tragos/vinostintos"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Vinos tintos
                        </NavLink>

                        <NavLink
                          to="/products/tragos/vinosblancos"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Vinos blancos
                        </NavLink>

                        <NavLink
                          to="/products/tragos/otros"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Otros
                        </NavLink>
                      </div>
                    </li>

                    <li
                      className="nav-item"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                    >
                      <NavLink
                        to="/products/cigarros/todos"
                        className="nav-link cNavbarItem cNavbarItem_2 cUnselText"
                      >
                        Cigarros
                      </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                      <div
                        className="nav-link dropdown-toggle nav-link cNavbarItem cNavbarItem_1 cUnselText"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Bebidas
                      </div>
                      <div
                        className="dropdown-menu py-0 my-0 border-0"
                        aria-labelledby="navbarDropdown"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                      >
                        <NavLink
                          to="/products/bebidas/gaseosas"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Gaseosas
                        </NavLink>

                        <NavLink
                          to="/products/bebidas/jugos"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Jugos
                        </NavLink>

                        <NavLink
                          to="/products/bebidas/aguas"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Aguas
                        </NavLink>

                        <NavLink
                          to="/products/bebidas/energizantes"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Energizantes
                        </NavLink>

                        <NavLink
                          to="/products/bebidas/rehidratantes"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Rehidratantes
                        </NavLink>

                        <NavLink
                          to="/products/bebidas/otros"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Otros
                        </NavLink>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <div
                        className="nav-link dropdown-toggle nav-link cNavbarItem cNavbarItem_2 cUnselText"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Golosinas
                      </div>
                      <div
                        className="dropdown-menu py-0 my-0 border-0"
                        aria-labelledby="navbarDropdown"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                      >
                        <NavLink
                          to="/products/golosinas/chocolates"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Chocolates
                        </NavLink>

                        <NavLink
                          to="/products/golosinas/gomitas"
                          className="nav-link cNavbarSubItem cUnselText"
                        >
                          Gomitas
                        </NavLink>
                      </div>
                    </li>
                    <li
                      className="nav-item"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                    >
                      <NavLink
                        to="/products/panetones/NA"
                        className="nav-link cNavbarItem cNavbarItem_1 cUnselText"
                      >
                        Panetones
                      </NavLink>
                    </li>
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
