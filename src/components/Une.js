import React from 'react'
import Container from './Container'
import ChevronTitle from './ChevronTitle'
import LongArticle from './LongArticle'
import SmallArticle from './SmallArticle'
import { Link } from '@reach/router'
import './Une.css'

const Une = ({ articles }) => {
  const longArticle = articles[0]
  const smallArticles = articles.slice(1, 5)

  return (
    <Container>
      <ChevronTitle title="à la une" />

      <div className="article-container">
        { longArticle
          ? <Link to={`/article/${longArticle.id}`}>
            <div className="long-article-container" style={{ backgroundImage: `url(${longArticle.imageURL})` }}>
              <LongArticle article={longArticle} />
            </div>
          </Link>
          : <div>Loading..</div>
        }

        <div className="small-article-container">
          {smallArticles.map(article =>
            <Link key={article.id} to={`/article/${article.id}`}>
              <SmallArticle article={article} />
            </Link>
          )}
        </div>
      </div>

    </Container>
  )
}

export default Une
