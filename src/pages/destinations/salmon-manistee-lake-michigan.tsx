import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Salmon = () => (
  <Layout>
    <>
      <h1>Salmon</h1>
      <p>Welcome to the page</p>
    </>
  </Layout>
)

export const Head = () => <Seo title="Salmon" />

export default Salmon
