import * as React from "react"
import styled from "styled-components"
import { layout } from "../styles/_breakpoints"
import { color } from "../styles/_colors"
import { Body14, Body16, Heading20, Heading32 } from "../styles/_typography"

const SecondaryHeading = styled.h2`
  ${Heading20}
  margin-bottom: 16px;
  color: ${color.gray30};

  @media ${layout.tablet}, ${layout.desktop} {
    ${Heading32}
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

const ListWrapper = styled.ul`
  margin-left: 16px;
`

const ListItem = styled.li`
  ${Body14}
  color: ${color.gray50};
  list-style-type: circle;
  margin-bottom: 4px;

  @media ${layout.tablet}, ${layout.desktop} {
    ${Body16}
  }
`

interface Props {
  list: string[]
}

const WhatToBringSection = ({ list }: Props) => (
  <BlockWrapper>
    <SecondaryHeading>What To Bring</SecondaryHeading>
    <ListWrapper>
      {list.map((item, i) => (
        <ListItem key={i}>{item}</ListItem>
      ))}
    </ListWrapper>
  </BlockWrapper>
)

export default WhatToBringSection
