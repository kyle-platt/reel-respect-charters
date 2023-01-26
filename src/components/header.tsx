import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { color } from "../styles/_colors"
import { Body14, Body16, Heading16 } from "../styles/_typography"
import { layout } from "../styles/_breakpoints"
import Button from "./button"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`

const DropdownContent = styled.div`
  position: absolute;
  background-color: ${color.white};
  min-width: 210px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  border-radius: 15px;
  padding: 8px;
  margin-top: 16px;

  @media ${layout.tablet}, ${layout.desktop} {
    min-width: 300px;
  }
`

const DropdownLink = styled(Link)`
  ${Body16}
  padding: 16px 8px;
  text-decoration: none;
  display: block;
  color: ${color.gray30};
  border-radius: 15px;

  :hover {
    background-color: ${color.gray90};
  }
`

const SecondaryText = styled.div`
  ${Body14}
  color: ${color.gray50};
`

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [])

  return (
    <StyledHeader>
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
      <Dropdown ref={ref}>
        <Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          Destinations
        </Button>
        {isDropdownOpen && (
          <DropdownContent>
            <DropdownLink to="/destinations/walleye-perch-saginaw-bay-lake-huron">
              Walleye & Perch
              <SecondaryText>Saginaw Bay, Lake Huron</SecondaryText>
            </DropdownLink>
            <DropdownLink to="/destinations/lake-trout-stannard-rock-lake-superior">
              Lake Trout
              <SecondaryText>Stannard Rock, Lake Superior</SecondaryText>
            </DropdownLink>
            <DropdownLink to="/destinations/salmon-manistee-lake-michigan">
              Salmon
              <SecondaryText>
                Manistee or Ludington, Lake Michigan
              </SecondaryText>
            </DropdownLink>
            <DropdownLink to="/destinations/bluefin-tuna-gloucester-ma">
              Bluefin Tuna
              <SecondaryText>Gloucester, MA</SecondaryText>
            </DropdownLink>
            <DropdownLink to="/destinations/create-your-own-fishing-adventure">
              Create Your Own Fishing Adventure
            </DropdownLink>
          </DropdownContent>
        )}
      </Dropdown>
    </StyledHeader>
  )
}

export default Header
