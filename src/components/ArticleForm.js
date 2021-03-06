import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Alert from 'react-s-alert'
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
  isStared: false,
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
      article.isMemberOnly = false
    }

    if (article.categoryId !== 1 && article.categoryId !== 2) {
      article.isStared = false
    }

    this.props.submitArticle(article)
      .then(res => {
        Alert.success(`Succès`)
        this.reset()
        setTimeout(() => { window.location = window.location }, 500)
      })
  }

  handleEditorChange = content => {
    this.setState({ article: { ...this.state.article, description: content } })
  }

  render () {
    const article = this.state.article

    return (
      <div id='article-form' className="admin-form container">
        <form onSubmit={this.handleSubmit}>
          <div className="titre-categorie">
            <label>Titre
              <input className="article-form-input" type="text" name='title' required value={article.title} onChange={this.handleChange} />
            </label>
            <label className="article-form-cat">Catégorie
              <select className="article-form-select" id="categoryId" name='categoryId' required value={article.categoryId} onChange={this.handleChange}>
                <option value={1}>Article</option>
                <option value={2}>Presse</option>
                <option value={3}>Actualité</option>
                <option value={4}>Évènement</option>
              </select>
            </label>
          </div>
          <label>Résumé
            <textarea className="resume" type="text" name='shortDescription' value={article.shortDescription} onChange={this.handleChange} />
          </label>
          {
            article.categoryId === 4
              ? <label>Date de l'évenement
                <input type="date" name='eventDate' required value={article.eventDate} onChange={this.handleChange} />
              </label>
              : ''
          }
          <div className="article-form-image">
            <label>Cover image
              <input type="text" name='imageURL' required placeholder="url de l'image" value={article.imageURL} onChange={this.handleChange} />
            </label>
            <label>Description de l'image
              <input type="text" name='imageDescription' value={article.imageDescription} onChange={this.handleChange} />
            </label>
          </div>
          <div className ="descr-membre">
            <label className="little-description">Tags
              <input type="text" name='tags' placeholder="séparés par des virgules (ex. 'alimentation,europe,politique')" value={article.tags} onChange={this.handleChange} />
            </label>
            <div className="flex row">
              {
                article.categoryId === 4
                  ? <label className="member-checkbox">Contenu membre
                    <input type='checkbox' name='isMemberOnly' checked={article.isMemberOnly} onChange={this.handleChange}/>
                  </label>
                  : ''
              }
              {
                article.categoryId === 1 || article.categoryId === 2
                  ? <label className="member-checkbox">Contenu à la Une
                    <input type='checkbox' name='isStared' checked={article.isStared} onChange={this.handleChange}/>
                  </label>
                  : ''
              }
            </div>
          </div>
          <Editor id="tinymce-editor"
            apiKey='cwyqiu11xr2rk71h157w64bzbwi5evps8y0belarj25soekt'
            onEditorChange={this.handleEditorChange}
            value={article.description}
            init={{
              height: 500,
              plugins: 'print link image media preview fullpage charmap insertdatetime lists textcolor wordcount imagetools help',
              toolbar: 'media image link | undo redo | formatselect | fontsizeselect | bold italic strikethrough textcolor colorpicker forecolor backcolor | alignleft aligncenter alignright alignjustify | umlist bullist outdent indent | help',
              image_advtab: true,
              content_css: [ 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:100,400,700' ],
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
          <input type="submit" value="Valider" />
        </form>
      </div>

    )
  }
}

export default ArticleForm
