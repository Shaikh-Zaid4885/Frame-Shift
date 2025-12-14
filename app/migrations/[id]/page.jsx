"use client";

import { useParams, useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Card from "@/components/Card";

export default function MigrationDetail() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <Layout
      title={`Migration ${id}`}
      subtitle="Live status, progress & logs"
    >
      {/* Status Card */}
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Migration Status</h3>
            <p className="text-sm text-gray-500 mt-1">
              Django → Flask
            </p>
          </div>

          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
            Running
          </span>
        </div>
      </Card>

      {/* Progress */}
      <Card>
        <h3 className="text-lg font-semibold mb-3">Progress</h3>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{ width: "65%" }}
          />
        </div>

        <p className="text-sm text-gray-600 mt-2">
          65% completed • Converting files & routes
        </p>
      </Card>

      {/* Logs */}
      <Card>
        <h3 className="text-lg font-semibold mb-2">Live Logs</h3>

        <div className="bg-black text-green-400 text-sm p-4 rounded-md h-40 overflow-auto font-mono">
          <p>✔ Analyzing Django project structure...</p>
          <p>✔ Migrating models.py → SQLAlchemy</p>
          <p>✔ Converting views.py → Flask routes</p>
          <p>⏳ Processing middleware...</p>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => router.push(`/reports`)}
          className="px-5 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
        >
          View Migration Report
        </button>

        <button
          onClick={() => router.push("/migrations")}
          className="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
        >
          Back to Migrations
        </button>
      </div>
    </Layout>
  );
}
