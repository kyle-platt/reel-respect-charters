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

const Salmon = () => (
  <Layout>
    <>
      <TopContent>
        <MainHeading>Salmon</MainHeading>
        <Description>Manistee or Ludington, Lake Michigan</Description>
        <BannerImageWrapper>
          <StaticImage
            alt="Salmon Fishing"
            loading="eager"
            quality={95}
            width={1000}
            formats={["auto", "webp", "avif"]}
            src="../../images/manistee-salmon-family.jpeg"
          />
        </BannerImageWrapper>
      </TopContent>
      <AboutDestination description="Salmon are the best fighting fish in our beautiful Great Lakes. Salmon can make long powerful runs where you are sure your arms are going to fall off. Lake Michigan sunsets are beautiful, especially while battling a 25 pound king salmon. Steelhead, lakers, and coho salmon are very likely to be caught during this charter as well." />
      <PricingSection
        pricingList={[
          {
            tripLength: "1/2 Day",
            tripLengthDetails: "Morning or Afternoon (up to 6 hours)",
            prices: [
              {
                amount: "$650",
                details1: "1 – 4 People",
                details2: "Nearshore or less than 12 miles",
              },
            ],
          },
          {
            tripLength: "Full Day",
            tripLengthDetails: "up to 10 hours",
            prices: [
              {
                amount: "$950",
                details1: "1 – 4 People",
                details2: "Nearshore or less than 12 miles",
              },
            ],
          },
        ]}
        additionalDetails={[
          "Add $100 per additional guest over 4 people.",
          "Charters more than 12 miles offshore will add an additional $200 to the charter fee.",
          "Salmon population has been limited. Please call for availability.",
          "If you are a repeat customer within the year you get $50 off the subsequent charter.",
        ]}
      />
      <WhatToBringSection
        list={[
          "A Michigan fishing license for everyone 17 years and older is required.",
          "Sunglasses, sun screen and a hat are highly recommended.",
          "A camera to document your fishing memories!",
          "Rain gear or a coat is highly recommended.",
          "Food and beverages including alcohol is permitted. Please no glass containers.",
          "No smoking of any kind is allowed on the vessel",
          "The fish will be filleted and in bags so we recommended you bring a cooler with ice to transport your fillets.",
        ]}
      />
    </>
  </Layout>
)

export const Head = () => <Seo title="Salmon" />

export default Salmon
