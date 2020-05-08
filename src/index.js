import React from 'react'
import { render } from 'react-dom'
import App from './App'
import Context from './Context'

render(
  <Context.Provider>
    <App />
  </Context.Provider>,
  document.getElementById('app'),
)
