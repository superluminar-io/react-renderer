import React from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'

import { wrap } from './wrap'

export const render = (Tree, path) => {
  const helmetContext = {}
  const App = () => (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={path}>
        <Tree />
      </StaticRouter>
    </HelmetProvider>
  )

  const sheets = new ServerStyleSheet()
  const markup = renderToString(sheets.collectStyles(<App />))
  const styles = sheets.getStyleTags()
  const helmet = helmetContext.helmet

  return wrap({ helmet, markup, styles })
}
