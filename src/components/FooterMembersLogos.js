import React from 'react'
import './Footer.css'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import actionAid from './../img/logos/action_aid.png'
import agter from './../img/logos/agter.jpg'
import ape from './../img/logos/ape.jpg'
import attac from './../img/logos/attac.png'
import bioCons from './../img/logos/bio_consomacteurs.png'
import cen from './../img/logos/cen.jpg'
import cfsi from './../img/logos/cfsi.png'
import civam from './../img/logos/civam.png'
import ciwf from './../img/logos/ciwf.jpg'
import cmr from './../img/logos/cmr.jpg'
import commerceEq from './../img/logos/commerce_equitable_france.jpg'
import conf from './../img/logos/conf.png'
import fadear from './../img/logos/fadear.png'
import fnab from './../img/logos/fnab.png'
import fne from './../img/logos/FNE.jpg'
import fnh from './../img/logos/FNH.jpg'
import fnpnr from './../img/logos/fnpnr.png'
import genCob from './../img/logos/generations_cobayes.jpg'
import gf from './../img/logos/gf.png'
import greenpeace from './../img/logos/greenpeace.png'
import isf from './../img/logos/isf.jpg'
import lpo from './../img/logos/lpo.png'
import miramap from './../img/logos/miramap.png'
import mrjc from './../img/logos/mrjc.png'
import rac from './../img/logos/rac.jpg'
import slowFood from './../img/logos/slow_food.jpg'
import sol from './../img/logos/sol.png'
import terreDeLiens from './../img/logos/terre_de_liens.png'
import terreEtHumanisme from './../img/logos/terre_et_humanisme.png'
import unaf from './../img/logos/unaf.jpg'
import wwf from './../img/logos/wwf.jpeg'

const logos = [
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

const FooterMembersLogos = () => {
  return (

    <div id="logo-container" className="logo-container">
      <ResponsiveMasonry
        columnsCountBreakPoints={{350: 3, 750: 7, 900: 10}}
      >
        <Masonry>
          {logos.map((item, i) =>
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

export default FooterMembersLogos
