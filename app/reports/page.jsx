"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Minus,
  Download,
  Github,
  FileText,
} from "lucide-react";

export default function MigrationReportPage() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItem = (href, label) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setSidebarOpen(false)}
        className={`block px-3 py-2 rounded-lg text-sm
          ${active
            ? "bg-black text-white"
            : "text-gray-600 hover:bg-slate-100"}
        `}
      >
        {label}
      </Link>
    );
  };

  const badge = (type) => {
    const styles = {
      converted: "bg-green-100 text-green-700",
      review: "bg-yellow-100 text-yellow-700",
      skipped: "bg-gray-100 text-gray-600",
      failed: "bg-red-100 text-red-700",
    };
    return (
      <span className={`px-2 py-1 text-xs rounded-full ${styles[type]}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    );
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
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-white border-r px-4 py-6 transform transition-transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">FrameShift</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="space-y-1">
          {navItem("/user-dashboard", "Dashboard")}
          {navItem("/migrations", "Migrations")}
          {navItem("/settings", "Settings")}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10">
        {/* Mobile Header */}
        <div className="flex items-center gap-3 mb-6 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 border rounded-lg"
          >
            <Menu />
          </button>
          <h1 className="font-semibold">Migration Report</h1>
        </div>

        <h1 className="text-3xl font-semibold mb-1 hidden md:block">
          Migration Report
        </h1>
        <p className="text-gray-500 mb-8 hidden md:block">
          Your project migration has been completed successfully.
        </p>

        {/* Migration Summary */}
        <div className="bg-white border rounded-xl p-6 mb-8">
          <h3 className="font-semibold mb-6">Migration Summary</h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-lg font-semibold">Django</p>
              <p className="text-xs text-gray-500">Source</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Flask</p>
              <p className="text-xs text-gray-500">Target</p>
            </div>
            <div>
              <CheckCircle className="mx-auto text-green-600 mb-1" />
              <p className="text-sm">Completed</p>
            </div>
            <div>
              <p className="text-lg font-semibold">82%</p>
              <p className="text-xs text-gray-500">Accuracy</p>
            </div>
            <div>
              <p className="text-lg font-semibold">3m 12s</p>
              <p className="text-xs text-gray-500">Time Taken</p>
            </div>
          </div>
        </div>

        {/* Files Converted */}
        <div className="bg-white border rounded-xl p-6 mb-8 overflow-x-auto">
          <h3 className="font-semibold mb-4">Files Converted</h3>

          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th className="py-2">File Name</th>
                <th>Status</th>
                <th>AI Confidence</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">views.py</td>
                <td>{badge("converted")}</td>
                <td>95%</td>
                <td>Success</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">urls.py</td>
                <td>{badge("review")}</td>
                <td>88%</td>
                <td>Review Suggested</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">models.py</td>
                <td>{badge("converted")}</td>
                <td>92%</td>
                <td>Success</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">settings.py</td>
                <td>{badge("skipped")}</td>
                <td>—</td>
                <td>Custom Configuration</td>
              </tr>
              <tr>
                <td className="py-3">middleware.py</td>
                <td>{badge("failed")}</td>
                <td>45%</td>
                <td>Manual Conversion Required</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* AI Notes */}
        <div className="bg-white border rounded-xl p-6 mb-8">
          <h3 className="font-semibold mb-4">AI Analysis Notes</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-2">
              <AlertTriangle size={16} />
              Custom middleware detected. Manual review suggested.
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} />
              Static files mapped successfully.
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} />
              Models converted to SQLAlchemy (92%).
            </li>
            <li className="flex gap-2">
              <AlertTriangle size={16} />
              URL routing may need Flask Blueprint adjustment.
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} />
              Template inheritance preserved.
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg">
              <Download size={16} /> Download Converted Project
            </button>
            <button className="flex items-center gap-2 border px-6 py-3 rounded-lg">
              <Github size={16} /> Push to GitHub
            </button>
          </div>

          <p className="text-sm text-green-600 flex items-center gap-2">
            <CheckCircle size={16} />
            Migration completed successfully!
          </p>
        </div>
      </main>
    </div>
  );
}
