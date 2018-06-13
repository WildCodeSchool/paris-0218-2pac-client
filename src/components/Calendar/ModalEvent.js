import React from 'react'
import Modal from 'react-modal'
import Form from './Form.js'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class ModalEvent extends React.Component {
  constructor () {
    super()

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00'
  }

  closeModal () {
    this.setState({modalIsOpen: false})
  }

  render () {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(subtitle) => { this.subtitle = subtitle }}>In Coming Event</h2>
          <button onClick={this.closeModal}>close</button>
          <Form />
        </Modal>
      </div>
    )
  }
}

export default ModalEvent