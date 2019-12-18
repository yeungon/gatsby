import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: "Vuong 's homepage"},
            { name: 'keywords', content: 'Web Developer, PHP developer, JavaScript developer, Auckland developer, ReactJS, Vuejs, Fullstack developer, JAMstack' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />

        <div
          // CSS in JS
          style={{
            margin: '0 auto',
            maxWidth: 960,
            //padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {/* Setting up the global style. Emotion package helps us maintain the style better as we can write normal css insider javascript */}
          <Global
            styles={css`
              * {
                box-sizing: border-box;
                margin: 0;
              }

              // body {
              //   margin: 0;
              //   color: #555;
              //   font-family: 'Helvetica', 'Helvetica Neue', Helvetica, Arial,
              //     sans-serif;
              //   font-size: 18px;
              //   line-height: 1.4;
              // }

              > div {
                margin-top: 0;
              }
            `}
          />

          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
