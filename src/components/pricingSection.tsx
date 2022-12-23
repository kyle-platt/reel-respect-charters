import * as React from "react"
import styled from "styled-components"
import { layout } from "../styles/_breakpoints"
import { color } from "../styles/_colors"
import {
  Body14,
  Body16,
  Heading16,
  Heading20,
  Heading24,
  Heading32,
} from "../styles/_typography"

const SecondaryHeading = styled.h2`
  ${Heading20}
  margin-bottom: 16px;
  color: ${color.white};
  text-align: center;

  @media ${layout.tablet}, ${layout.desktop} {
    ${Heading32}
  }
`

const ThirdHeading = styled.h3`
  ${Heading16}
  color: ${color.gray30};

  @media ${layout.tablet}, ${layout.desktop} {
    ${Heading24}
  }
`

const Wrapper = styled.div`
  padding: 16px;
  background-color: ${color.blue50};

  @media ${layout.tabletL} {
    padding: 16px 64px;
  }

  @media ${layout.desktop} {
    padding: 32px 128px;
  }
`
const Container = styled.div`
  background-color: ${color.white};
  border-radius: 32px;
  text-align: center;
  margin: 16px;

  min-height: 216px;
  width: 100%;
  max-width: 350px;
  padding: 24px 32px;

  @media ${layout.tablet} {
    min-height: 152px;
    padding: 24px;
    border-radius: 16px;
  }

  @media ${layout.mobile} {
    min-height: 118px;
    padding: 16px;
    border-radius: 8px;
  }
`

const Description = styled.p`
  ${Body14}
  color: ${color.gray50};

  @media ${layout.tabletL}, ${layout.desktop} {
    ${Body16}
  }
`

const WhiteDescription = styled(Description)`
  color: ${color.white};
  text-align: center;
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${layout.tabletL} {
    justify-content: space-evenly;
    flex-direction: row;
  }

  @media ${layout.desktop} {
    justify-content: space-evenly;
    flex-direction: row;
  }
`

const SectionWrapper = styled.div`
  margin-bottom: 16px;
`
interface PriceDetails {
  amount: string
  details1?: string
  details2?: string
}

interface PriceBlock {
  tripLength: string
  tripLengthDetails?: string
  prices: PriceDetails[]
}

interface Props {
  pricingList: PriceBlock[]
  additionalDetails: string[]
}

const PricingSection = ({ pricingList, additionalDetails }: Props) => (
  <Wrapper>
    <SecondaryHeading>Pricing</SecondaryHeading>
    <CardWrapper>
      {pricingList.map(pricingBlock => (
        <Container>
          <SectionWrapper>
            <ThirdHeading>{pricingBlock.tripLength}</ThirdHeading>
            {pricingBlock.tripLengthDetails && (
              <Description>{pricingBlock.tripLengthDetails}</Description>
            )}
          </SectionWrapper>
          {pricingBlock.prices.map(price => (
            <SectionWrapper>
              <ThirdHeading>{price.amount}</ThirdHeading>
              {price.details1 && <Description>{price.details1}</Description>}
              {price.details2 && <Description>{price.details2}</Description>}
            </SectionWrapper>
          ))}
        </Container>
      ))}
    </CardWrapper>
    {additionalDetails.map(detail => (
      <WhiteDescription>{detail}</WhiteDescription>
    ))}
  </Wrapper>
)

export default PricingSection
