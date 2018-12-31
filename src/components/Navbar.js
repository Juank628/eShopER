import React, { Component } from 'react'

class Navbar extends Component {

  cartPressed=()=>this.props.cartPressedHandler();
  

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top cBgBlack">
        <img onClick={this.cartPressed} className="mr-auto" src={window.location.origin + "/img/icons/shopping-cart-white.png"} alt="not found"></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="localhost:3000" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Licores</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="localhost:3000">Cervezas</a>
                <a className="dropdown-item" href="localhost:3000">Rones</a>
                <a className="dropdown-item" href="localhost:3000">Piscos</a>
                <a className="dropdown-item" href="localhost:3000">Vinos</a>
                <a className="dropdown-item" href="localhost:3000">Otros</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="localhost:3000">Todos</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}



export default Navbar;