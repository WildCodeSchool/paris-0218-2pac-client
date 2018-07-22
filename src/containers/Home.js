import React from 'react'
import ChevronTitle from '../components/ChevronTitle'
import CategoryLabel from '../components/CategoryLabel'
import ArticleCard from '../components/ArticleCard'
import EventsCalendar from './EventsCalendar'
import { Link } from '@reach/router'
import './Home.css'

const byMostRecent = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)

const ActualityFeedArticle = ({ article }) =>
  <div className="actuality-feed-article">
    <CategoryLabel>{article.category}</CategoryLabel>
    <span className="actuality-feed-article-title">{article.title}</span>
    <p>{article.shortDescription}</p>
    <Link className="link" to={`/article/${article.id}`}>> Lire la suite</Link>
    <div className="divider" />
  </div>

const ActualityFeed = ({ articles }) => {
  const mostRecentArticles = articles
    .sort(byMostRecent)
    .slice(0, 5)
    .map(article => <ActualityFeedArticle key={article.id} article={article} />)

  return (
    <div>
      <h3><ChevronTitle ChevronColor="#226462" title="Fil d'actualités" /></h3>
      <div className="actuality-feed-articles">
        {mostRecentArticles}
      </div>
    </div>
  )
}

const Une = ({ articles }) => {
  const mostRecentArticles = articles.sort(byMostRecent)

  const mainArticle = mostRecentArticles[0]
  const sideArticles = mostRecentArticles.slice(1, 4)

  return (
    <div id="une-container">
      <h3><ChevronTitle title="à la une" /></h3>
      <div className="une-articles">
        <div className="une-left-column flex-3">
          { mainArticle ? <ArticleCard article={mainArticle} displayShortDescription /> : '' }
        </div>
        <div className="une-right-column flex-2">
          { sideArticles.map(article => <ArticleCard key={article.id} article={article} />) }
        </div>
      </div>
    </div>
  )
}

const Home = ({ articles }) =>
  <div id="home-container" className="flex row">
    <div className="container flex-1">
      <ActualityFeed articles={articles} />
    </div>
    <div className="flex-3 flex column">
      <div className="container">
        <Une articles={articles} />
      </div>
      <EventsCalendar events={articles.filter(article => article.categoryId === 4)} />
    </div>
  </div>

export default Home
