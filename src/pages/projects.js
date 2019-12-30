import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';

import { heading, content } from '../style/inlinestyle'


const ContactPage = () => (
  <Layout>
    <h3 style = {heading}>Projects:</h3>
    
  	<p style = {content}>1) [07/2017] Objective Test Portal: PHP, MYSQL. <a href = "https://tracnghiem.com.vn">Link</a></p>

    <p style = {content}>2) [11/2017] Vietnamese phonetics converter: PHP, jQuery, Ajax <a href = "https://vuongnguyen.net/tiengviet/">Link</a></p>

    <p style = {content}>3) [12/2017] English - Vietnamese:  PHP, MySQL, Sphinx search engine <a href = "https://tudien.net/">Link</a></p>

    <p style = {content}>4) [01/2018] English Picture Dictionary: Laravel <a href = "https://englishpicture.net">Link</a></p>

    <p style = {content}>5) [05/2018] NewNuke - A tiny PHP framework <a href = "https://github.com/yeungon/newnuke">Link</a></p>

    <p style = {content}>6) [06/2018] F5 network: Laravel. <a href = "https://f5.nz">Link</a></p>

    <p style = {content}>7) [04/2019] WP Security Master - A WordPress plugin <a href = "https://wordpress.org/plugins/wp-security-master/">Link</a></p>

    <p style = {content}>8) [06/2019] Crown Theme - WordPress themes <a href = "https://crowntheme.com/">Link</a></p>

    <p style = {content}>8) [08/2019] LaraApp - A blog on top of Laravel 5.8 <a href = "https://blog.vuongnguyen.net/">Link</a></p>

    <p style = {content}>8) [09/2019] Meeting Board - Vue-based App with Firebase <a href = "https://vuex.yeungon.now.sh/#/">Link</a></p>

    <p style = {content}>8) [09/2019] Vue based Game <a href = "https://vue3.yeungon.now.sh/">Link</a></p>

    <p style = {content}>8) [10/2019] VueTodoList <a href = "https://vuetodolist.yeungon.now.sh/">Link</a></p>


    <p style = {content}>8)[10/2019] Porting RegexOne to SPA using Vuejs <a href = "https://vuongnguyen.net/regex/#/">Link</a></p>

  </Layout>
)

export default ContactPage
