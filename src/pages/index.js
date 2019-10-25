import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const IndexPage = () => (
  <Layout>
    <h1>
      Hi there, this is Vuong
    </h1>
  
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>

    </div>
    <Link to="/page-2/">Go to page 2, yes</Link>

  </Layout>
)

export default IndexPage
