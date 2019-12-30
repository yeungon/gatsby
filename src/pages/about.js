import React from 'react'

import Layout from '../components/layout'

import { heading, content } from '../style/inlinestyle'

const About = () => {
  return (
    <Layout>
      <div>
        <h1 style={heading}>About me</h1>
        <br />
        <p style={content}>
          I am a fullstack web eveloper, PHP framework creator, WordPress plugin builder, JAMstack lover. 
          
          I feel comfortable to work with Laravel Vuejs, React and Gatsby. jQuery, Bootstrap, HTML5, CSS3 are also my friends on the daily basis.</p>
        <br/>

        <p style={content}>
          I love solving problems while working diligently and creatively.</p>

        <br/>

        <p style={content}>
          I am a kind of perfectionism in everything especially web development!
          To me, web should be easy to maintain, scale up but secured and a kind of art. Yes, "web/php/gatsby artisan build"!
        </p>
        <br/>
        <br/>
        <hr></hr>

      <p></p>
      <p></p>
      <p></p>
        

      </div>
    </Layout>
  )
}

export default About
