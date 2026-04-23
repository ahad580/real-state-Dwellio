"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  User,
  MapPin,
  Building2,
  HeartHandshake,
  House,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (href) => pathname === href;

  return (
    <>
      <header className={`dw-navbar ${isScrolled ? "dw-navbar-scrolled" : ""}`}>
        <div className="dw-navbar-shell">
          <div className="dw-nav-inner">
            <Link href="/login" className="dw-logo" onClick={closeMenu}>
              <img src="/lgtst.png" alt="Dwellio" />
            </Link>

            <nav className="dw-nav-links">
              <Link
                href="/"
                className={`dw-nav-link ${isActive("/") ? "active" : ""}`}
              >
                <House size={18} />
                <span>Home</span>
              </Link>

              <Link
                href="/buy"
                className={`dw-nav-link ${isActive("/buy") ? "active" : ""}`}
              >
                <Building2 size={18} />
                <span>Buy</span>
              </Link>

              <Link
                href="/rent"
                className={`dw-nav-link ${isActive("/rent") ? "active" : ""}`}
              >
                <MapPin size={18} />
                <span>Rent</span>
              </Link>

              <Link
                href="/sell"
                className={`dw-nav-link ${isActive("/sell") ? "active" : ""}`}
              >
                <HeartHandshake size={18} />
                <span>Sell</span>
              </Link>
            </nav>

            <div className="dw-nav-actions">
              <Link href="/list-property" className="dw-host-link">
                List Property
              </Link>

              <Link
                href="/account"
                className="dw-icon-btn dw-desktop-only"
                aria-label="Profile"
              >
                <User size={18} />
              </Link>

              <button
                type="button"
                className="dw-icon-btn dw-mobile-menu-btn"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          <div
            className={`dw-search-wrap ${
              isScrolled ? "dw-search-wrap-hidden" : ""
            }`}
          >
            <div className="dw-search-bar">
              <div className="dw-search-item">
                <label>Location</label>
                <input type="text" placeholder="Search city or area" />
              </div>

              <div className="dw-divider" />

              <div className="dw-search-item">
                <label>Property Type</label>
                <input type="text" placeholder="Apartment, House, Plot" />
              </div>

              <div className="dw-divider" />

              <div className="dw-search-item">
                <label>Budget</label>
                <input type="text" placeholder="Enter your budget" />
              </div>

              <button
                type="button"
                className="dw-search-btn"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`dw-mobile-overlay ${
          mobileMenuOpen ? "dw-mobile-overlay-show" : ""
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`dw-mobile-drawer ${
          mobileMenuOpen ? "dw-mobile-drawer-open" : ""
        }`}
      >
        <div className="dw-mobile-drawer-top">
          <Link href="/" className="dw-mobile-logo" onClick={closeMenu}>
            <img src="/logo-01.png" alt="Dwellio" />
          </Link>

          <button
            type="button"
            className="dw-icon-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="dw-mobile-nav">
          <Link href="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <Link href="/buy" className={isActive("/buy") ? "active" : ""}>
            Buy
          </Link>
          <Link href="/rent" className={isActive("/rent") ? "active" : ""}>
            Rent
          </Link>
          <Link href="/sell" className={isActive("/sell") ? "active" : ""}>
            Sell
          </Link>
          <Link
            href="/list-property"
            className={isActive("/list-property") ? "active" : ""}
          >
            List Property
          </Link>
          <Link href="/account" className={isActive("/account") ? "active" : ""}>
            Account
          </Link>
        </nav>
      </aside>
    </>
  );
} 