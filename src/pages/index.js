import React from 'react'
import { Link } from 'gatsby';


import Layout from '../components/layout'


const IndexPage = () => (
  <Layout>
    
   <h2 
   style = {{
     marginTop: "7%",
     fontWeight: '800',
     fontSize: '3rem',
     paddingBottom: '3rem',
     color: '#2F4E62'
  
   }}>Kia ora! That is Vuong. </h2>

   <br/>
   
    <p>This is my new homepage built on top of headless CMS WordPress && GraphQL && Gatsby.</p>

  </Layout>
)

export default IndexPage
