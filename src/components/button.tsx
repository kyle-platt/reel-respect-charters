import * as React from "react"
import styled from "styled-components"
import { color } from "../styles/_colors"
import { Heading16 } from "../styles/_typography"

const Btn = styled.button`
  ${Heading16}
  background-color: ${color.blue50};
  color: ${color.white};
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 15px;

  :hover {
    background-color: ${color.blue60};
  }
`

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...props }: Props) => <Btn {...props} />

export default Button
