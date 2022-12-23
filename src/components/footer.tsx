import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"
import { color } from "../styles/_colors"
import { Body14, Body16 } from "../styles/_typography"

const StyledFooter = styled.footer`
  ${Body14}
  color: ${color.gray30};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 16px;
`

const LinkWrapper = styled.div`
  margin: 8px;
`

const StyledLink = styled(Link)`
  ${Body16}
  margin: 8px;
  color: ${color.gray30};
  text-decoration: none;

  :hover {
    color: ${color.blue50};
  }
`

const LogoWrapper = styled.div`
  margin-bottom: 8px;
`

const Footer = () => (
  <StyledFooter>
    <LogoWrapper>
      <Link to="/">
        <StaticImage
          alt="Reel Respect Charters logo"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          height={120}
          src="../images/reel-respect-logo.png"
        />
      </Link>
    </LogoWrapper>
    <LinkWrapper>
      <StyledLink to="/">FAQ</StyledLink>
    </LinkWrapper>
    <LinkWrapper>
      <StyledLink to="/">Contact Us</StyledLink>
    </LinkWrapper>
    <LinkWrapper>
      <Link to="https://www.facebook.com/reelrespectcharters/">
        <StaticImage
          alt="Facebook"
          loading="lazy"
          quality={95}
          formats={["auto", "webp", "avif"]}
          height={30}
          src="../images/icons/facebook.png"
          style={{ margin: 8 }}
        />
      </Link>
    </LinkWrapper>
    © {new Date().getFullYear()} Reel Respect Charters
  </StyledFooter>
)

export default Footer
