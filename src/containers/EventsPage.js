import React from 'react'
import ScrollUp from '../containers/utils/ScrollUp'
import ArticleCard from '../components/ArticleCard'
import './EventsPage.css'

const isFromCategoryEvent = article => article.categoryId === 4
const byMostRecent = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)

const EventsPage = ({ articles }) => {
  const articleCards = articles
    .filter(isFromCategoryEvent)
    .sort(byMostRecent)
    .map(article => <ArticleCard key={article.id} article={article} displayShortDescription />)

  return (
    <ScrollUp>
      <div id="news-page" className="container">
        {articleCards}
      </div>
    </ScrollUp>
  )
}

export default EventsPage
