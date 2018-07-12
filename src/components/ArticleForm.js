import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
// import './ArticleForm.css'

const initialInputValues = {
  title: '',
  shortDescription: '',
  description: '',
  eventDate: '',
  categoryId: 1,
  imageURL: '',
  imageDescription: ''
}

class ArticleForm extends React.Component {
  state = {
    inputs: initialInputValues
  }

  handleChange = (e) => {
    const inputs = {
      ...this.state.inputs,
      [e.target.name]: e.target.value
    }

    this.setState({ inputs: inputs })
  }

  reset = () => {
    this.setState({ inputs: initialInputValues })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const data = this.state.inputs

    if (data.categoryId !== '4') {
      data.eventDate = undefined
    }

    console.log({ data })

    fetch('http://localhost:5000/articles', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
      // this.reset()
      })
  }

  handleEditorChange = e => {
    const content = e.target.getContent()

    this.setState({ inputs: { ...this.state.inputs, description: content } })
  }

  render () {
    const inputs = this.state.inputs

    return (
      <div>
      <form id='formular_articles' onSubmit={this.handleSubmit}>
        <label>Titre :
          <input type="text" name='title' value={inputs.title} onChange={this.handleChange} />
        </label>
        <label>Choix de la catégorie :
          <select id="categoryId" name='categoryId' value={inputs.categoryId} onChange={this.handleChange}>
            <option value={1}>article</option>
            <option value={2}>presse</option>
            <option value={3}>actualité</option>
            <option value={4}>évènement</option>
          </select>
        </label>
        <label>Résumé :
          <textarea type="text" name='shortDescription' value={inputs.shortDescription} onChange={this.handleChange} />
        </label>
        {
          inputs.categoryId === '4'
            ? <label>Date :
              <input type="date" name='eventDate' value={inputs.eventDate} onChange={this.handleChange} />
            </label>
            : ''
        }
        <label>Lien de l'image :
          <input type="text" name='imageURL' value={inputs.imageURL} onChange={this.handleChange} />
        </label>
        <label>Description de l'image :
          <input type="text" name='imageDescription' value={inputs.imageDescription} onChange={this.handleChange} />
        </label>
        <button type="submit" value="submit">Ajouter</button>
      </form>
      <Editor
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
        onChange={this.handleEditorChange}
      />
      </div>
    )
  }
}

export default ArticleForm
