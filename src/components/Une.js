import React from 'react'
import Container from './Container'
import ChevronTitle from './ChevronTitle'
import ArticlePreview from './ArticlePreview'
import SmallArticle from './SmallArticle'
import LongArticle from './LongArticle'
import './Une.css'

const Une = ({ uneData }) => {
  return (

    <Container>
      <ChevronTitle title="à la une" />

    <div className="article-container">

      <div className="long-article-container">

        <LongArticle title="Titre de l'article long"
          shortDescription="Une description provisoire de l'article long, qui sera modifié par la suite" />

      </div>

      <div className="small-article-container">

        <SmallArticle title="Titre de l'article #1"/>
        <SmallArticle title="Titre de l'article #2"/>
        <SmallArticle title="Titre de l'article #3"/>
        <SmallArticle title="Titre de l'article #4"/>

      </div>

    </div>

    </Container>

  )
}

export default Une
