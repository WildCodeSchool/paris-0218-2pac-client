import React from 'react'

// this is to avoid browser to "scroll into view" (cf. https://github.com/reach/router/issues/62)
class ScrollUp extends React.Component {
  componentDidMount () {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
  }

  render () {
    return this.props.children
  }
}

export default ScrollUp
