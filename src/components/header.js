import React from 'react'
import { Link } from 'gatsby'
import './main.css'

import './dark-theme.css'

import './bootstrap.min.css'

import './index.css'

const Header = ({ siteTitle }) => (
     <div
      
    >
      
                 

        {
  /*==================================================================== 
              Start Nabbar 
  =====================================================================*/
}
<nav className="navbar navbar-expand-lg dark fixed-top navbar-light">
  {/* Container */}
  <div className="container">
    {/* My Logo */}
    <a href="/" className="navbar-brand">
      Nour
      <span className="brand-bg" />
    </a>
    {/* Button Menu */}
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navtoggler"
      aria-controls="navtoggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
      <span className="navbar-toggler-icon" />
      <span className="navbar-toggler-icon" />
    </button>
    {/* List links */}
    <div className="collapse navbar-collapse" id="navtoggler">
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" href="#home">
            Home <span className="sr-only">(current)</span>
          </a>
           */}
          <Link
          className="nav-link"
          to="/"          
          >
          Home
          </Link>


        </li>
        <li className="nav-item">
          <Link
          className="nav-link"
          to="/about"          
          >
          about
          </Link>

        </li>
        
        <li className="nav-item">
          <Link
          className="nav-link"
          to="/blog"          
          >
          blog
          </Link>
        </li>
        <li className="nav-item">
          <Link
          className="nav-link"
          to="/contact"          
          >
          contact
          </Link>
        </li>
      </ul>
      <ul className="social-media-nav">
        <li>
          <a href="#" className="facebook">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="#" className="twitter">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#" className="behance">
            <i className="fab fa-behance" />
          </a>
        </li>
      </ul>
    </div>
  </div>
  {/* Container */}
</nav>;
{
  /*==================================================================== 
              End Of Navbar 
  =====================================================================*/
}


      
    </div>
  
)

export default Header
