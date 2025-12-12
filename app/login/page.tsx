"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Attempt", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="w-full max-w-md shadow-xl rounded-2xl">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button type="submit" className="w-full py-3 rounded-xl text-lg font-semibold">
                Login
              </Button>
            </form>

            <p className="mt-4 text-center text-sm">
              Don’t have an account?{" "}
              <a href="/" className="text-blue-600 font-medium">
                Register
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
