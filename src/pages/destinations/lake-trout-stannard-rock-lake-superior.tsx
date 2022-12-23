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

const Trout = () => (
  <Layout>
    <>
      <TopContent>
        <MainHeading>Lake Trout</MainHeading>
        <Description>Stannard Rock, Lake Superior</Description>
        <BannerImageWrapper>
          <StaticImage
            alt="gloucester"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            src="../../images/stannard-rock.jpeg"
          />
        </BannerImageWrapper>
      </TopContent>
      <AboutDestination description="“The Loneliest Place on Earth” is an amazing lake trout fishing adventure. If you like to jig fish for huge lake trout, this is your place. You want to try to plan on at least three days. This trip is one you will never forget." />
      <PricingSection
        pricingList={[
          {
            tripLength: "Two Day Minimum",
            tripLengthDetails: "8-12 hour days",
            prices: [
              {
                amount: "$3,200",
                details1: "1 – 4 People",
                details2: "includes accommodations",
              },
            ],
          },
          {
            tripLength: "Additional Day",
            prices: [
              {
                amount: "$1,200",
                details1: "1 – 4 People",
                details2: "includes accommodations",
              },
            ],
          },
        ]}
        additionalDetails={[
          "Add $300 per additional guest over 4 people per day (accommodations not included).",
          "Non-refundable package. Rescheduling available up to 48 hours prior to departure. Please check weather conditions.",
        ]}
      />
      <WhatToBringSection
        list={[
          "A Michigan fishing license for everyone 17 years and older is required.",
          "Sunglasses, sun screen and a hat are highly recommended.",
          "A camera to document your fishing memories!",
          "Rain gear or a coat is highly recommended due to the cooler water temperatures and the weather.",
          "Due to the length of the trip, food and beverages are highly recommended. Alcohol is permitted. Please no glass containers.",
          "No smoking of any kind is allowed on the vessel",
          "The fish will be filleted and in bags so we recommended you bring a cooler with ice to transport your fillets.",
        ]}
      />
    </>
  </Layout>
)

export const Head = () => <Seo title="Trout" />

export default Trout
