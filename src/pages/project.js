import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';

import { heading, content } from '../style/inlinestyle'


const ContactPage = () => (
  <Layout>
    <h3 style = {heading}>Some of the projects I have done in free time:</h3>
    
  	<p style = {content}>1) English - Vietnamese dictionary</p>
  </Layout>
)

export default ContactPage
