import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const handleClick = () => {
  alert("Hello me")
}

const About = () =>{  
  return(
  <Layout>
    <div>
      <h1>About me!</h1>
      <button onClick={handleClick} className="btn btn-success">Click Me Please</button>
      <Link to ="/">Back to Home</Link>
    </div>
  </Layout>
  )
}

export default About
