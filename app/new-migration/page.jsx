//when analyse and convert project is complete render to report page

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  Upload,
  CheckCircle,
  Loader2,
  Menu,
  X,
} from "lucide-react";

export default function NewMigrationPage() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItem = (href, label) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={() => setSidebarOpen(false)}
        className={`block px-3 py-2 rounded-lg transition
          ${isActive
            ? "bg-black text-white"
            : "text-gray-600 hover:bg-slate-100 hover:text-black"}
        `}
      >
        {label}
      </Link>
    );
  };

  const startAnalysis = () => {
    setAnalyzing(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 65) {
          clearInterval(interval);
          return 65;
        }
        return prev + 5;
      });
    }, 400);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-white border-r px-4 py-6 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">FrameShift</h2>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 text-sm">
          {navItem("/user-dashboard", "Dashboard")}
          {navItem("/migrations", "Migrations")}
          {navItem("/settings", "Settings")}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10">
        {/* Mobile header */}
        <div className="flex items-center gap-3 mb-6 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 border rounded-lg"
          >
            <Menu />
          </button>
          <h1 className="text-lg font-semibold">New Migration</h1>
        </div>

        {/* Page content continues exactly as you already have */}
        {/* (NO changes needed below this line) */}

        <p className="text-gray-500 mb-8 hidden md:block">
          Enter your project repository and choose source and target frameworks.
        </p>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8 max-w-3xl">
          {/* GitHub URL */}
          <label className="block text-sm font-medium mb-1">
            GitHub Repository URL
          </label>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center border rounded-lg px-3 py-2 w-full">
              <Github size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="https://github.com/username/project-name"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Upload folder */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Or Upload Project Folder
            </label>
            <label className="flex items-center gap-2 border rounded-lg px-4 py-3 cursor-pointer text-gray-600 hover:bg-slate-50">
              <Upload size={18} />
              <span>Select local project folder</span>
              <input type="file" webkitdirectory="true" hidden />
            </label>
          </div>

          {/* Framework selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Source Framework
              </label>
              <select className="w-full border rounded-lg px-3 py-2">
                <option>Select source framework</option>
                <option>Django</option>
                <option>React</option>
                <option>Angular</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Target Framework
              </label>
              <select className="w-full border rounded-lg px-3 py-2">
                <option>Select target framework</option>
                <option>Flask</option>
                <option>Next.js</option>
                <option>Vue</option>
              </select>
            </div>
          </div>

          {/* Private repo */}
          <div className="flex items-center gap-2 mb-8">
            <input type="checkbox" />
            <span className="text-sm text-gray-600">
              Private Repository (requires access token)
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={startAnalysis}
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:opacity-90"
            >
              Analyze Project
            </button>
            <button className="border px-6 py-3 rounded-lg">
              Cancel
            </button>
          </div>
        </div>

        {/* Analysis Section */}
        {analyzing && (
          <div className="bg-white border rounded-xl p-6 mt-8 max-w-3xl">
            <div className="flex justify-between mb-2 text-sm">
              <span>Analyzing Repository...</span>
              <span>{progress}%</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
              <div
                className="h-2 bg-black rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Repository cloned successfully
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Scanning project structure...
              </li>
              <li className="flex items-center gap-2">
                <Loader2 size={16} className="animate-spin" />
                Analyzing dependencies and components...
              </li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
