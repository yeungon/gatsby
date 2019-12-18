import React from 'react';
import Layout from '../components/layout'
import {Link} from "gatsby";

import { heading, content } from '../style/inlinestyle'


const BlogPage = () => {
	return (
	 <Layout>
	    <h3 style = {heading}>Blog page</h3>
				<p>This is the blog</p>	    		
	    		<Link to="/">Go back to the homepage</Link>
	  			<p>We are going to update the page</p>
  	</Layout>
	
	)

}

export default BlogPage;