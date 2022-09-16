import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
const SectionCaption=styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform:uppercase;
  text-align:center;
`
const SectionCellGroup=styled.div`
  max-width: 800px;
  margin:0 auto 100px;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-column-gap:20px;
  padding: 0 20px;
  @media(max-width: 800px){
    grid-template-columns:repeat(1,1fr);
    
  }
`
const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>learn  to <br />design and code React apps</h1>
        <p>Welcome to your new Gatsby site.</p>
        <Link to="/page-2/">watch a video</Link>
        <div className="Logos">
          <img src={require('../components/images/logo-sketch.png')} width="50" />
          <img src={require('../components/images/logo-figma.png')} width="50" />
          <img src={require('../components/images/logo-studio.png')} width="50" />
          <img src={require('../components/images/logo-framer.png')} width="50" />
          <img src={require('../components/images/logo-react.png')} width="50" />
          <img src={require('../components/images/logo-swift.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses,more coming</h2>
      <div className="CardGroup">
        <Card title="Design System"
          text="10 section"
          image={require('../components/images/wallpaper.jpg')} />
        <Card title="React for Designers"
          text="12 section"
          image={require('../components/images/wallpaper2.jpg')} />
        <Card title="Sound Design"
          text="5 section"
          image={require('../components/images/wallpaper3.jpg')} />
        <Card title="ARKit 2"
          text="10 section"
          image={require('../components/images/wallpaper4.jpg')} />
      </div>
    </div>
    <Section
      image={require('../components/images/wallpaper2.jpg')}
      logo={require('../components/images/logo-react.png')}
      title='react for Design'
      text=" Learn how to build a modern site using React and the most efficient libraries to get your site / product online . Get familiar with components , Grid CSS , animations , interactions dynamic data with Conteptful and deploying your site with Netlify . "
    />

    <SectionCaption>12 Section - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>

  </div>
)

export default IndexPage
