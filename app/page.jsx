"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">

      {/* ===== LEFT BRAND PANEL (Desktop Only) ===== */}
      <div className="hidden lg:flex flex-col justify-center px-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold">&lt;/&gt;</span>
            <span className="text-3xl font-bold">FrameShift</span>
          </div>

          <h2 className="text-3xl font-semibold mb-4">
            Migrate frameworks faster with AI
          </h2>

          <p className="text-sm opacity-90 mb-6">
            FrameShift helps developers automate framework migrations
            with intelligent code transformation and analytics.
          </p>

          <ul className="space-y-3 text-sm">
            <li>✔ Smart migration engine</li>
            <li>✔ Real-time progress tracking</li>
            <li>✔ Detailed migration reports</li>
          </ul>
        </div>
      </div>

      {/* ===== RIGHT FORM PANEL ===== */}
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-xl shadow-blue-100 p-8 border border-blue-100">

          {/* Mobile Logo */}
          <div className="flex items-center justify-center gap-2 mb-6 lg:hidden">
            <span className="text-xl font-bold text-blue-600">&lt;/&gt;</span>
            <span className="text-xl font-bold text-slate-800">FrameShift</span>
          </div>

          <h1 className="text-2xl font-semibold text-center text-slate-800 mb-1">
            Create Account
          </h1>
          <p className="text-sm text-slate-500 text-center mb-6">
            Join FrameShift to automate your framework migrations
          </p>

          {/* ===== FORM ===== */}
          <form className="space-y-4">

            <Input label="Full Name" placeholder="Enter your full name" />
            <Input label="Email" type="email" placeholder="Enter your email" />
            <Input label="Contact Number" type="tel" placeholder="Phone number" />

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
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

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Confirm Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm pr-10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-indigo-600"
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 py-2.5 text-white text-sm font-semibold shadow-md hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-sm text-center text-slate-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-blue-600 hover:underline">
              Sign In
            </a>
          </p>

          <p className="text-xs text-center text-slate-400 mt-6">
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
