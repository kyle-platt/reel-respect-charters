import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"
import AboutDestination from "../../components/aboutDestination"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import WhatToBringSection from "../../components/whatToBringSection"
import { layout } from "../../styles/_breakpoints"
import { color } from "../../styles/_colors"
import { Heading24, Heading40 } from "../../styles/_typography"

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 16px;
`

const MainHeading = styled.h1`
  ${Heading24}
  margin-bottom: 16px;
  color: ${color.gray30};

  @media ${layout.tablet}, ${layout.desktop} {
    ${Heading40}
  }
`

const BannerImageWrapper = styled.div`
  margin-top: 16px;
`

const CreateYourOwn = () => (
  <Layout>
    <>
      <TopContent>
        <MainHeading>Create Your Own Fishing Adventure</MainHeading>
        <BannerImageWrapper>
          <StaticImage
            alt="Fishing Pole"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            src="../../images/fishing-pole.jpg"
          />
        </BannerImageWrapper>
      </TopContent>
      <AboutDestination description="Where do you want to fish? If you need a captain and a vessel to go fishing at your dream destination we can make that happen! Reel Respect Charters will create the fishing package for your adventure." />
      <WhatToBringSection
        list={[
          "Fishing licenses will be determined based on your adventure package.",
          "Sunglasses, sun screen and a hat are highly recommended.",
          "A camera to document your fishing memories!",
          "Rain gear or a coat may be need depending on the weather.",
          "Food and beverages including alcohol is permitted. Please no glass containers.",
          "No smoking of any kind is allowed on the vessel",
        ]}
      />
    </>
  </Layout>
)

export const Head = () => <Seo title="Create Your Own" />

export default CreateYourOwn
