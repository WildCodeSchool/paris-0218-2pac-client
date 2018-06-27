import React from 'react'
import Container from './Container'
import ChevronTitle from './ChevronTitle'
import SmallArticle from './SmallArticle'
import LongArticle from './LongArticle'
import { Link } from "@reach/router";
import './Une.css'

const Une = ({ uneData }) => {
  const articles = uneData
  const longArticle = articles[0]
  const smallArticles = articles.slice(1)

  return (

    <Container>
      <ChevronTitle title="à la une" />

      <div className="article-container">
        <div className="long-article-container" style={{ backgroundImage: `url(${longArticle.imageURL})` }}>
          <Link to={`/article/${longArticle.id}`}>
            <LongArticle
              title={longArticle.title}
              category={longArticle.category}
              shortDescription={longArticle.shortDescription}
            />
          </Link>
        </div>

        <div className="small-article-container">
          {smallArticles.map(article =>
            <Link to={`/article/${article.id}`}>
              <SmallArticle
                key={article.id}
                title={article.title}
                category={article.category}
                style={{ backgroundImage: `url(${article.imageURL})` }}
              />
            </Link>
          )}
        </div>
      </div>

    </Container>

  )
}

export default Une
