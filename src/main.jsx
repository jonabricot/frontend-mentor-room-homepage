import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { global } from '@stitches/react'

const globalStyle = global({
  body: {
    margin: 0,
    fontFamily: 'Spartan',
    fontSize: '12px'
  },
  "*": {
    boxSizing: 'border-box'
  },
  '@import': ['url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;600;700&display=swap")'],
})

globalStyle()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
