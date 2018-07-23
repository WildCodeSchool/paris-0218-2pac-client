import React from 'react'
import ScrollUp from '../containers/utils/ScrollUp'
import Article from '../components/Article'
import Page404 from '../components/Page404'

const ArticlePage = (props) => {
  const article = props.articles.find(article => String(article.id) === props.id)

  return (
    <ScrollUp>
      <div id="article-page" className="container">
        {article !== undefined ? <Article article={article} /> : <Page404 />}
      </div>
    </ScrollUp>
  )
}

export default ArticlePage
