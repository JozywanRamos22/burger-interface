/* eslint-disable react/no-deprecated */
import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import Login from './containers/Login'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <Login />
    <ToastContainer />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
