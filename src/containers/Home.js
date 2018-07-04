import React from 'react'
import AsideLeft from '../components/AsideLeft'
import Une from '../components/Une'
import ChevronTitle from '../components/ChevronTitle'
import { Link } from '@reach/router'

import './RouterContainer.css'
import { Scrollbars } from 'react-custom-scrollbars'

const AsideLeftArticle = ({ article }) =>
  <Link to={`/article/${article.id}`}>
    <AsideLeft
      title={article.title}
      category={article.category}
      shortDescription={article.shortDescription}
    />
  </Link>

const Home = ({ articles }) => {
  const leftArticles = articles.slice(0, 5)
    .map(article => <AsideLeftArticle key={article.id} article={article} />)

  return (
    <div className="router-container">
      <div className="aside-left-container">
        <h1 className="filactu"><ChevronTitle ChevronColor="#226462" title="Fil d'actualité" /> </h1>
        <Scrollbars style={{ width: '16em', height: '37em' }} autoHide autoHideTimeout={500} autoHideDuration={500}>
          <div className="aside-left-articles">
            {leftArticles}
          </div>
        </Scrollbars>
      </div>
      <Une articles={articles} />
    </div>
  )
}

export default Home
