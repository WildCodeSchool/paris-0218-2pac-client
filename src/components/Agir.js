import React, { Component } from 'react';

import './SubMenu.css'

class Agir extends Component {
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
          Agir
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
                  <button className="SubMenuButton">Interpeller ses représentants</button>
                  <button className="SubMenuButton">Devenir membre</button>
                  <button className="SubMenuButton">Participer à un événeme</button>
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

export default Agir
