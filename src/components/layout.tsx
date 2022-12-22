import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Reel Respect Charters</footer>
      </div>
    </>
  )
}

export default Layout
