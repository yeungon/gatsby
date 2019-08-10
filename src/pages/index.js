import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>
      <marquee direction="right">Hello from Gatsby on, are you sure?</marquee>
    </h1>
  
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2, yes</Link>

  </Layout>
)

export default IndexPage
