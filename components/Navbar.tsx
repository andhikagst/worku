'use client';
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/navbar/logo.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

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

  return (
    <header>
      <nav className={`font-plus-jakarta-sans flex justify-between px-11 bg-blue-normal py-2 items-center text-white fixed top-0 left-0 right-0 z-99 transition-all duration-200
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}>
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
