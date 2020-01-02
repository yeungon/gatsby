import React from 'react'
import { Link } from 'gatsby'
import "./header.css";
// Using style to create css for element
import styled from '@emotion/styled'
//import HeaderImage from './headermage'

import css from '@emotion/core'

const NavLink = styled(Link)`
  color: #FAFAFA;
  font-size: 1rem;
  font-weght: normal;
  color: '#2F4E62',
  line-height: 1;
  margin: 0 0.5 rem 0 0;
  //padding: 0.25 rem;
  text-decoration: none;
  &.current-page{
    //padding-bottom: 1rem;    
    color: #ed64a6;
    text-decoration: underline;
    text-decoration-color: #fff; 
  }
`

const Header = () => (
  <>
    <header

    className = "header___background"   
    >
    <div className = "header___grid___container">
    
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      
        <NavLink to="/about" activeClassName="current-page">
          about
        </NavLink>
        
        <NavLink to="/projects" activeClassName="current-page">
          projects
        </NavLink>
        
        <NavLink to="/blog" activeClassName="current-page">
          blog
        </NavLink>
       
        <NavLink to="/contact" activeClassName="current-page">
          contact
        </NavLink>
      
      </div>

    </header>
  </>
)

export default Header
