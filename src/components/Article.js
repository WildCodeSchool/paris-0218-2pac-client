import React, { Component } from 'react'
import IntroArticle from './IntroArticle'
import BodyArticle from './BodyArticle'
import './Article.css'

const Article = () => {

    return (
      <div className="article">

        <div className="intro-article">
          <IntroArticle />
        </div>

        <div className="article-body">
          <BodyArticle />
        </div>

      </div>
    )

}

export default Article
