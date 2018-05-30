import React from 'react'


class NavBar extends React.Component {

  render() {
    return(
      <div>
        <nav>
          <ul className="menu">
            <li className="menu-effect"><a className="menu-effect" href="#performances">Qui sommes nous ?</a></li>
            <li className="menu-effect"><a className="menu-effect" href="#about_us">Comprendre la PAC</a></li>
            <li className="menu-effect"><a className="menu-effect" href="#price">Notre vision</a></li>
            <li className="menu-effect"><a className="menu-effect" href="#contact_us">Agir</a></li>
            <li className="menu-effect"><a className="menu-effect" href="#contact_us">Presse</a></li>
            <li className="menu-effect"><a className="menu-effect" href="#contact_us">Content English</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
