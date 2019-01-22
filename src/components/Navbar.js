import React, { Component } from 'react'

class Navbar extends Component {

  state={
    showMenu: true
  }

  cartPressed=()=>{
    this.props.cartPressedHandler();
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    let {showMenu} = this.state;

    return (
      <nav className="navbar navbar-dark fixed-top cBgBlack cNavBarHeight">

        {showMenu ? (
          <img onClick={this.cartPressed} className="mr-auto" src={window.location.origin + "/img/icons/shopping-cart-white.png"} alt="not found"></img>
        ):(
          <img onClick={this.cartPressed} className="mr-auto" src={window.location.origin + "/img/icons/left-arrow-key-white.png"} alt="not found"></img>
        )}
        
        { showMenu ? (

          <React.Fragment>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown cNavBarLicores">
                <div className="nav-link dropdown-toggle text-center" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="cFontColorWhite">Licores</span>
                </div>
                <div className="dropdown-menu cBlackTransparent text-center" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item cFontColorWhite" href="localhost:3000">Cervezas</a>
                  <a className="dropdown-item cFontColorWhite" href="localhost:3000">Rones</a>
                  <a className="dropdown-item cFontColorWhite" href="localhost:3000">Piscos</a>
                  <a className="dropdown-item cFontColorWhite" href="localhost:3000">Vinos</a>
                  <a className="dropdown-item cFontColorWhite" href="localhost:3000">Otros</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item cFontColorWhite" href="localhost:3000">Todos</a>
                </div>
              </li>

              <li className="nav-item cNavBarCigarros">
                <div className="nav-link text-center cBlackTransparent">
                  <span className="cFontColorWhite">Cigarros</span>
                </div>
              </li>

              <li className="nav-item cNavBarTapas">
                <div className="nav-link text-center cBlackTransparent">
                  <span className="cFontColorWhite">Tapas</span>
                </div>
              </li>
            </ul>
          </div>

          </React.Fragment>

        ): null }
        
      </nav>
    )
  }
}



export default Navbar;