import React from 'react'
import Container from './Container'
import ChevronTitle from './ChevronTitle'
import SmallArticle from './SmallArticle'
import LongArticle from './LongArticle'
import { Link } from '@reach/router'
import './Une.css'

const Une = ({ uneData }) => {
  const articles = uneData
  const longArticle = articles.slice(0, 1)
  const smallArticles = articles.slice(1)

  return (

    <Container>
      <ChevronTitle title="à la une" />

      <div className="article-container">
        {longArticle.map(longArticle =>
        <Link to={`/article/${longArticle.id}`}>
          <div className="long-article-container" style={{ backgroundImage: `url(${longArticle.imageURL})` }}>
            <LongArticle
              title={longArticle.title}
              category={longArticle.categoryId}
              shortDescription={longArticle.shortDescription}
            />
          </div>
        </Link>
        )}

        <div className="small-article-container">
          {smallArticles.map(smallArticle =>
            <Link to={`/article/${smallArticle.id}`}>
              <SmallArticle
                key={smallArticle.id}
                title={smallArticle.title}
                category={smallArticle.categoryId}
                style={{ backgroundImage: `url(${smallArticle.imageURL})` }}
              />
            </Link>
          )}
        </div>
      </div>

    </Container>

  )
}

export default Une
