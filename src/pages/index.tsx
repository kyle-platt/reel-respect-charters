import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import "../styles/reset.css"
import "../styles/fonts.css"
import { Heading56 } from "../styles/_typography"

const Heading = styled.h1`
  ${Heading56}
`

const Button = styled.button`
  color: red;
`

const IndexPage = () => (
  <Layout>
    <>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <Heading>Reel Respect Charters</Heading>
      <Button>Hello</Button>
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
