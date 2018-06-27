import React, { Component } from 'react';

import './SubMenu.css'

class ComprendreLaPAC extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div>
        <button className="NavButton" onClick={this.showMenu}>
          Comprendre la PAC
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <div className="SubMenu">
                  <button className="SubMenuButton">L’ABC de la PAC</button>
                  <button className="SubMenuButton">La PAC, ça m’impacte ?</button>
                  <button className="SubMenuButton">La PAC 2015-2020</button>
                  <button className="SubMenuButton">La réforme de la PAC</button>
                  <button className="SubMenuButton">Chiffres-clés</button>
                  <button className="SubMenuButton">Sigles</button>
                </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default ComprendreLaPAC
