import Layout, { ContentWidth, Dark } from "components/Layout"
import Contact from "components/Contact"
import Pricing from "components/Pricing"
import FeatureGrid from "components/Features"

const Home = () => {
  return (
    <Layout>
      <Dark />
      <ContentWidth>
        <div className="flex flex-col items-center pt-20 mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-fira text-gray-50">
            Occupational Health Suite
          </h2>

          <p className="text-gray-300 font-medium text-md sm:text-lg max-w-md sm:max-w-xl">
            <b>Heroh</b> is the best platform for managing the health of your
            clients and employees. We handle <b>thousands of records</b> every
            year for forward thinking businesses in Africa.
          </p>
        </div>
        <HerohImage />
      </ContentWidth>
      <ContentWidth>
        <Definition />
      </ContentWidth>

      <div className="flex flex-col space-y-14 sm:space-y-36 max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mt-28">
        <InfoSectionLeft
          title="Manage Electronic Health Records"
          imgSrc="/ehr.png"
        >
          Create, update, monitor and track Electronic Health Records for your
          clients or employees and easily set permissions and alerts for your OH
          team.
        </InfoSectionLeft>
        <InfoSectionRight
          title="Complete standardized occupational health assessments"
          imgSrc="/form.png"
        >
          Assessments work like you're used to, but now they're faster, more
          secure and smart enough to help you complete more assessments faster.
        </InfoSectionRight>
        <InfoSectionLeft
          title="Integrate with existing systems"
          imgSrc="/upload.png"
        >
          Scan and upload your existing files along digital forms.
          <br />
          <br />
          We'll keep them safe for you to use and reference later.
        </InfoSectionLeft>
      </div>

      <ContentWidth>
        <FeatureGrid />
        <Pricing />
      </ContentWidth>
      <div className="bg-gray-50 mt-16">
        <Contact />
      </div>

      {/* <WhatIsACertificate /> */}
    </Layout>
  )
}

const Definition = () => (
  <div className="flex flex-col space-y-10 w-full items-center text-center mt-10 lg:mt-4">
    <h3 className="text-4xl md:text-4xl lg:text-5xl font-extrabold font-fira text-gray-800">
      What is Heroh?
    </h3>
    <p className="text-gray-700 font-medium text-md sm:text-xl sm:max-w-4xl">
      <b>Heroh</b> is a collection of tools used by occupational health
      practices and their clients to manage and track employee health by issue
      of a <b>Certificate of Fitness</b>, the industry standard document that
      certifies an individual as being fit to engage in a particular work
      activity or industrial project.
    </p>
  </div>
)

const InfoSectionLeft = ({ title, imgSrc, children }) => (
  <div className="flex flex-col md:flex-row space-x-0 md:space-x-20 items-center">
    <div className="flex flex-col flex-1 space-y-5 md:space-y-10 order-last md:order-first mt-12 md:mt-0">
      <h3 className="text-4xl md:text-5xl font-black text-gray-800">{title}</h3>
      <p className="text-2xl text-gray-700">{children}</p>
    </div>
    <div className="flex-1 order-first md:order-last">
      <img
        src={imgSrc}
        className="shadow-lg rounded-xl transform rotate-0 md:rotate-2 w-3/4 md:w-auto"
        alt="Image of Heroh"
      />
    </div>
  </div>
)

const InfoSectionRight = ({ title, imgSrc, children }) => (
  <div className="flex flex-col md:flex-row space-x-0 md:space-x-20 items-center">
    <div className="flex-1">
      <img
        src={imgSrc}
        className="shadow-lg rounded-xl transform rotate-0 md:-rotate-2 w-3/4 md:w-auto"
        alt="Image of Heroh"
      />
    </div>
    <div className="flex flex-col flex-1 space-y-5 md:space-y-10 mt-12 md:mt-0">
      <h3 className="text-4xl md:text-5xl font-black text-gray-800">{title}</h3>
      <p className="text-2xl text-gray-700">{children}</p>
    </div>
  </div>
)

const HerohImage = () => (
  <img className="w-4/5 mx-auto" src="/screen.png" alt="Image of Heroh" />
)

// const WhatIsACertificate = () => (
//   <div className="bg-gray-700 rounded-2xl py-5 px-6 space-y-5 shadow-lg border border-red-400">
//     <div className="flex flex-row justify-between text-gray-100 border-b">
//       <h4 className="text-xl font-extrabold border-gray-50 pb-4">
//         What's a certificate?
//       </h4>
//       <svg
//         className="text-gray-100 h-4"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 20 20"
//         fill="currentColor"
//       >
//         <path
//           fillRule="evenodd"
//           d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </div>
//     <p className="text-gray-200">
//       (COF) is a document that certifies an individual or organization as being
//       fit or competent to engage in a particular work activity or industrial
//       project. They are issued by government agencies or through
//       government-recognized third parties.
//     </p>
//   </div>
// )

export default Home
