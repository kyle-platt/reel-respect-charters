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

const Walleye = () => (
  <Layout>
    <>
      <TopContent>
        <MainHeading>Walleye & Perch</MainHeading>
        <Description>Saginaw Bay, Lake Huron</Description>
        <BannerImageWrapper>
          <StaticImage
            alt="Lake Huron Sunset"
            loading="eager"
            quality={95}
            width={1000}
            formats={["auto", "webp", "avif"]}
            src="../../images/huron.jpeg"
          />
        </BannerImageWrapper>
      </TopContent>
      <AboutDestination
        description="Reel Respect’s home port is Linwood Beach Marina. A popular sport fishing
      destination. Saginaw Bay is one of the best walleye fisheries in the world
      right now. Spring and summer are best for walleye trips and perch in the
      fall."
      />
      <PricingSection
        pricingList={[
          {
            tripLength: "1/2 Day",
            tripLengthDetails: "Morning or Afternoon (up to 5 hours)",
            prices: [
              {
                amount: "$550",
                details1: "1 – 4 People",
                details2: "Inshore or less than 20 miles",
              },
              {
                amount: "$650",
                details1: "1 – 4 People",
                details2: "Offshore or more than 20 miles",
              },
            ],
          },
          {
            tripLength: "Full Day",
            tripLengthDetails: "up to 8 hours",
            prices: [
              {
                amount: "$800",
                details1: "1 – 4 People",
                details2: "Inshore or less than 20 miles",
              },
              {
                amount: "$900",
                details1: "1 – 4 People",
                details2: "Offshore or more than 20 miles",
              },
            ],
          },
        ]}
        additionalDetails={[
          "Add $100 per additional guest over 4 people.",
          "If you are a repeat customer within the year you get $50 off the subsequent charter.",
          "Fuel surcharge of $50 if fuel prices are over $6.00 per gallon",
        ]}
      />
      <WhatToBringSection
        list={[
          "A Michigan fishing license for everyone 17 years and older is required.",
          "Sunglasses, sun screen and a hat are highly recommended.",
          "A camera to document your fishing memories!",
          "Rain gear or a coat may be need depending on the weather.",
          "Food and beverages including alcohol is permitted. Please no glass containers.",
          "No smoking of any kind is allowed on the vessel",
          "The fish will be filleted and in bags so we recommended you bring a cooler with ice to transport your fillets.",
        ]}
      />
    </>
  </Layout>
)

export const Head = () => <Seo title="Walleye & Perch" />

export default Walleye
