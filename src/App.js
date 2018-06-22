import React, { Component } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import AsideLeft from './components/AsideLeft'
import './App.css'

class App extends Component {
  constructor() {
  super()
  this.state= {
    articles: []
    }
  }
  componentDidMount () {
    fetch('/auth/getArticles')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ articles: data })
      })
      fetch('/auth/getArticleCategories')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ getArticleCategories: data })
      })

  }

  render () {
    console.log('render', this.state.articles, this.state.getArticleCategories)

   const articles = this.state.articles.map(article => <AsideLeft key={article.id} title={article.title} categoryId={article.categoryId} shortDescription={article.shortDescription} />).slice(0,5)


    return (
      <div>
        <Header />
        <SideBar />
         {articles}
         <Footer />

      </div>
    )
  }
}

export default App
