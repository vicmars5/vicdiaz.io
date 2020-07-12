import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import theme from 'react-syntax-highlighter/dist/cjs/styles/hljs/solarized-light'

function CodeBlock (props) {
  const { language, value } = props
  return (
    <SyntaxHighlighter language={language} style={theme}>
      {value}
    </SyntaxHighlighter>
  )
}

CodeBlock.defaultProps = {
  language: null
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
}

export default CodeBlock
