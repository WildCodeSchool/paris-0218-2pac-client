import React from 'react'
import Button from './Button'
import './Nav.css'

class Nav extends React.Component {
  state= {
    item: ['Qui sommes nous ?', 'Comprendre la PAC', 'Notre vision', 'Agir', 'Presse'],
    menuHowWeAre: false,
    menuUnderstandPac: false
  }

  toggleList = (event) => {
    this.setState({menuHowWeAre: true})
    console.log(this.state.menuHowWeAre)
  }

  render () {
    return (
      <div className="Nav">
        {
          this.state.item.map((Item, i) => <Button onClick={(event) => this.toggleList()} key={i} className="Button Item">{Item}</Button>)
        }
      </div>
    )
  }
}

export default Nav
