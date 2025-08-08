'use client';

import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Intellecta - AI-Powered Teaching Assisstant</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <Link
            href={'/'}
            className="text-foreground hover:text-golden transition-colors duration-300 font-medium font-comic py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href={'/companions'}
            className="text-foreground hover:text-golden transition-colors duration-300 font-medium font-comic py-2"
            onClick={() => setIsOpen(false)}
          >
            Companions
          </Link>
          <Link
            href={'/my-journey'}
            className="text-foreground hover:text-golden transition-colors duration-300 font-medium font-comic py-2"
            onClick={() => setIsOpen(false)}
          >
            My Journey
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="outline"
          size="sm"
          className="active:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Logo */}
      <Link href={'/'}>
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src={'/images/logo.png'}
            alt="logo"
            width={130}
            height={50}
          />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="flex items-center gap-6">
        <div className="hidden md:block">
          <NavItems />
        </div>
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
