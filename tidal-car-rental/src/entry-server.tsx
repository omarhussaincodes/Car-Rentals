import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Home} from './pages/Home'

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  )
  return { html }
}
