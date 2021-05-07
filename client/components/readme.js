import React from 'react'
import ReactMarkdown from 'react-markdown'


const Readme = (props) => {
  return <ReactMarkdown>{props.readme}</ReactMarkdown>
}

Readme.propTypes = {}

export default React.memo(Readme)


