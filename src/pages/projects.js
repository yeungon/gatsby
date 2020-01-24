import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';

import { heading, content, hyperlink } from '../style/inlinestyle'


const ContactPage = () => (
  <Layout>
    <h3 style = {heading}>Projects:</h3>
    
  	<p style = {content}>1) [07/2017] Objective Test Portal: PHP, MYSQL. <a style = {hyperlink} href = "https://tracnghiem.com.vn">Link</a></p>

    <p style = {content}>2) [11/2017] Vietnamese phonetics converter: PHP, jQuery, Ajax <a style = {hyperlink} href = "https://vuongnguyen.net/tiengviet/">Link</a></p>

    <p style = {content}>3) [12/2017] English - Vietnamese:  PHP, MySQL, Sphinx <a style = {hyperlink} href = "https://tudien.net/">Link</a></p>

    <p style = {content}>4) [01/2018] English Picture Dictionary: Laravel 5.5 <a style = {hyperlink}  href = "https://englishpicture.net">Link</a></p>

    <p style = {content}>5) [05/2018] NewNuke - A tiny PHP framework <a  style = {hyperlink} href = "https://github.com/yeungon/newnuke">Link</a></p>

    <p style = {content}>6) [05/2018] Advanced PHP exercises: 137 questions <a  style = {hyperlink} href = "https://github.com/yeungon/ZCE">Link</a></p>   

    <p style = {content}>7) [06/2018] F5 network: Laravel 5.5. <a  style = {hyperlink} href = "https://f5.nz">Link</a></p>

    <p style = {content}>8) [04/2019] WP Security Master - A WordPress plugin <a style = {hyperlink}  href = "https://wordpress.org/plugins/wp-security-master/">Link</a></p>

    <p style = {content}>9) [06/2019] Crown Theme - WordPress themes <a  style = {hyperlink} href = "https://crowntheme.com/">Link</a></p>

    <p style = {content}>10) [08/2019] LaraApp - A blog on top of Laravel 5.8 <a style = {hyperlink}  href = "https://blog.vuongnguyen.net/">Link</a></p>

    <p style = {content}>11) [09/2019] In-JavaScript-we-trust - >= 100 Github &#9733; :-) <a  style = {hyperlink} href = "https://github.com/yeungon/In-JavaScript-we-trust">Link</a></p>

    <p style = {content}>12) [09/2019] Meeting Board - Vue-based App with Firebase <a  style = {hyperlink} href = "https://vuex.yeungon.now.sh/#/">Link</a></p>

    <p style = {content}>13) [09/2019] Vue based Dice Roller game <a  style = {hyperlink} href = "https://vue3.yeungon.now.sh/">Link</a></p>

    <p style = {content}>14) [10/2019] VueTodoList <a  style = {hyperlink} href = "https://vuetodolist.yeungon.now.sh/">Link</a></p>

    <p style = {content}>15)[10/2019] Porting RegexOne to SPA using Vuejs <a  style = {hyperlink} href = "https://vuongnguyen.net/regex/#/">Link</a></p>

    <p style = {content}>16)[WIP] Porting RegexOne to SPA using React <a  style = {hyperlink} href = "https://regexreact.yeungon.now.sh/">Link - </a><a  style = {hyperlink} href = "https://github.com/yeungon/regexreact">Github</a></p> 

    <p style = {content}>17)[WIP] Advanced JavaScript course - Youtube <a  style = {hyperlink} href = "https://youtube.com/hoccoban">Link</a></p>

  <br/>
  <br/><br/><br/><br/>
  </Layout>
)

export default ContactPage


