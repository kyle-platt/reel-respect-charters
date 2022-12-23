import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"
import { layout } from "../styles/_breakpoints"
import { color } from "../styles/_colors"
import { Body16, Heading32, Heading56 } from "../styles/_typography"
import DestinationTile from "./destinationTile"

const Container = styled.div`
  padding: 56px 16px;
  background-color: ${color.blue50};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DestinationCard = styled(DestinationTile)`
  margin-top: 32px; ;
`

const DestinationHeading = styled.h1`
  ${Heading32}
  margin-bottom: 16px;
  color: ${color.white};

  @media ${layout.tabletL}, ${layout.desktop} {
    ${Heading56}
  }
`

const Description = styled.p`
  ${Body16}
  color: ${color.white};
  text-align: center;
`

const Image = styled(StaticImage)`
  @media ${layout.desktop} {
    width: 300px;
  }
`

const DestinationSection = () => {
  return (
    <Container>
      <DestinationHeading>Destinations</DestinationHeading>
      <Description>
        Check out our most popular trips or contact us with your ideas
      </Description>
      <DestinationCard
        title="Walleye & Perch"
        subtitle="Saginaw Bay, Lake Huron"
        description="Reel Respect’s home port is Linwood Beach Marina. A popular sport fishing destination. Saginaw Bay is one of the best walleye fisheries in the world right now. Spring and summer are best for walleye trips and perch in the fall."
      >
        <StaticImage
          alt="Walleye Catch at Linwood"
          loading="lazy"
          quality={95}
          formats={["auto", "webp", "avif"]}
          src="../images/linwood-walleye.jpeg"
        />
      </DestinationCard>
      <DestinationCard
        title="Lake Trout"
        subtitle="Stannard Rock, Lake Superior"
        description="A unique and memorable jig fishing adventure 40 miles off the coast in the icy waters of Lake Superior. Stannard Rock Lighthouse, which has the nickname “Loneliest Place in the World”."
      >
        <StaticImage
          alt="Trout from Lake Superior"
          loading="lazy"
          quality={95}
          formats={["auto", "webp", "avif"]}
          src="../images/becky-trout.jpeg"
        />
      </DestinationCard>
      <DestinationCard
        title="Salmon"
        subtitle="Manistee, Lake Michigan"
        description="Salmon fight like no other fish in Michigan. Reel Respect is ready for the battle. Salmon are great to eat and an adventure to catch! Join us in the late summer to fall for an exciting trip on Lake Michigan."
      >
        <StaticImage
          alt="Salmon from Lake Michigan"
          loading="lazy"
          quality={95}
          formats={["auto", "webp", "avif"]}
          src="../images/salmon-manistee.jpeg"
        />
      </DestinationCard>
      <DestinationCard
        title="Bluefin Tuna"
        subtitle="Gloucester, MA"
        description="Travel to Massachusetts for the fishing adventure of a lifetime. No fish battles like a bluefin tuna. These fish are capable of weighing over 1000 pounds and being over 120 inches long. This is a week long trip so that we can increase your chances on this mighty catch."
      >
        <StaticImage
          alt="Bluefin Tuna"
          loading="lazy"
          formats={["auto", "webp", "avif"]}
          src="../images/bluefin-tuna.jpg"
        />
      </DestinationCard>
    </Container>
  )
}

export default DestinationSection
