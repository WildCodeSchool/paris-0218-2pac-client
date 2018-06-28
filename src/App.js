import React, { Component } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Form from './components/Calendar/Form'
import Footer from './components/Footer'
import Articles from './components/Articles'
import './App.css'

import PacCalendar from './components/PacCalendar'

class App extends Component {
  state = {
    newArticles: [],
  }

  componentDidMount () {
    fetch('/articles')
      .then(res => res.json())
      .then(data => this.setState({ newArticles: data }))
  }

  render () {
    console.log('render', { state: this.state })

    const newArticles = this.state.newArticles.map(article =>
      <Articles key={article.id} categoryId={article.categoryId} eventDate={article.eventDate} title={article.title} shortDescription={article.shortDescription}
      />)

    return (
      <div>
        <Header />
        <SideBar />
        <span>--Articles List!!!--</span>
        <div>
          {newArticles}
        </div>
        <PacCalendar />
        <Form />
        <Footer />
      </div>
    )
  }
}
export default App
