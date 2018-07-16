import React from 'react'
import AsideLeft from '../components/AsideLeft'
import Une from '../components/Une'
import ChevronTitle from '../components/ChevronTitle'
import { Link } from '@reach/router'
import { Scrollbars } from 'react-custom-scrollbars'
import './Home.css'

const AsideLeftArticle = ({ article }) =>
  <Link to={`/article/${article.id}`}>
    <AsideLeft
      title={article.title}
      category={article.category}
      shortDescription={article.shortDescription}
      eventDate={article.eventDate}
    />
  </Link>

const Home = ({ articles }) => {
  const leftArticles = articles
    .sort((a, b) => (new Date(b.createdAt)) - (new Date(a.createdAt)))
    .slice(0, 3)
    .map(article => <AsideLeftArticle key={article.id} article={article} />)

  return (
    <div id="home-container">
      <div className="flex-1">
        <h1><ChevronTitle ChevronColor="#226462" title="Fil d'actualité" /></h1>
        <Scrollbars style={{ width: '16em', height: '37em' }} autoHide autoHideTimeout={500} autoHideDuration={500}>
          {leftArticles}
        </Scrollbars>
      </div>
      <div className="flex-3">
        <Une articles={articles} />
      </div>
    </div>
  )
}

export default Home
