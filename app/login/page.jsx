"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      {/* ===== LEFT BRAND PANEL (Desktop Only) ===== */}
      <div className="hidden lg:flex flex-col justify-center px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold">&lt;/&gt;</span>
            <span className="text-3xl font-bold">FrameShift</span>
          </div>

          <h2 className="text-3xl font-semibold mb-4">
            Welcome back to FrameShift
          </h2>

          <p className="text-sm opacity-80 mb-6">
            Continue your framework migrations with real-time tracking,
            analytics, and AI-powered insights.
          </p>

          <ul className="space-y-3 text-sm opacity-90">
            <li>✔ Monitor migration progress</li>
            <li>✔ Review detailed reports</li>
            <li>✔ Secure & fast workflow</li>
          </ul>
        </div>
      </div>

      {/* ===== RIGHT FORM PANEL ===== */}
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-xl shadow-blue-100 border border-blue-100 p-8">

          {/* Mobile Logo */}
          <div className="flex items-center justify-center gap-2 mb-8 lg:hidden">
            <span className="text-xl font-bold text-blue-600">&lt;/&gt;</span>
            <span className="text-xl font-bold text-slate-800">FrameShift</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-center text-slate-800 mb-1">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-500 text-center mb-8">
            Automate framework migration with AI
          </p>

          {/* ===== FORM ===== */}
          <form className="space-y-4">

            {/* Email */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm pr-10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-indigo-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-6 rounded-lg bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-2.5 text-white text-sm font-semibold shadow-md hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          {/* Links */}
          <div className="text-center mt-6 space-y-3">
            <a
              href="/login/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>

            <p className="text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <a href="/" className="font-medium text-blue-600 hover:underline">
                Register
              </a>
            </p>
          </div>

          {/* Footer */}
          <p className="text-xs text-center text-slate-400 mt-10">
            © 2025 FrameShift. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ===== Reusable Input ===== */
function Input({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}
