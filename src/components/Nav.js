import React from 'react'
import Button from './Button'
import './Nav.css'

class Nav extends React.Component {
  // state= {
  //   item: ['Qui sommes nous ?', 'Comprendre la PAC', 'Notre vision', 'Agir', 'Presse'],
  //   menuHowWeAre: false,
  //   menuUnderstandPac: false
  // }

  state = {
    navItems:
    [
      {titre: 'Qui sommes nous ?', children: ['Présentation', 'Historique', 'Nos actions', 'Nos membres']},
      {titre: 'Comprendre la PAC', children: ['L’ABC de la PAC', 'La PAC, ça m’impacte ?', 'La PAC 2015-2020', 'La réforme de la PAC', 'Chiffres-clés', 'Sigles']},
      {titre: 'Notre vision', children: []},
      {titre: 'Agir', children: []},
      {titre: 'Presse', children: []}
    ]
  }

  toggleList = (event, i) => {
    if (this.state.navItems[i].children) {
      this.state.navItems[i].children.map(e => console.log(e))
    }
  }

  render () {
    return (
      <div className="Nav">
        {
          this.state.navItems.map((Item, i) =>
            <Button onClick={(event) => this.toggleList(event, i)}
              key={i} className="Button Item">{Item.titre}
            </Button>)
        }
      </div>
    )
  }
}

export default Nav
