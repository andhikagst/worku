"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/navbar/logo.svg";
import { useEffect, useRef, useState } from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderAuthSection = () => {
    // Skeleton saat loading
    if (status === "loading") {
      return <div className="w-9 h-9 rounded-full bg-blue-darker animate-pulse" />;
    }

    // Sudah login → tampilkan avatar + dropdown
    if (session) {
      return (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-white text-blue-normal font-bold flex items-center justify-center text-sm">
              {session.user?.name?.charAt(0).toUpperCase()}
            </div>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg py-2 text-blue-normal text-body3">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="font-semibold truncate">{session.user?.name}</p>
                <p className="text-xs text-gray-400 truncate">{session.user?.email}</p>
              </div>
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-50"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      );
    };
    return (
      <>
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
            className="bg-blue-darker rounded-4xl text-white text-body-sm px-5.5 py-2.5 shadow-md"
            href="/register"
          >
            Register
          </Link>
        </li>
      </>
    );
  }


  return (
    <header>
      <nav
        className={`font-plus-jakarta-sans flex justify-between px-11 bg-blue-normal py-2 items-center text-white fixed top-0 left-0 right-0 z-99 transition-all duration-200
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <ul className="flex items-center">
          <li>
            <Link href="/home">
              <Image src={logo} alt="..." width={107} height={85} />
            </Link>
          </li>
        </ul>
        <ul className="flex gap-10 text-body-sm items-center">
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
        <ul className="flex gap-3 text-body-sm items-center">
          {renderAuthSection()}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
