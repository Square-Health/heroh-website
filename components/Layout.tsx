import Head from 'next/head'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export const Layout = ({ children, bg = '' }) => {
  return (
    <div className={bg}>
      <Head>
        <title>Heroh | Occupational Health Suite</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://heroh.africa/screen.png" />
        <meta property="og:description" content="Occupational Health Suite." />
        <meta
          name="description"
          // content="Heroh is the best platform for managing the health of your clients and employees. We handle thousands of records every year for forward thinking businesses in Africa."
          content="An Occupational Health suite of tools that any practice or clinic can afford and which creates a network of independent practices, collectively outclassing the national service providers."
        ></meta>
        <meta
          property="og:site_name"
          content="Heroh | Occupational Health Suite"
        />
        <meta property="og:title" content="Heroh | Occupational Health Suite" />
        <meta property="og:url" content="https:/heroh.africa" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export const ContentWidth = ({ children }) => (
  <div className="relative max-w-6xl px-2 mx-auto sm:px-6 lg:px-8">
    {children}
  </div>
)

export const Dark = () => (
  <div className="absolute w-full transform -skew-y-3 bg-gray-800 h-3/5 md:h-4/5 lg:h-5/6 xl:h-5/6 2xl:h-1/2 -top-0" />
)

export default Layout
