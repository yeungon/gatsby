import React from 'react'

import Layout from '../components/layout'

import { heading, content } from '../style/inlinestyle'

const About = () => {
  return (
    <Layout>
      <div>
        <h1 style={heading}>About me!</h1>
        <br />

        <p style={content}>
          In brief, Vuong is addicted to $addiction = []; $addiction["tech"] =
          "unlimited"; && addiction["philosophy"] = "analytic philosophy aka
          philosophy of language"; && $addiction ['literature'] = "short
          stories, currently";
        </p>

        <br />
        <p style={content}>
          Fullstack developer, PHP framework creator, WordPress plugin builder, JAMstack lover (hint:
          Gatsby, GridSome): Experienced and work comfortably with, but not
          limited to, PHP, Laravel, WordPress, Codeigniter, (possibly Symfony ||
          Silverstripe || any PHP framework && CMS), MySQL, JS, jQuery, Vue.js,
          ReactJS, Bootstrap, HTML5, CSS. Certified elsewhere.
        </p>
        <br/>

        <p style={content}>
          I am a kind of perfectionism in everything especially web development!
          To me, web should be easy to maintain, scale up but secured and a kind of art.
        </p>
      </div>
    </Layout>
  )
}

export default About
