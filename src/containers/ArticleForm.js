import React, { Component } from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './ArticleForm.css'

class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = editorState => {
    this.setState({ editorState })
  }

  toHTML = () => draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))

  render() {
    const style = {
      width: '31rem',
      margin: '2rem',
    }

    const { editorState } = this.state

    return (
      <div style={style}>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea disabled value={this.toHTML()} />
        <div dangerouslySetInnerHTML={{ __html: this.toHTML() }} />
      </div>
    )
  }
}

class ArticleForm extends Component {
  render() {
    return <EditorConvertToHTML />
  }
}

export default ArticleForm
