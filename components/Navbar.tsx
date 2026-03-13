import Image from "next/image";
import Link from "next/link";
import pencil_line_y from "@/public/navbar/pencil_line_y.svg";
import logo from "@/public/navbar/logo.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-transparent  flex justify-between px-11 py-4 items-center font-poppins text-white fixed top-0 left-0 right-0 z-99">
        <ul className="flex items-center">
          <li className="text-3xl font-semibold">
            <Link href="/home">
              <Image src={logo} alt="..." width={107} height={85} />
            </Link>
          </li>
        </ul>
        <ul className="flex gap-10 text-body3 items-center">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/course">Course</Link>
          </li>
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="flex gap-3 text-base items-center">
          <li>
            <Link
              className="bg-white rounded-4xl text-blue-normal-hover text-body3 px-5.5 py-2.5 shadow-md"
              href="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="bg-blue-darker rounded-4xl text-white text-body3 px-5.5 py-2.5 shadow-md"
              href="/register"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
