"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function AccountPage() {
  const [tab, setTab] = useState("signin");

  return (
    <main className="auth-page">
      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-top">
            <span className="auth-badge">Welcome to Dwellio</span>
            <h1>{tab === "signin" ? "Sign in to your account" : "Create your account"}</h1>
            <p>
              {tab === "signin"
                ? "Access saved homes, property updates, and your account preferences."
                : "Join Dwellio to save listings, track homes, and manage your property journey."}
            </p>
          </div>

          <div className="auth-tabs">
            <button
              type="button"
              className={tab === "signin" ? "active" : ""}
              onClick={() => setTab("signin")}
            >
              Sign In
            </button>
            <button
              type="button"
              className={tab === "signup" ? "active" : ""}
              onClick={() => setTab("signup")}
            >
              Sign Up
            </button>
          </div>

          <div className="auth-socials">
            <button type="button" className="auth-social-btn">
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.652 32.657 29.193 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.955 3.045l5.657-5.657C34.053 6.053 29.277 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.955 3.045l5.657-5.657C34.053 6.053 29.277 4 24 4c-7.682 0-14.347 4.337-17.694 10.691z"/>
                <path fill="#4CAF50" d="M24 44c5.176 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.152 35.091 26.676 36 24 36c-5.173 0-9.625-3.332-11.291-7.946l-6.522 5.025C9.5 39.556 16.227 44 24 44z"/>
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.793 2.244-2.231 4.166-4.084 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <button type="button" className="auth-social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.365 1.43c0 1.14-.43 2.19-1.14 2.94-.77.82-2.02 1.45-3.1 1.36-.14-1.09.39-2.24 1.12-3 .74-.77 2.02-1.33 3.12-1.3.03 0 .06 0 .01 0zm3.94 16.27c-.48 1.1-.71 1.59-1.33 2.56-.87 1.35-2.1 3.04-3.63 3.05-1.36.01-1.71-.89-3.56-.88-1.85.01-2.24.9-3.6.89-1.52-.01-2.68-1.54-3.55-2.89-2.43-3.76-2.69-8.16-1.18-10.49 1.08-1.67 2.79-2.65 4.39-2.65 1.64 0 2.67.9 4.03.9 1.32 0 2.12-.9 4.02-.9 1.43 0 2.95.78 4.03 2.14-3.53 1.93-2.96 6.98.38 8.27z"/>
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          <div className="auth-divider">
            <span>or continue with email</span>
          </div>

          <form className="auth-form">
            {tab === "signup" && (
              <div className="auth-field">
                <label>Full Name</label>
                <div className="auth-input-wrap">
                  <User size={18} />
                  <input type="text" placeholder="Enter your full name" />
                </div>
              </div>
            )}

            <div className="auth-field">
              <label>Email Address</label>
              <div className="auth-input-wrap">
                <Mail size={18} />
                <input type="email" placeholder="Enter your email address" />
              </div>
            </div>

            <div className="auth-field">
              <label>Password</label>
              <div className="auth-input-wrap">
                <Lock size={18} />
                <input type="password" placeholder="Enter your password" />
              </div>
            </div>

            {tab === "signup" && (
              <div className="auth-field">
                <label>Confirm Password</label>
                <div className="auth-input-wrap">
                  <Lock size={18} />
                  <input type="password" placeholder="Confirm your password" />
                </div>
              </div>
            )}

            {tab === "signin" && (
              <div className="auth-row">
                <label className="auth-check">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <button type="button" className="auth-text-btn">
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" className="auth-submit-btn">
              <span>{tab === "signin" ? "Sign In" : "Create Account"}</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-bottom">
            {tab === "signin" ? (
              <p>
                Do not have an account?{" "}
                <button type="button" onClick={() => setTab("signup")}>
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button type="button" onClick={() => setTab("signin")}>
                  Sign in
                </button>
              </p>
            )}

            <Link href="/" className="auth-home-link">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}