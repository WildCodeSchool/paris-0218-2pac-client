import React from 'react'
import AsideLeft from '../components/AsideLeft'
import Une from '../components/Une'
import ChevronTitle from '../components/ChevronTitle'
import { Link } from '@reach/router'

import './RouterContainer.css'
import { Scrollbars } from 'react-custom-scrollbars'

const Home = (props) => {
  const data = props.data

  return (

    <div className="router-container">

      <div className="aside-left-container">
        <h1 className="filactu"><ChevronTitle ChevronColor="#226462" title="Fil d'actualité" /> </h1>
        <Scrollbars style={{ width: '20em', height: '37em' }} autoHide autoHideTimeout={500} autoHideDuration={500}>
          <div className="aside-left-articles">
            {data.slice(0, 5).map(article =>
              <Link to={`/article/${article.id}`}>
                <AsideLeft
                  key={article.id}
                  title={article.title}
                  category={article.categoryId}
                  shortDescription={article.shortDescription}
                />
              </Link>
            )}
          </div>
        </Scrollbars>
      </div>

      <Une uneData={props.uneData} />
    </div>

  )
}

export default Home
