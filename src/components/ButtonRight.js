import React, { Component } from 'react'
import './ButtonRight.css'

class ButtonRight extends Component {
  render () {
    return (
      <div className="buttons">
        <button className="icon-button-globe"><span ><i className="fal fa-globe"></i></span>Actualités</button>
        <button className="icon-button-book"><span ><i className="fal fa-book-open"></i></span>Ressources</button>
        <button className="icon-button-user"><span ><i className="fal fa-user-alt"></i></span>Contacts</button>
        <button className="icon-button-rss"><span ><i className="fal fa-rss"></i></span>Rester connecté</button>
        <div className="network">
          <button><a href="https://twitter.com/pouruneautrepac?lang=fr"><i className="fab fa-twitter"></i></a></button>
        </div>
      </div>
    )
  }
}
export default ButtonRight
