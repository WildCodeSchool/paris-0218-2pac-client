import React from 'react'
import AsideLeft from '../components/AsideLeft'
import SideBar from '../components/SideBar'
import Une from '../components/Une'
import './RouterContainer.css'

const Home = (props) => {

  const data = props.data

  return (

    <div className="router-container">
      <div className="aside-left-container">
        {data.slice(0, 5).map(article =>
        <AsideLeft
          key={article.id}
          title={article.title}
          categoryId={article.name}
          shortDescription={article.shortDescription}
          />
          )}
      </div>
      <Une uneData={props.uneData} />
    </div>

  )
}

export default Home
