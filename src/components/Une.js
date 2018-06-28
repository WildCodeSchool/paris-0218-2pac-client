import React from 'react'
import Container from './Container'
import ChevronTitle from './ChevronTitle'
import SmallArticle from './SmallArticle'
import LongArticle from './LongArticle'
import './Une.css'

const Une = ({ uneData }) => {
  return (

    <Container>
      <ChevronTitle title="à la une" />

      <div className="article-container">
        {uneData.slice(0, 1).map(data => <div
          className="long-article-container"
          style={{ backgroundImage: `url(${data.imageURL})` }}
        >
          <LongArticle
            title={data.title}
            category={data.category}
            shortDescription={data.shortDescription}
          />
        </div>)}

        <div className="small-article-container">
          {uneData.slice(1).map(data => <SmallArticle
            key={data.id}
            title={data.title}
            category={data.category}
            style={{ backgroundImage: `url(${data.imageURL})` }}
          />)}
        </div>
      </div>

    </Container>

  )
}

export default Une
