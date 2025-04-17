"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="glass sticky top-0 z-50 shadow-glow">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-display text-spirit-violet hover:text-spirit-purple transition-all duration-300 animate-float">
                Blessing Weaver
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link 
                href="/" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover-scale ${
                  pathname === '/' 
                    ? 'border-spirit-gold text-spirit-text' 
                    : 'border-transparent text-spirit-text/70 hover:text-spirit-text'
                }`}
              >
                <span className="relative overflow-hidden">
                  <span className="relative z-10">Home</span>
                  {pathname === '/' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-spirit-gold to-spirit-orange"></span>
                  )}
                </span>
              </Link>
              <Link 
                href="/saved" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover-scale ${
                  pathname === '/saved' 
                    ? 'border-spirit-gold text-spirit-text' 
                    : 'border-transparent text-spirit-text/70 hover:text-spirit-text'
                }`}
              >
                <span className="relative overflow-hidden">
                  <span className="relative z-10">Saved</span>
                  {pathname === '/saved' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-spirit-gold to-spirit-orange"></span>
                  )}
                </span>
              </Link>
              <Link 
                href="/about" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover-scale ${
                  pathname === '/about' 
                    ? 'border-spirit-gold text-spirit-text' 
                    : 'border-transparent text-spirit-text/70 hover:text-spirit-text'
                }`}
              >
                <span className="relative overflow-hidden">
                  <span className="relative z-10">About</span>
                  {pathname === '/about' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-spirit-gold to-spirit-orange"></span>
                  )}
                </span>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-spirit-text/70 hover:text-spirit-text hover:bg-spirit-purple/10 focus:outline-none transition-all"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden glass">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block px-4 py-2 text-base font-medium hover:bg-spirit-purple/10 ${
                pathname === '/'
                  ? 'text-spirit-gold'
                  : 'text-spirit-text/70 hover:text-spirit-text'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/saved"
              className={`block px-4 py-2 text-base font-medium hover:bg-spirit-purple/10 ${
                pathname === '/saved'
                  ? 'text-spirit-gold'
                  : 'text-spirit-text/70 hover:text-spirit-text'
              }`}
              onClick={toggleMenu}
            >
              Saved
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-2 text-base font-medium hover:bg-spirit-purple/10 ${
                pathname === '/about'
                  ? 'text-spirit-gold'
                  : 'text-spirit-text/70 hover:text-spirit-text'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 