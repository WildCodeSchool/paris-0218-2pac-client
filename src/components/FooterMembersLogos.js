import React from 'react'
import './Footer.css'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import logos08 from './../img/logos/logos-08.png'
import logos30 from './../img/logos/logos-30.png'
import logos07 from './../img/logos/logos-07.png'
import logos25 from './../img/logos/logos-25.png'
import logos21 from './../img/logos/logos-21.png'
import logos13 from './../img/logos/logos-13.png'
import logos29 from './../img/logos/logos-29.png'
import logos16 from './../img/logos/logos-16.png'
import logos27 from './../img/logos/logos-27.png'
import logos31 from './../img/logos/logos-31.png'
import logos11 from './../img/logos/logos-11.png'
import logos05 from './../img/logos/logos-05.png'
import logos03 from './../img/logos/logos-03.png'
import logos14 from './../img/logos/logos-14.png'
import logos09 from './../img/logos/logos-09.png'
import logos15 from './../img/logos/logos-15.png'
import logos01 from './../img/logos/logos-01.png'
import logos17 from './../img/logos/logos-17.png'
import logos18 from './../img/logos/logos-18.png'
import logos06 from './../img/logos/logos-06.png'
import logos23 from './../img/logos/logos-23.png'
import logos26 from './../img/logos/logos-26.png'
import logos12 from './../img/logos/logos-12.png'
import logos04 from './../img/logos/logos-04.png'
import logos28 from './../img/logos/logos-28.png'
import logos20 from './../img/logos/logos-20.png'
import logos19 from './../img/logos/logos-19.png'
import logos24 from './../img/logos/logos-24.png'
import logos22 from './../img/logos/logos-22.png'
import logos02 from './../img/logos/logos-02.png'
import logos10 from './../img/logos/logos-10.png'

const logos = [
  { src: logos08, alt: 'logos08', title: 'logos08' },
  { src: logos07, alt: 'logos07', title: 'logos07' },
  { src: logos30, alt: 'logos30', title: 'logos30' },
  { src: logos21, alt: 'logos21', title: 'logos21' },
  { src: logos13, alt: 'logos13', title: 'logos13' },
  { src: logos29, alt: 'logos29', title: 'logos29' },
  { src: logos19, alt: 'logos19', title: 'logos19' },
  { src: logos16, alt: 'logos16', title: 'logos16' },
  { src: logos27, alt: 'logos27', title: 'logos27' },
  { src: logos31, alt: 'logos31', title: 'logos31' },
  { src: logos11, alt: 'logos11', title: 'logos11' },
  { src: logos05, alt: 'logos05', title: 'logos05' },
  { src: logos03, alt: 'logos03', title: 'logos03' },
  { src: logos14, alt: 'logos14', title: 'logos14' },
  { src: logos09, alt: 'logos09', title: 'logos09' },
  { src: logos22, alt: 'logos22', title: 'logos22' },
  { src: logos15, alt: 'logos15', title: 'logos15' },
  { src: logos26, alt: 'logos26', title: 'logos26' },
  { src: logos12, alt: 'logos12', title: 'logos12' },
  { src: logos01, alt: 'logos01', title: 'logos01' },
  { src: logos20, alt: 'logos20', title: 'logos20' },
  { src: logos04, alt: 'logos04', title: 'logos04' },
  { src: logos24, alt: 'logos24', title: 'logos24' },
  { src: logos17, alt: 'logos17', title: 'logos17' },
  { src: logos02, alt: 'logos02', title: 'logos02' },
  { src: logos25, alt: 'logos25', title: 'logos25' },
  { src: logos28, alt: 'logos28', title: 'logos28' },
  { src: logos23, alt: 'logos23', title: 'logos23' },
  { src: logos18, alt: 'logos18', title: 'logos18' },
  { src: logos06, alt: 'logos06', title: 'logos06' },
  { src: logos10, alt: 'logos10', title: 'logos10' }

]

const FooterMembersLogos = () => {
  return (

    <div id="logo-container" className="logo-container">
      <ResponsiveMasonry
        columnsCountBreakPoints={{100: 3, 350: 8, 750: 9, 900: 10}}
      >
        <Masonry>
          {logos.map((item, i) =>
            <div className='member-logo' key={i}>
              <img
                src={item.src}
                title={item.title}
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
