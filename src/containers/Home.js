import React from 'react'
import AsideLeft from '../components/AsideLeft'
import SideBar from '../components/SideBar'
import Une from '../components/Une'
import { Link } from '@reach/router'

import './RouterContainer.css'

const Home = (props) => {
  const data = props.data

  return (

    <div className="router-container">
      <div className="aside-left-container">
        <h1 className="filactu"><span>></span>FIL D'ACTUALITÉS</h1>
        {data.slice(0, 3).map(article =>
          <Link to={`/article/${article.id}`}>
            <AsideLeft
              key={article.id}
              title={article.title}
              categoryId={article.name}
              shortDescription={article.shortDescription}
            />
          </Link>
        )}
      </div>
      <Une uneData={props.uneData} />
    </div>

  )
}

export default Home
