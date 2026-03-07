import Image from "next/image";
import Link from "next/link";
import line_y from "@/public/navbar/pencil-line-y.svg"

const Navbar = () => {
  return (
    <header>
      <nav className="bg-[#B3B3B3] flex justify-between px-11 py-8 items-center font-plus-jakarta-sans border-b-white border-b-2 text-white">
        <ul className="flex items-center">
          <li className="text-3xl font-semibold">
            <Link href="/home">Logo</Link>
          </li>
        </ul>
        <ul className="flex gap-10 text-base items-center">
          <li >
            <Link href="/career-discovery">CareerDiscovery</Link>
          </li>
          <li>
            <Link href="/course">Course</Link>
          </li>
          <li>
            <Link href="/worku-ai">WorkU AI</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>
        <ul className="flex gap-2 text-base items-center">
          <li>
            <Image src={line_y} alt=""/>
          </li>
          <li>
            <Link className="underline" href="/register">Register</Link>
          </li>
          <li>
            <Link className="px-5 py-2.5 bg-white rounded-sm text-black" href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
