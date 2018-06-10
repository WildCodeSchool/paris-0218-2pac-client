import React from 'react'
import './Nav.css'

const navItems = [
  {title: 'Qui sommes nous ?', children: ['Présentation', 'Historique', 'Nos actions', 'Nos membres']},
  {title: 'Comprendre la PAC', children: ['L’ABC de la PAC', 'La PAC, ça m’impacte ?', 'La PAC 2015-2020', 'La réforme de la PAC', 'Chiffres-clés', 'Sigles']},
  {title: 'Notre vision', children: []},
  {title: 'Agir', children: []},
  {title: 'Presse', children: []}
]

class Nav extends React.Component {
  toggleList = (event, i) => {
    if (navItems[i].children) {
      navItems[i].children.map(e => console.log(e))
    }
  }

  render () {
    const items = navItems.map((item, i) =>
      <button
        onClick={(event) => this.toggleList(event, i)}
        key={i}
        className="button Item">
        {item.title}
      </button>)

    return (
      <div className="Nav">
        {items}
      </div>
    )
  }
}

export default Nav
