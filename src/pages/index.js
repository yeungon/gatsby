import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const index = {
  color: '#2F4E62',
}

const IndexPage = () => (
  <Layout>
    <div style={index}>
      <h2
        style={{
          marginTop: '5%',
          fontWeight: '900',
          fontSize: '3.5rem',
          paddingBottom: '2rem',
          fontFamily: 'mainFontBold',

          color: '#1d2d35',
        }}
      >
        Kia ora. It is Vuong!{' '}
      </h2>

      <p
        style={{
          fontSize: '1.3rem',
          color: '#2F4E62',
          lineHeight: '1.5em',
          // fontWeight: '400',
        }}
      >
        I am Vuong Nguyen, a fullstack web developer. That is where I share what
        I know when attempting to "embrace the unknown" in web development.
      </p>
      <br />
      <hr />
      <br></br>
      <p>
        Built on Gatsby && GraphQL && headless WordPress.{' '}
        <a
          style={{ textDecoration: 'none' }}
          href={'https://github.com/yeungon/gatsby'}
        >
          Source code
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
