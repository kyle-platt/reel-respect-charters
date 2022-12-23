import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

import "../styles/reset.css"
import "../styles/fonts.css"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { layout } from "../styles/_breakpoints"
import DestinationTile from "../components/destinationTile"
import { color } from "../styles/_colors"
import { Heading32, Heading56 } from "../styles/_typography"
import DestinationSection from "../components/destinationSection"

const ReversedHero = styled(Hero)`
  @media ${layout.tabletL}, ${layout.desktop} {
    flex-direction: row-reverse;
    padding: 56px 0;
  }
`

const IndexPage = () => (
  <Layout>
    <>
      <Hero
        title="The Captain"
        description="Captain Darrin Howard has been an avid fisherman for over 35 years. With years of experience and a 50 ton master captain license, Darrin has the knowledge and passion to lead a successful day on the water. As captain and owner, he aims to treat his crew and the environment with Reel Respect. Safety for all is a priority and Darrin is a proud member of the Michigan Charter Boat Association (MCBA)."
      >
        <StaticImage
          alt="Darrin, The Captain"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          src="../images/darrin-boat.jpeg"
        />
      </Hero>
      <ReversedHero
        title="The Boat"
        description="A 2012 Robalo 305 express fishing cruiser called “Classy Hooker.” She is outfitted with a pair of low hour 300 horse power yamaha 4 stroke outboards. With a 370 gallon fuel tank this vessel can cruise almost 500 miles. With a 30 foot length and a 10.5 foot beam she is comfortable and capable in most sea conditions. She is outfitted with the best Raymarine electronics including auto pilot, radar, and night vision for those early morning departures."
      >
        <StaticImage
          alt="2012 Robalo 305"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          src="../images/boat-2012-robalo.jpeg"
        />
      </ReversedHero>
      <DestinationSection />
    </>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
