"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  User,
  Plus,
  CheckCircle,
  Clock,
  Upload,
  BarChart3,
  Home,
  Layers,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function UserDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const go = (path) => {
    router.push(path);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed z-50 inset-y-0 left-0 h-screen w-64 bg-white
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static`}
      >
        <div
          onClick={() => go("/")}
          className="px-6 py-5 text-lg font-semibold cursor-pointer border-b"
        >
          &lt;/&gt; FrameShift
        </div>

        <nav className="p-4 space-y-1 text-sm">
          <SideItem icon={<Home size={18} />} label="Dashboard" onClick={() => go("/user-dashboard")} />
          <SideItem icon={<Layers size={18} />} label="Migrations" onClick={() => go("/migrations")} />
          <SideItem icon={<FileText size={18} />} label="Reports" onClick={() => go("/reports")} />
          <SideItem icon={<Settings size={18} />} label="Settings" onClick={() => go("/settings")} />
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <SideItem icon={<User size={18} />} label="Profile" onClick={() => go("/profile")} />
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="sticky top-0 z-30 bg-white border-b">
          <div className="h-16 px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <X /> : <Menu />}
              </button>
              <span
                onClick={() => go("/")}
                className="font-semibold cursor-pointer md:hidden"
              >
                &lt;/&gt; FrameShift
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Bell className="text-slate-500 cursor-pointer" />
              <div
                onClick={() => go("/profile")}
                className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center cursor-pointer"
              >
                <User size={16} />
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-6 space-y-8">

            {/* HERO */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white p-8 lg:p-10">
              <h2 className="text-lg font-semibold">Welcome back!</h2>
              <p className="text-sm opacity-80">
                Automate framework migration with AI
              </p>

              <button
                onClick={() => go("/new-migration")}
                className="mt-6 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2"
              >
                <Plus size={16} /> Start New Migration
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard icon={<CheckCircle />} value="12" label="Completed" />
              <StatCard icon={<Clock />} value="3" label="In Progress" />
            </div>

            {/* RECENT */}
            <section>
              <h3 className="text-sm font-semibold mb-3">Recent Migrations</h3>
              <div className="space-y-3">
                <MigrationItem title="ecommerce-app" sub="Django → Flask" status="Completed" />
                <MigrationItem title="dashboard-ui" sub="React → Vue" status="Converting" />
                <MigrationItem title="api-service" sub="Express → Fastify" status="Analyzing" />
              </div>
            </section>

            {/* QUICK ACTIONS */}
            <section>
              <h3 className="text-sm font-semibold mb-3">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <QuickAction
                  icon={<Upload />}
                  title="Upload Repo"
                  desc="Start migration"
                  onClick={() => go("/uploads")}
                />
                <QuickAction
                  icon={<BarChart3 />}
                  title="View Reports"
                  desc="Analytics"
                  onClick={() => go("/reports")}
                />
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function SideItem({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-slate-100 transition"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="bg-white border rounded-2xl p-6 flex items-center gap-4">
      {icon}
      <div>
        <p className="text-lg font-semibold">{value}</p>
        <p className="text-xs text-slate-500">{label}</p>
      </div>
    </div>
  );
}

function MigrationItem({ title, sub, status }) {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-sm hover:shadow-md transition">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>
      <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">
        {status}
      </span>
    </div>
  );
}

function QuickAction({ icon, title, desc, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white border rounded-xl p-4 flex gap-3 hover:shadow transition text-left"
    >
      {icon}
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>
    </button>
  );
}
