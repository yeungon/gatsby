import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import { heading, content } from '../style/inlinestyle'


const ContactPage = () => (
  <Layout>
    <h3 style = {heading}>Please contact me:</h3>
    
  	<p style = {content}>We are going to update the page</p>
  </Layout>
)

export default ContactPage
