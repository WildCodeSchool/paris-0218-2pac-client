import React, { Component } from 'react';

import './SubMenu.css'

class NotreVision extends Component {
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
          Notre vision
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
                  <button className="SubMenuButton">Orientations communes</button>
                  <button className="SubMenuButton">Bilan de l’actuelle PAC</button>
                  <button className="SubMenuButton">Système agro-alimentaire souhaité</button>
                  <button className="SubMenuButton">12 priorités pour la PAC post 2020</button>
                  <button className="SubMenuButton">PAAC souhaitée</button>
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

export default NotreVision
