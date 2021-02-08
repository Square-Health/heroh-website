import Layout, { ContentWidth } from "components/Layout"
import Pricing from "components/Pricing"

const PricingPage = () => {
  return (
    <Layout>
      <div className="pt-10 pb-32">
        <ContentWidth>
          <Pricing />
        </ContentWidth>
      </div>
    </Layout>
  )
}

export default PricingPage
