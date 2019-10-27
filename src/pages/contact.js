import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Hi from the contact page</h1>
    
    <Link to="/">Go back to the homepage</Link>
  	<p>We are going to update the page</p>
  </Layout>
)

export default ContactPage
