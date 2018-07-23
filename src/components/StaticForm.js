import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Alert from 'react-s-alert'
import './ArticleForm.css'

const freshStatic = {
  content: ''
}

class StaticForm extends React.Component {
  state = {
    static: this.props.static || freshStatic
  }

  reset = () => {
    this.setState({ static: freshStatic })
  }

  handleSubmit = e => {
    e.preventDefault()

    const _static = this.state.static

    this.props.submitStatic(_static)
      .then(res => {
        Alert.success(`Succès`)
        this.reset()
        setTimeout(() => { window.location = window.location }, 500)
      })
  }

  handleEditorChange = content => {
    this.setState({ static: { ...this.state.static, content: content } })
  }

  render () {
    const _static = this.state.static

    return (
      <div id='static-form' className="admin-form container">
        <form onSubmit={this.handleSubmit}>
          <Editor id="tinymce-editor"
            apiKey='cwyqiu11xr2rk71h157w64bzbwi5evps8y0belarj25soekt'
            onEditorChange={this.handleEditorChange}
            value={_static.content}
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

export default StaticForm
