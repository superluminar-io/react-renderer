import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Headline, Link, Paragraph } from '../components'

export const NotFound = () => (
  <>
    <Helmet title="Not Found">
      <meta name="description" content="Proin augue nunc, aliquet a pharetra id, ornare euismod tellus." />
    </Helmet>
    <Headline.Secondary>404 - Not Found</Headline.Secondary>
  </>
)
