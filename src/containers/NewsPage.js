import React from 'react'
import ScrollUp from '../containers/utils/ScrollUp'
import ArticleCard from '../components/ArticleCard'
import './NewsPage.css'

const byMostRecent = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
const byOlder = (a, b) => new Date(a.createdAt) - new Date(b.createdAt)

const NewsPage = ({ articles }) => {
  const articleCards = articles
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

export default NewsPage
