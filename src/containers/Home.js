import React from 'react'
import ChevronTitle from '../components/ChevronTitle'
import CategoryLabel from '../components/CategoryLabel'
import ArticleCard from '../components/ArticleCard'
import EventsCalendar from './EventsCalendar'
import { Link } from '@reach/router'
import './Home.css'

const staredThenMostRecent = (a, b) => {
  if (a.isStared === b.isStared) {
    return new Date(b.createdAt) - new Date(a.createdAt)
  }

  return a.isStared ? -1 : b.isStared ? 1 : 0
}
const byMostRecent = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)

const isFromCategoryEvent = article => article.categoryId === 4
const isFromCategoryActuality = article => article.categoryId === 3
const isFromCategoryPresseOrArticle = article => article.categoryId === 1 || article.categoryId === 2

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
  const mostRecentArticles = articles
    .sort(staredThenMostRecent)

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
      <ActualityFeed articles={articles.filter(isFromCategoryActuality)} />
    </div>
    <div className="flex-3 flex column">
      <div className="container">
        <Une articles={articles.filter(isFromCategoryPresseOrArticle)} />
      </div>
      <EventsCalendar events={articles.filter(isFromCategoryEvent)} />
    </div>
  </div>

export default Home
