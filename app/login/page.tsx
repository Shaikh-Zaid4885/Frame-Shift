"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

// Coolors-inspired palette
// Primary: #2563EB (Blue)
// Accent: #6366F1 (Indigo)
// Dark: #0F172A (Slate-900)
// Muted: #64748B (Slate-500)
// Background: #F8FAFC

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl shadow-blue-100 border border-blue-100 p-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
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

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full mt-6 rounded-lg bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-2.5 text-white text-sm font-semibold shadow-md hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-6 space-y-3">
          <a href="/login/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>

          <p className="text-sm text-slate-600">
            Don't have an account?{" "}
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
  );
}
