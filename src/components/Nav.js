import React from 'react'
import Button from './Button'
// import DropDownMenu from './DropDownMenu'
import './Nav.css'

const navItems = [
  {title: 'Qui sommes nous ?', children: ['Présentation', 'Historique', 'Nos actions', 'Nos membres']},
  {title: 'Comprendre la PAC', children: ['L’ABC de la PAC', 'La PAC, ça m’impacte ?', 'La PAC 2015-2020', 'La réforme de la PAC', 'Chiffres-clés', 'Sigles']},
  {title: 'Notre vision', children: ['Orientations communes', 'Bilan de l’actuelle PAC', 'Système agro-alimentaire souhaité', '12 priorités pour la PAC post 2020', 'PAAC souhaitée']},
  {title: 'Agir', children: ['Interpeller ses représentants', 'Devenir membre', 'Participer à un événement (articles ‘evènement’)']},
  {title: 'Presse', children: ['On parle de nous (articles ‘presse’)', 'Communiqués de presse (articles ‘communiqués de presse’)', 'Kit presse']}
]

class Nav extends React.Component {
  constructor() {
    super()
    this.showSubMenu = this.showSubMenu.bind(this)
  }

  state= {
    showSubMenu: false,
    index: undefined
  }


  // change le state
  showSubMenu(i) {
    console.log('test')
    this.setState({
      // showSubMenu: !this.state.showSubMenu,
      index: i
    })
  }

  // hideMenu(i) {
  //   console.log('test')
  //   this.setState({
  //     // showSubMenu: !this.state.showSubMenu,
  //     index: undefined
  //   })
  // }

  componentDidMount() {
    document.removeEventListener('click', this.showSubMenu(undefined))
  }

// affiche le contenu
  toggleList = (event, i) => {
    if (navItems[i].children) {

      const sub = navItems[i].children.map(e =>
          <li key={e.toString()}>{e}</li>)

      return(
        <ul>{sub}</ul>)
    }
  }

  render () {
    const items = navItems.map((item, i) =>
      <Button
        onClick={(event) => this.showSubMenu(i)}
        // onMouseOut={(event) => this.hideMenu(i)}
        key={i}
        className="Button Item">
        {item.title}
      </Button>)

    // const subMenu = this.state.showSubMenu ? (
    //     <div>{this.toggleList({children: navItems.children}, this.state.index)}</div>
    //   ) : ''

    const subMenu = this.state.index === undefined ? '' :
    <div>{this.toggleList({children: navItems.children}, this.state.index)}</div>

    return (
      <div>
        <div className="Nav">
          {items}
        </div>
        <div>
          {subMenu}
        </div>
      </div>
    )
  }
}

export default Nav
