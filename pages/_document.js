import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import {Container} from 'semantic-ui-react'

import Layout from '../Components/Layout'

export default class MyDocument extends Document {

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>
        <body>
          <Layout/>
          <Container>
            <Main />
            <NextScript />
          </Container>
        </body>
      </html>
    )
  }
}