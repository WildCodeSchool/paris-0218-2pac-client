import React, { Component } from 'react'
import './css/AsideRight.css'

class AsideRight extends Component {

  render(){
         return(
          <div>
              <button className="icon-button-globe"><span ><i className="fal fa-globe"></i></span>Actualités</button>
              <button className="icon-button-book"><span ><i className="fal fa-book-open"></i></span>Ressources</button>
              <button className="icon-button-user"><span ><i className="fal fa-user-alt"></i></span>Contacts</button>
              <button className="icon-button-rss"><span ><i className="fal fa-rss"></i></span>Rester connecté</button>
            <div className="netwNameork">
              <a href="https://twitter.com/pouruneautrepac?lang=fr"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="far fa-print"></i></a>
              <a href="#"><i className="far fa-envelope"></i></a>
            </div>
          </div>
 )
  }
 }
  export default AsideRight;
