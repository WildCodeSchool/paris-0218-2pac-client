import React, { Component } from 'react';

import './SubMenu.css'

class Presse extends Component {
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
          Presse
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
                  <button className="SubMenuButton">On parle de nous</button>
                  <button className="SubMenuButton">Communiqués de presse</button>
                  <button className="SubMenuButton">Kit presse</button>
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

export default Presse
