import React from 'react'
import { Link } from 'gatsby'

// Using style to create css for element
import styled from '@emotion/styled'
//import HeaderImage from './headermage'

import css from '@emotion/core'

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weght: normal;
  color: '#2F4E62',
  line-height: 1;
  margin: 0 0.5 rem 0 0;
  //padding: 0.25 rem;
  text-decoration: none;
  &.current-page{
    //padding-bottom: 1rem;
    border-bottom: 2px solid #222;
  }
`

const Header = () => (
  <>

    <header
      style={{
        background: '#efefef',
        //borderBottom: '1px solid #fcbbfa',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '3rem calc((100vw - 400px - 0.5rem)/2)',
      }}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>

      <nav
        style={{
          marginTop: '0',
        }}
      >
        <NavLink to="/about" activeClassName="current-page">
          about
        </NavLink>
        <span style={{ paddingLeft: '15%' }} />
        <NavLink to="/projects" activeClassName="current-page">
          projects
        </NavLink>
        <span style={{ paddingLeft: '15%' }} />
        <NavLink to="/blog" activeClassName="current-page">
          blog
        </NavLink>
        <span style={{ paddingLeft: '15%' }} />
        <NavLink to="/contact" activeClassName="current-page">
          contact
        </NavLink>
      </nav>
    </header>
  </>
)

export default Header
