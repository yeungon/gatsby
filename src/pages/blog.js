import React from 'react';
import Layout from '../components/layout'
import {Link} from "gatsby";

const BlogPage = () => {
	return (
	 <Layout>
	    <h1>Blog page</h1>
				<p>This is the blog</p>	    		
	    		<Link to="/">Go back to the homepage</Link>
	  			<p>We are going to update the page</p>
  	</Layout>
	
	)

}

export default BlogPage;