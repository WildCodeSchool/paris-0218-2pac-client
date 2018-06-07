import { createStore } from 'redux'

const initialState = {
  menu: undefined
}

const reducer = (state, action) => {
  if (action.type === 'SET_MENU') {
    return {
      menu: action.menu
    }
  }
  if (action.type === 'SET_OR_UNSET_MENU') {
    if (state.menu === action.menu) {
      return {
        menu: undefined
      }
    }
    return {
      menu: action.menu
    }
  }
  return state
}

const store = createStore(reducer, initialState)

const action = {
  showMenu: menuIndex => store.dispatch({
    type: 'SET_MENU',
    menu: menuIndex
  }),
  hideMenu: () => action.showMenu(undefined),
  showOrHideMenu: menuIndex => store.dispatch({
    type: 'SET_OR_UNSET_MENU',
    menu: menuIndex
  })
}

export {
  store,
  action
}
