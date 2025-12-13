// for redirect to reset page from mail
//https://yourdomain.com/login/reset-password?token=XYZ123

"use client";

import React, { useState } from "react";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Reset Password
        </h1>

        <form className="space-y-4">
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            className="w-full border px-3 py-2 rounded-md"
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirm(e.target.value)
            }
            className="w-full border px-3 py-2 rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
