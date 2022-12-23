import * as React from "react"
import styled from "styled-components"
import { Body14, Body16, Heading32, Heading56 } from "../styles/_typography"
import { color } from "../styles/_colors"
import { layout } from "../styles/_breakpoints"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 32px 0;

  @media ${layout.tabletL}, ${layout.desktop} {
    flex-direction: row;
    padding: 56px 0 0;
  }
`

const Content = styled.div`
  padding: 16px 16px 0 16px;
  @media ${layout.tabletL} {
    width: 100%;
  }

  @media ${layout.desktop} {
    width: 70%;
  }
`

const Heading = styled.h1`
  ${Heading32}
  margin-bottom: 16px;
  color: ${color.gray30};

  @media ${layout.tabletL}, ${layout.desktop} {
    ${Heading56}
  }
`

const Description = styled.p`
  ${Body14}
  color: ${color.gray50};

  @media ${layout.tabletL}, ${layout.desktop} {
    ${Body16}
  }
`

interface Props {
  title: string
  description: string
  className?: string
  children?: JSX.Element
}

const Hero = ({ title, description, className, children }: Props) => {
  return (
    <Wrapper className={className}>
      {children}
      <Content>
        <Heading>{title}</Heading>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  )
}

export default Hero
