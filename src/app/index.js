import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { Headline, Wrapper } from './components'
import { Home } from './pages/Home'
import { Example } from './pages/Example'
import { NotFound } from './pages/NotFound'

const GlobalStyle = createGlobalStyle`
  html, body, #main {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

export const App = () => (
  <Wrapper>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Dosis:300,500,700&display=swap" rel="stylesheet" />
    </Helmet>
    <GlobalStyle />
    <Headline.Primary>React SSR</Headline.Primary>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/example" component={Example} />

      <Route component={NotFound} />
    </Switch>
  </Wrapper>
)
