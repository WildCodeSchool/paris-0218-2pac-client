import React from 'react'
import Button from './Button'
import './Nav.css'
import { action } from '../store'

const navItems = [
  {title: 'Qui sommes nous ?', children: ['Présentation', 'Historique', 'Nos actions', 'Nos membres']},
  {title: 'Comprendre la PAC', children: ['L’ABC de la PAC', 'La PAC, ça m’impacte ?', 'La PAC 2015-2020', 'La réforme de la PAC', 'Chiffres-clés', 'Sigles']},
  {title: 'Notre vision', children: ['Orientations communes', 'Bilan de l’actuelle PAC', 'Système agro-alimentaire souhaité', '12 priorités pour la PAC post 2020', 'PAAC souhaitée']},
  {title: 'Agir', children: ['Interpeller ses représentants', 'Devenir membre', 'Participer à un événement (articles ‘evènement’)']},
  {title: 'Presse', children: ['On parle de nous (articles ‘presse’)', 'Communiqués de presse (articles ‘communiqués de presse’)', 'Kit presse']}
]

const showMenuList = (menuIndex) => {
  const selectedMenu = navItems[menuIndex]
  if (!selectedMenu || !selectedMenu.children) return
  const menuList = navItems[menuIndex].children
    .map(e => <li key={e}>{e}</li>)

  return <ul className="subMenuList">{menuList}</ul>
}


const NavItem = ({ menuIndex, title, menu }) =>
  <div className='pouet' key={String(menuIndex)}>
    <Button

      onClick={() => action.showOrHideMenu(menuIndex)}
      // onBlur={action.hideMenu}
      className="Button Item">
      {title}
    </Button>
    {menuIndex === menu ? showMenuList(menuIndex) : null}
  </div>


const Nav = ({ menu }) => {
  const items = navItems.map((item, i) => NavItem({
    menuIndex: i,
    title: item.title,
    menu: menu
  }))

  const subMenu = showMenuList(menu)
  console.log(menu)
  return (
    <div>
      <div className="Nav">
        {items}
      </div>
    </div>
  )
}

export default Nav
