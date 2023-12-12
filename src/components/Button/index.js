import React from 'react'

import PropTypes from 'prop-types'

import { ConteinerButton } from './styles'

function Button({ children, ...rest }) {
  console.log(children)
  return <ConteinerButton {...rest}>{children}</ConteinerButton>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}
