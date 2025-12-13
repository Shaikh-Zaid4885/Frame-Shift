"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

// Color palette inspired by coolors.co
// Primary: #2563EB (blue)
// Secondary: #06B6D4 (cyan)
// Accent: #6366F1 (indigo)
// Background: #F8FAFC

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl shadow-blue-100 p-8 border border-blue-100">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl font-bold text-blue-600">&lt;/&gt;</span>
          <span className="text-xl font-bold text-slate-800">FrameShift</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center text-slate-800 mb-1">
          Create Account
        </h1>
        <p className="text-sm text-slate-500 text-center mb-6">
          Join FrameShift to automate your framework migrations
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="text-sm font-medium text-slate-700">Contact Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm pr-10 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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
            <label className="text-sm font-medium text-slate-700">Confirm Password</label>
            <div className="relative mt-1">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm pr-10 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-indigo-600"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 py-2.5 text-white text-sm font-semibold shadow-md hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-sm text-center text-slate-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-blue-600 hover:underline">
            Sign In
          </a>
        </p>

        <p className="text-xs text-center text-slate-400 mt-4">
          By registering, you agree to FrameShift's Terms & Privacy Policy
        </p>

        <p className="text-xs text-center text-slate-400 mt-6">
          © 2025 FrameShift. All rights reserved.
        </p>
      </div>
    </div>
  );
}
