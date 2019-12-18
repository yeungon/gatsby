import React from 'react'
import { Link } from 'gatsby'

// Using style to create css for element
import styled from '@emotion/styled'

import css from '@emotion/core'

// const Header = ({ siteTitle }) => (
//   <div>
//     {/*====================================================================
//               Start Nabbar
//   =====================================================================*/}
//     <nav className="navbar navbar-expand-lg dark fixed-top navbar-light">
//       {/* Container */}
//       <div className="container">
//         {/* My Logo */}

//         {/* Button Menu */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navtoggler"
//           aria-controls="navtoggler"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//           <span className="navbar-toggler-icon" />
//           <span className="navbar-toggler-icon" />
//         </button>
//         {/* List links */}
//         <div className="collapse navbar-collapse" id="navtoggler">
//           <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
//             <li className="nav-item">

//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 about
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/blog">
//                 blog
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 contact
//               </Link>
//             </li>
//           </ul>

//         </div>
//       </div>
//       {/* Container */}
//     </nav>
//     ;
//     {/*====================================================================
//               End Of Navbar
//   =====================================================================*/}
//   </div>
// )

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weght: normal;
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
  <header
    style={{
      background: '#efefef',
      //borderBottom: '1px solid #fcbbfa',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3rem calc((100vw - 550px)/2)',
    }}
  >
    <NavLink to="/" activeClassName = "current-page"
    >Home</NavLink>

    <nav
      style={{
        marginTop: '0',
      }}
    >
      
      <NavLink to="/about" activeClassName = "current-page">about</NavLink>
      <span style={{ paddingLeft: '15%' }} />
      <NavLink to="/blog" activeClassName = "current-page">blog</NavLink>
      <span style={{ paddingLeft: '15%' }} />
      <NavLink to="/contact" activeClassName = "current-page">contact</NavLink>

    
    </nav>
  </header>
)

export default Header
