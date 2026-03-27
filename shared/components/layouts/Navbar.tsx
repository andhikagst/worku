"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/navbar/logo.svg";
import { useEffect, useRef, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Menu, X } from "lucide-react"; // 👈 Tambahan import icon hamburger

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 👈 State untuk menu HP

  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
        setVisible(false);
        // Otomatis tutup menu dropdown kalau lagi scroll ke bawah biar rapi
        setDropdownOpen(false); 
        setIsMobileMenuOpen(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderAuthSection = () => {
    if (status === "loading") {
      return (
        <div className="w-9 h-9 rounded-full bg-blue-darker animate-pulse" />
      );
    }

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
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg py-2 text-blue-normal text-body3 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="font-semibold truncate">{session.user?.name}</p>
                <p className="text-xs text-gray-400 truncate">
                  {session.user?.email}
                </p>
              </div>
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-50"
                onClick={() => {
                  setDropdownOpen(false);
                  setIsMobileMenuOpen(false); // Tutup menu HP juga pas diklik
                }}
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
    }
    return (
      <>
        <li>
          <Link
            className="bg-white rounded-4xl text-blue-normal-hover text-body3 px-5.5 py-2.5 shadow-md"
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className="bg-blue-darker rounded-4xl text-white text-body-sm px-5.5 py-2.5 shadow-md"
            href="/register"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Register
          </Link>
        </li>
      </>
    );
  };

  return (
    <header>
      <nav
        className={`font-plus-jakarta-sans bg-blue-normal text-white fixed top-0 left-0 right-0 z-[99] transition-transform duration-300 ease-in-out
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* === CONTAINER UTAMA (Selalu Kelihatan di Atas) === */}
        <div className="flex justify-between items-center px-6 lg:px-11 py-2 w-full">
          {/* LOGO */}
          <ul className="flex items-center">
            <li>
              <Link href="/home">
                <Image src={logo} alt="WorkU Logo" width={107} height={85} className="w-[80px] lg:w-[107px] h-auto" />
              </Link>
            </li>
          </ul>

          {/* TOMBOL HAMBURGER (Hanya muncul di HP) */}
          <button
            className="lg:hidden text-white focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* MENU DESKTOP (Sembunyi di HP, Muncul di Laptop) */}
          <ul className="hidden lg:flex gap-10 text-body-sm items-center">
            <li><Link href="/home" className="hover:text-gray-200">Home</Link></li>
            <li><Link href="/course" className="hover:text-gray-200">Course</Link></li>
            <li><Link href="/features" className="hover:text-gray-200">Features</Link></li>
            <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
          </ul>

          {/* AUTH DESKTOP (Sembunyi di HP) */}
          <ul className="hidden lg:flex gap-3 text-body-sm items-center">
            {renderAuthSection()}
          </ul>
        </div>

        {/* === DROPDOWN MENU MOBILE === */}
        <div
          className={`lg:hidden flex flex-col overflow-hidden transition-all duration-300 ease-in-out bg-blue-normal
            ${isMobileMenuOpen ? "max-h-[500px] opacity-100 py-6 border-t border-white/10" : "max-h-0 opacity-0 py-0"}
          `}
        >
          <ul className="flex flex-col gap-6 text-center text-body-sm">
            <li><Link href="/home" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link href="/course" onClick={() => setIsMobileMenuOpen(false)}>Course</Link></li>
            <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
          
          {/* Garis Pembatas Auth di HP */}
          <div className="mt-6 pt-6 border-t border-white/20 mx-8">
            <ul className="flex justify-center gap-4 text-body-sm items-center">
              {renderAuthSection()}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;