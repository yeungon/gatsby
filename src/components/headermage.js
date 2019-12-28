import { React } from 'react'

import styled from '@emotion/styled'

import { Link, graphql, useStaticQuery } from 'gatsby'

const ImageBackground = styled('div')`
  background-image: url('static/images/sky.jpg');
  background-position: top 10% center;
  background-size: cover;
  height: 40vh;

`

const Textbox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffđ 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;
`

const HeaderImage = () => {
  return (
    <ImageBackground>

        <Textbox>
      <h1>Vuong Nguyen 's page</h1>
      <p>
        Hello <Link to="about">About me</Link>
      </p>

      </Textbox>
    </ImageBackground>
  )
}

export default HeaderImage
