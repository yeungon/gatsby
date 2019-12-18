import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const index = {
 
  color: '#2F4E62'
  
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
        
        color: '#2F4E62',
      }}
    >
      Kia ora!{' '}
    </h2>

    <p style = {{
      fontSize: '1.5rem',
      color: '#2F4E62',
      lineHeight: '1.5em',
      fontWeight: '400'
    }}>
      I am Vuong Nguyen, a fullstack web developer. That is where I share what
      I know when attempting to "embrace the unknown" in web development.
    </p>
    <br />

    <p>
      This is my new homepage built on top of headless CMS WordPress && GraphQL
      && Gatsby.
    </p>

    </div>
  </Layout>
)

export default IndexPage
