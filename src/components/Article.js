import React, { Component } from 'react'
import Container from './Container'
import IntroArticle from './IntroArticle'
import BodyArticle from './BodyArticle'

const Article = () => {

    return (

      <Container>

        <div className="intro-article">
          <IntroArticle />
        </div>

        <div className="article-body">
          <BodyArticle />
        </div>

      </Container>

    )

}

export default Article
