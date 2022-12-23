import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { layout } from "../styles/_breakpoints"
import { color } from "../styles/_colors"
import {
  Body14,
  Body16,
  Heading20,
  Heading24,
  Heading32,
  Heading40,
} from "../styles/_typography"

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

const SecondaryHeading = styled.h2`
  ${Heading20}
  margin-bottom: 16px;
  color: ${color.gray30};

  @media ${layout.tablet}, ${layout.desktop} {
    ${Heading32}
  }
`

const Description = styled.p`
  ${Body14}
  color: ${color.gray50};

  @media ${layout.tablet}, ${layout.desktop} {
    ${Body16}
  }
`

const FaqSection = styled.div`
  padding: 16px;

  @media ${layout.tablet} {
    padding: 32px 64px;
  }

  @media ${layout.desktop} {
    padding: 32px 200px;
  }
`

const Faq = () => (
  <Layout>
    <>
      <TopContent>
        <MainHeading>Frequently Asked Questions (FAQ)</MainHeading>
        <Description>
          Feel free to reach out if you have any other questions.
        </Description>
      </TopContent>
      <FaqSection>
        <SecondaryHeading>What is your payment policy?</SecondaryHeading>
        <Description>
          There is a $100 deposit to reserve your scheduled charter date. The
          deposit is refundable up to 1 week before the trip. Full payment upon
          completion of the trip. Cash or check for deposit and cash only upon
          completion of the charter.
        </Description>
      </FaqSection>
      <FaqSection>
        <SecondaryHeading>What happens if the weather is bad?</SecondaryHeading>
        <Description>
          Bad weather prevailing, the Captain will contact you for reschedule.
        </Description>
      </FaqSection>
    </>
  </Layout>
)

export const Head = () => <Seo title="FAQ" />

export default Faq
