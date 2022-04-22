import Link from 'next/link'

const Pricing = () => (
  <div
    id="pricing"
    className="grid grid-cols-1 lg:grid-cols-4 bg-gray-800 rounded-xl text-white overflow-hidden"
  >
    <div className="p-10 w-full col-span-1 lg:col-span-3 flex flex-col space-y-3">
      <h2 className="text-4xl lg:text-3xl font-extrabold font-fira text-gray-100">
        Pricing
      </h2>
      <p className="text-gray-300 font-medium text-md sm:text-xl sm:max-w-4xl">
        If you operate in occupational health, this is the plan for you.
        Includes every feature we offer plus unlimited clients, unlimited teams,
        and no per user fees.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl gap-y-2">
        <Dl>
          <Dt>Pay for what you use</Dt>
          <Dt>No minimums</Dt>
          <Dt>No maximums</Dt>
          <Dt>Free for 30 days</Dt>
        </Dl>
        <Dl>
          <Dt>Includes pre-employment COF's</Dt>
          <Dt>Includes periodicals COF's</Dt>
          <Dt>Includes exit eCOF's</Dt>

          <Dt>All interventions free of charge</Dt>
          {/* <Dt>Volume discounts available</Dt> */}
        </Dl>
      </div>
    </div>
    <div className="bg-gray-700 py-10 flex flex-col space-y-3 items-center">
      <h3 className="text-6xl font-extrabold font-fira text-gray-100">3$</h3>
      <h4 className="text-3xl lg:text-2xl font-extrabold font-fira text-gray-100">
        Per certificate
      </h4>

      <p className="text-gray-200 font-medium font-fira text-sm lg:text-base lg:max-w-4xl">
        (R50.00 in South Africa)
      </p>

      <Link href="/get-started" passHref>
        <a className="bg-gray-800 py-3 rounded-full px-6 font-bold cursor-pointer text-gray-50 text-2xl hover:bg-gray-900">
          Get started
        </a>
      </Link>
      <Link href="/contact" passHref>
        <a className="italic font-medium text-center text-lg underline">
          Volume discounts apply.
        </a>
      </Link>
    </div>
  </div>
)

// const Pricing = () => (
//   <div
//     id="pricing"
//     className="flex flex-col space-y-10 w-full items-center text-center mt-10 lg:mt-20"
//   >
//     <div className="flex flex-col space-y-5">
//       <h3 className="text-4xl md:text-4xl lg:text-5xl font-extrabold font-fira text-gray-800 underline">
//         Pricing: 3$ per certificate
//       </h3>

//       <p className="text-gray-800 font-medium font-fira text-lg sm:text-2xl sm:max-w-4xl">
//         R50.00 in South Africa
//       </p>
//     </div>
//     <p className="text-gray-700 font-medium text-md sm:text-xl sm:max-w-4xl">
//       If you operate in occupational health, this is the plan for you. Includes
//       every feature we offer plus unlimited clients, unlimited teams, and no per
//       user fees.
//     </p>

//     <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl">
//       <Dl>
//         <Dt>Pay for what you use</Dt>
//         <Dt>No minimums</Dt>
//         <Dt>No maximums</Dt>
//         <Dt>Free for 30 days</Dt>
//       </Dl>
//       <Dl>
//         <Dt>Includes pre-employment COF's</Dt>
//         <Dt>Includes periodicals COF's</Dt>
//         <Dt>Includes exit eCOF's</Dt>

//         <Dt>All interventions free of charge</Dt>
//         {/* <Dt>Volume discounts available</Dt> */}
//       </Dl>
//     </div>

//     <Link href="/get-started" passHref>
//       <a className="bg-gray-800 py-3 rounded-full px-6 font-bold cursor-pointer text-gray-50 text-2xl hover:bg-gray-700">
//         Get started
//       </a>
//     </Link>

//     <p className="italic font-medium">
//       Volume discounts apply, you can{' '}
//       <Link href="/contact" passHref>
//         <a className="underline font-semibold">contact us</a>
//       </Link>{' '}
//       if you'd like to find out more.
//     </p>
//   </div>
// )

const Dl = ({ children }) => (
  <dl className="text-gray-700 font-semibold text-md sm:text-xl space-y-2">
    {children}
  </dl>
)

const Dt = ({ children }) => (
  <dt className="flex flex-row items-center space-x-2 text-gray-100">
    <svg
      className="h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="orange"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-left">{children}</span>
  </dt>
)

export default Pricing
