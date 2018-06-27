import React, { Component } from 'react';

import './SubMenu.css'

class QuiSommesNous extends Component {
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
          Qui sommes nous ?
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
                  <button className="SubMenuButton">Présentation</button>
                  <button className="SubMenuButton">Historique</button>
                  <button className="SubMenuButton">Nos actions</button>
                  <button className="SubMenuButton">Nos membres</button>
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

export default QuiSommesNous
