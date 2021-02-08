import Link from "next/link"

const Pricing = () => (
  <div
    id="pricing"
    className="flex flex-col space-y-10 w-full items-center text-center mt-10 lg:mt-20"
  >
    <h3 className="text-4xl md:text-4xl lg:text-5xl font-extrabold font-fira text-gray-800 underline">
      Pricing: 3$ per certificate
    </h3>

    <p className="text-gray-700 font-medium text-md sm:text-xl sm:max-w-4xl">
      If you operate in occupational health, this is the plan for you. Includes
      every feature we offer plus unlimited clients, unlimited teams, and no per
      user fees.
    </p>

    <dl className="text-gray-700 font-semibold text-md sm:text-xl space-y-2">
      <Dt>Pay for what you use</Dt>
      <Dt>No minimums</Dt>
      <Dt>No maxiums</Dt>
      <Dt>Free for 30 days</Dt>
    </dl>

    <Link href="/get-started" passHref>
      <a className="bg-gray-800 py-3 rounded-full px-6 font-bold cursor-pointer text-gray-50 text-2xl hover:bg-gray-700">
        Get started
      </a>
    </Link>
  </div>
)

const Dt = ({ children }) => (
  <dt className="flex flex-row items-center space-x-2">
    <svg
      className="h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span>{children}</span>
  </dt>
)

export default Pricing
