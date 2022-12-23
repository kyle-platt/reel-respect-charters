import { Link } from "gatsby"
import * as React from "react"

import styled from "styled-components"
import { layout } from "../styles/_breakpoints"
import { color } from "../styles/_colors"
import {
  Body12,
  Body14,
  Body16,
  Heading12,
  Heading14,
  Heading18,
  Heading24,
  Heading32,
  Heading56,
} from "../styles/_typography"
import Button from "./button"

const Container = styled.div`
  background-color: ${color.white};
  border-radius: 32px;
  text-align: left;

  min-height: 176px;
  width: 100%;
  max-width: 1100px;
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

const TopSection = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;

  @media ${layout.mobile} {
    flex-direction: column;
  }
`

const TextWrapper = styled.div`
  margin-left: 32px;

  @media ${layout.tablet} {
    margin-left: 24px;
  }

  @media ${layout.mobile} {
    margin-left: 0px;
    margin-top: 8px;
  }
`

const Title = styled.h3`
  ${Heading24}
  color: ${color.gray30};

  @media ${layout.tablet} {
    ${Heading18}
  }

  @media ${layout.mobile} {
    ${Heading14}
  }
`

const SubTitle = styled.h4`
  ${Body16}
  color: ${color.gray50};

  @media ${layout.tablet} {
    ${Body16}
  }

  @media ${layout.mobile} {
    ${Body14}
  }
`

const Description = styled.div`
  ${Body16}
  color: ${color.gray30};
  margin-top: 20px;

  @media ${layout.tablet} {
    ${Body14}
    margin-top: 8px;
  }

  @media ${layout.mobile} {
    ${Body12}
    margin-top: 8px;
  }
`

const StyledLink = styled(Link)`
  ${Heading12}
  padding: 12px 48px;
  margin-top: 16px;
  background-color: ${color.blue50};
  color: ${color.white};
  border: none;
  cursor: pointer;
  border-radius: 15px;
  text-decoration: none;
  display: inline-block;

  :hover {
    background-color: ${color.blue60};
  }
`

interface Props {
  title: string
  subtitle: string
  description: string
  className?: string
  children?: JSX.Element
}

const DestinationTile = ({
  title,
  subtitle,
  description,
  children,
  className,
}: Props) => {
  return (
    <Container className={className}>
      <TopSection>
        {children}
        <TextWrapper>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <Description>{description}</Description>
          <StyledLink to="/">View More</StyledLink>
        </TextWrapper>
      </TopSection>
    </Container>
  )
}

export default DestinationTile
