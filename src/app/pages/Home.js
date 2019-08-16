import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Headline, Link, Paragraph } from '../components'

export const Home = () => (
  <>
    <Helmet title="Welcome">
      <meta name="description" content="Proin augue nunc, aliquet a pharetra id, ornare euismod tellus." />
    </Helmet>
    <Headline.Secondary>Welcome!</Headline.Secondary>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque ornare nibh rhoncus congue. Praesent
      at lacinia velit, non fermentum ipsum. Etiam ultrices velit a lacus ultrices sollicitudin. Pellentesque lacus
      magna, commodo quis turpis sed, pharetra varius justo. Pellentesque id risus ut elit ornare mattis quis eget enim.
    </Paragraph>
    <Paragraph>
      Go to <Link href="/example">Example</Link> page.
    </Paragraph>
  </>
)
