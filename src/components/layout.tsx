import * as React from "react"

import Header from "./header"
import Footer from "./footer"

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
        <Footer />
      </div>
    </>
  )
}

export default Layout
