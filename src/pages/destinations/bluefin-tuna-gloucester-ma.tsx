import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"
import AboutDestination from "../../components/aboutDestination"

import Layout from "../../components/layout"
import PricingSection from "../../components/pricingSection"
import Seo from "../../components/seo"
import WhatToBringSection from "../../components/whatToBringSection"
import { layout } from "../../styles/_breakpoints"
import { color } from "../../styles/_colors"
import { Body14, Body16, Heading24, Heading40 } from "../../styles/_typography"

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

const Description = styled.p`
  ${Body14}
  color: ${color.gray50};

  @media ${layout.tablet}, ${layout.desktop} {
    ${Body16}
  }
`

const BannerImageWrapper = styled.div`
  margin-top: 16px;
`

const BluefinTuna = () => (
  <Layout>
    <>
      <TopContent>
        <MainHeading>Bluefin Tuna</MainHeading>
        <Description>Gloucester, MA</Description>
        <BannerImageWrapper>
          <StaticImage
            alt="gloucester"
            loading="eager"
            quality={95}
            width={1000}
            formats={["auto", "webp", "avif"]}
            src="../../images/gloucester.jpeg"
          />
        </BannerImageWrapper>
      </TopContent>
      <AboutDestination description="Reel Respect’s Bluefin Tuna fishing trip is a thrilling adventure off the coast of the Atlantic. Giant Bluefin Tuna will test your abilities to battle one of the great fishes in the sea. Gloucester, MA is filled with history, character, and excellent sea food. Reel Respect has a commercial license to sell Bluefin Tuna. If a large Bluefin Tuna is caught and sold, you may receive up to 100% of your full charter fee depending upon the price of the tuna." />
      <PricingSection
        pricingList={[
          {
            tripLength: "3 Day Standard",
            prices: [
              {
                amount: "$5,000",
                details1: "1 – 2 People",
                details2: "Without accommodations",
              },
              {
                amount: "$5,500",
                details1: "1 – 2 People",
                details2: "With accommodations",
              },
            ],
          },
          {
            tripLength: "3 Day Premium",
            prices: [
              {
                amount: "$6,000",
                details1: "1 – 4 People",
                details2: "Without accommodations",
              },
              {
                amount: "$6,500",
                details1: "1 – 4 People",
                details2: "With accommodations",
              },
            ],
          },
          {
            tripLength: "6 Day Standard",
            prices: [
              {
                amount: "$8,500",
                details1: "1 – 2 People",
                details2: "Without accommodations",
              },
              {
                amount: "$9,500",
                details1: "1 – 2 People",
                details2: "With accommodations",
              },
            ],
          },
          {
            tripLength: "6 Day Premium",
            prices: [
              {
                amount: "$10,000",
                details1: "1 – 4 People",
                details2: "Without accommodations",
              },
              {
                amount: "$10,700",
                details1: "1 – 4 People",
                details2: "With accommodations",
              },
            ],
          },
        ]}
        additionalDetails={[
          "Add $150 per additional guest per day (Without accommodations)",
          "There are a lot of stipulations for this trip. Please contact us to discuss.",
        ]}
      />
      <WhatToBringSection
        list={[
          "Valid ID (we provide the appropriate fishing license while on the vessel)",
          "Fishing tackle is provided so no need to bring your own.",
          "Sunglasses, sun screen and a hat are highly recommended.",
          "A camera to document your fishing memories!",
          "Rain gear and warm clothes are highly recommended.",
          "Food and beverages including alcohol is permitted. Please no glass containers.",
          "Sea sickness medication if needed.",
          "No smoking of any kind is allowed on the vessel",
        ]}
      />
    </>
  </Layout>
)

export const Head = () => <Seo title="Bluefin Tuna" />

export default BluefinTuna
