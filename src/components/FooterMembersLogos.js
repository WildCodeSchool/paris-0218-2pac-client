import React, { Component } from 'react'
import './Footer.css'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import actionAid from './img/members_logo/action_aid.png'
import agter from './img/members_logo/agter.jpg'
import ape from './img/members_logo/ape.jpg'
import attac from './img/members_logo/attac.png'
import bioCons from './img/members_logo/bio_consomacteurs.png'
import cen from './img/members_logo/cen.jpg'
import cfsi from './img/members_logo/cfsi.png'
import civam from './img/members_logo/civam.png'
import ciwf from './img/members_logo/ciwf.jpg'
import cmr from './img/members_logo/cmr.jpg'
import commerceEq from './img/members_logo/commerce_equitable_france.jpg'
import conf from './img/members_logo/conf.png'
import fadear from './img/members_logo/fadear.png'
import fnab from './img/members_logo/fnab.png'
import fne from './img/members_logo/FNE.jpg'
import fnh from './img/members_logo/FNH.jpg'
import fnpnr from './img/members_logo/fnpnr.png'
import genCob from './img/members_logo/generations_cobayes.jpg'
import gf from './img/members_logo/gf.png'
import greenpeace from './img/members_logo/greenpeace.png'
import isf from './img/members_logo/isf.jpg'
import lpo from './img/members_logo/lpo.png'
import miramap from './img/members_logo/miramap.png'
import mrjc from './img/members_logo/mrjc.png'
import rac from './img/members_logo/rac.jpg'
import slowFood from './img/members_logo/slow_food.jpg'
import sol from './img/members_logo/sol.png'
import terreDeLiens from './img/members_logo/terre_de_liens.png'
import terreEtHumanisme from './img/members_logo/terre_et_humanisme.png'
import unaf from './img/members_logo/unaf.jpg'
import wwf from './img/members_logo/wwf.jpeg'

export default class FooterMembersLogos extends Component {
  state = {

    logos: [
      {src: actionAid, alt: 'member logo'},
      {src: agter, alt: 'member logo'},
      {src: ape, alt: 'member logo'},
      {src: attac, alt: 'member logo'},
      {src: bioCons, alt: 'member logo'},
      {src: cen, alt: 'member logo'},
      {src: cfsi, alt: 'member logo'},
      {src: civam, alt: 'member logo'},
      {src: ciwf, alt: 'member logo'},
      {src: cmr, alt: 'member logo'},
      {src: commerceEq, alt: 'member logo'},
      {src: conf, alt: 'member logo'},
      {src: sol, alt: 'member logo'},
      {src: fadear, alt: 'member logo'},
      {src: fnab, alt: 'member logo'},
      {src: fne, alt: 'member logo'},
      {src: mrjc, alt: 'member logo'},
      {src: fnh, alt: 'member logo'},
      {src: unaf, alt: 'member logo'},
      {src: wwf, alt: 'member logo'},
      {src: fnpnr, alt: 'member logo'},
      {src: genCob, alt: 'member logo'},
      {src: gf, alt: 'member logo'},
      {src: greenpeace, alt: 'member logo'},
      {src: rac, alt: 'member logo'},
      {src: isf, alt: 'member logo'},
      {src: lpo, alt: 'member logo'},
      {src: miramap, alt: 'member logo'},
      {src: slowFood, alt: 'member logo'},
      {src: terreDeLiens, alt: 'member logo'},
      {src: terreEtHumanisme, alt: 'member logo'}
    ]

  }

  render () {
    return (
      <div id="logo-container" className="logo-container">

        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 3, 750: 7, 900: 10}}
        >
          <Masonry>

            {this.state.logos.map((item, i) =>
              <div className='member-logo' key={i}>
                <img
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            )}

          </Masonry>
        </ResponsiveMasonry>

      </div>

    )
  }
}
