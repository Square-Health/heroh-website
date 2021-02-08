import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "/#features" },
  { label: "Contact", href: "/contact" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <nav className="relative bg-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <MobileMenuButton isOpen={isOpen} onClick={toggle} />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch md:justify-between">
            <Logos />
            <div className="hidden md:block sm:ml-6">
              <div className="flex space-x-4">
                {navItems.map((item, i) => (
                  <NavItem href={item.href} key={i}>
                    {item.label}
                  </NavItem>
                ))}
                <Link href="/get-started" passHref>
                  <ActionButton>Try Free</ActionButton>
                </Link>
                <ActionButton href="https://app.heroh.africa">
                  Sign In
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} />
    </nav>
  )
}

const MobileMenu = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? "block" : "hidden"} md:hidden h-screen`}>
      <div className="px-2 pt-2 pb-3 my-3 space-y-3 border-b border-gray-700">
        {navItems.map((item, i) => (
          <MobileNavItem href={item.href} key={i}>
            {item.label}
          </MobileNavItem>
        ))}
        <MobileNavItem href="/get-started">Try Free</MobileNavItem>
        <MobileNavItem href="https://app.heroh.africa">Sign In</MobileNavItem>
      </div>
    </div>
  )
}

const NavItem = ({ children, href }) => {
  const { asPath } = useRouter()
  const isActive = asPath == href

  const active = "bg-gray-900 text-white"
  const inactive = "text-gray-300 hover:bg-gray-700 hover:text-white"

  return (
    <Link href={href} passHref>
      <a
        className={`${
          isActive ? active : inactive
        } px-3 py-2 rounded-md text-sm font-medium`}
      >
        {children}
      </a>
    </Link>
  )
}

const ActionButton = ({ children, href }: { children: any; href?: string }) => {
  return (
    <a
      href={href}
      className="text-gray-300 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold cursor-pointer"
    >
      {children}
    </a>
  )
}

const MobileNavItem = ({ children, href }) => {
  const { asPath } = useRouter()
  const isActive = asPath == href

  const active = "bg-gray-900 text-white"
  const inactive = "text-gray-300 hover:bg-gray-700 hover:text-white"

  return (
    <Link href={href} passHref>
      <a
        className={`${
          isActive ? active : inactive
        } block px-3 py-2 rounded-md text-lg font-medium`}
      >
        {children}
      </a>
    </Link>
  )
}

const Logos = () => (
  <Link href="/">
    <div className="flex-shrink-0 flex items-center cursor-pointer">
      {/* Small & medium logo */}
      <img
        className="block lg:hidden h-8"
        // src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        src="/heroh.png"
        alt="Workflow"
      />
      {/* Desktop logo */}
      <img
        className="hidden lg:block h-6 w-auto"
        // src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
        src="/heroh.png"
        alt="Workflow"
      />
    </div>
  </Link>
)

const MobileMenuButton = ({ onClick, isOpen }) => {
  return (
    <button
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-expanded="false"
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      {/* Icon when menu is closed */}
      <svg
        className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      {/* Icon when menu is open */}
      <svg
        className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}

export default Navbar
