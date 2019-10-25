import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>About Vuong</h1>
    <p>Đây là trang web của Vượng</p>
    <Link to="/">Go back to the homepage</Link>
  	<p>We are going to update the page</p>
  </Layout>
)

export default About
