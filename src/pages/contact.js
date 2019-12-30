import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import { heading, content, hyperlink } from '../style/inlinestyle'

const ContactPage = () => (
  <Layout>
    <h3 style={heading}>Contact</h3>

    <p style={content}>1) Email: nvuo729@aucklanduni.ac.nz </p>

    <p style={content}>2) Phone number: +64224397355 </p>

    <p style={content}>
      3){' '}
      <a
        style={hyperlink}
        href={'https://www.linkedin.com/in/nguyenvuong/'}
      >
        Linkedin
      </a>{' '}
    </p>

    <p style={content}>
      4){' '}
      <a style={hyperlink} href={'https://twitter.com/vuong'}>
        Twitter
      </a>{' '}
    </p>

    <p style={content}>
      5){' '}
      <a style={hyperlink} href={'https://github.com/yeungon'}>
        Github
      </a>{' '}
    </p>
  </Layout>
)

export default ContactPage
