import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import './ArticleForm.css'

const freshArticle = {
  title: '',
  shortDescription: '',
  description: '',
  eventDate: '',
  categoryId: 1,
  imageURL: '',
  imageDescription: '',
  isMemberOnly: false,
  tags: ''
}

class ArticleForm extends React.Component {
  state = {
    article: this.props.article || freshArticle
  }

  handleChange = e => {
    const { name } = e.target
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    if (name === 'categoryId') {
      value = Number(value)
    }

    return this.setState({ article: { ...this.state.article, [name]: value } })
  }

  reset = () => {
    this.setState({ article: freshArticle })
  }

  handleSubmit = e => {
    e.preventDefault()

    const article = this.state.article

    if (article.categoryId !== 4) {
      article.eventDate = ''
    }

    this.props.submitArticle(article)
    // .then(res => this.reset())
  }

  handleEditorChange = e => {
    const content = e.target.getContent()

    this.setState({ article: { ...this.state.article, description: content } })
  }

  render () {
    const article = this.state.article

    return (
      <div id='article-form'>
        <form onSubmit={this.handleSubmit}>
          <label>titre
            <input type="text" name='title' value={article.title} onChange={this.handleChange} />
          </label>
          <label>catégorie
            <select id="categoryId" name='categoryId' value={article.categoryId} onChange={this.handleChange}>
              <option value={1}>article</option>
              <option value={2}>presse</option>
              <option value={3}>actualité</option>
              <option value={4}>évènement</option>
            </select>
          </label>
          <label>résumé
            <textarea type="text" name='shortDescription' value={article.shortDescription} onChange={this.handleChange} />
          </label>
          {
            article.categoryId === 4
              ? <label>date de l'évenement
                <input type="date" name='eventDate' value={article.eventDate} onChange={this.handleChange} />
              </label>
              : ''
          }
          <label>cover image
            <input type="text" name='imageURL' value={article.imageURL} onChange={this.handleChange} />
          </label>
          <label>description de l'image
            <input type="text" name='imageDescription' value={article.imageDescription} onChange={this.handleChange} />
          </label>
          <label>contenu membre
            <input type='checkbox' name='isMemberOnly' checked={article.isMemberOnly} onChange={this.handleChange}/>
          </label>
          <label>tags
            <input type="text" name='tags' value={article.tags} onChange={this.handleChange} />
          </label>
          <button type="submit" value="submit">valider</button>
        </form>
        <Editor apiKey='cwyqiu11xr2rk71h157w64bzbwi5evps8y0belarj25soekt'
          initialValue={this.state.article.description}
          onChange={this.handleEditorChange}
          init={{
            height: 500,
            plugins: 'print link image media preview fullpage charmap insertdatetime lists textcolor wordcount imagetools help',
            toolbar: 'media image link | undo redo | formatselect | fontsizeselect | bold italic strikethrough textcolor colorpicker forecolor backcolor | alignleft aligncenter alignright alignjustify | umlist bullist outdent indent | help',
            image_advtab: true,
            content_css: [ '//fonts.googleapis.com/css?family=Source+Sans+Pro:400,600' ],
            textcolor_map: [
              'FFFFFF', 'White',
              '000000', 'Black',
              '9D9D9C', 'Grey',
              '333333', 'Very dark gray',
              '226462', 'Dark green',
              'A99C2F', 'Olive',
              'F4971A', 'Orange',
              '731717', 'Dark red',
              'FF0000', 'Red'
            ]
          }}
        />
      </div>
    )
  }
}

export default ArticleForm
