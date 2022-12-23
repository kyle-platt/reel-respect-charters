import * as React from "react"
import styled from "styled-components"
import { layout } from "../styles/_breakpoints"
import { color } from "../styles/_colors"
import {
  Body14,
  Body16,
  Heading16,
  Heading20,
  Heading32,
} from "../styles/_typography"

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

const BlockWrapper = styled.div`
  padding: 16px;

  @media ${layout.tablet} {
    padding: 16px 64px;
  }

  @media ${layout.desktop} {
    padding: 32px 128px;
  }
`

interface Props {
  description: string
}

const AboutDestination = ({ description }: Props) => (
  <BlockWrapper>
    <SecondaryHeading>About the Destination</SecondaryHeading>
    <Description>{description}</Description>
  </BlockWrapper>
)

export default AboutDestination
