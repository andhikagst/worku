import Link from "next/link"

const Navbar = () => {
  return (
    <header className="shadow-md">
      <nav className="bg-gray-400 flex justify-between px-8 py-4 items-center">
        <ul>
          <li className="text-4xl font-bold">
            <Link href="/home">Worku</Link>
          </li>
        </ul>
        <ul className="flex space-x-2 text-lg font-semibold">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar