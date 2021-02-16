import Head from "next/head"
import Navbar from "components/Navbar"
import Footer from "components/Footer"

export const Layout = ({ children, bg = "" }) => {
  return (
    <div className={bg}>
      <Head>
        <title>Heroh | Occupational Health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export const ContentWidth = ({ children }) => (
  <div className="relative max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
    {children}
  </div>
)

export const Dark = () => (
  <div className="absolute bg-gray-800 h-3/5 md:h-4/5 lg:h-5/6 xl:h-5/6 2xl:h-1/2 w-full transform -skew-y-3 -top-0" />
)

export default Layout
