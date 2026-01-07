"use client";

import { submitEmail } from "@/app/src/lib/submitEmail";
import { useState } from "react";

export default function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setError("");
    setStatus("loading");

    const result = await submitEmail(email);

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      setError(result.message);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        aria-label="Email address"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="w-full p-3 sm:p-4 text-gray-800 bg-white rounded-xl border-2 border-white/20 
        focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400"
      />

      {error && (
        <p className="text-red-300 text-sm font-medium" aria-live="polite">
          {error}
        </p>
      )}

      {status === "success" && (
        <p className="text-green-300 text-sm font-medium">
          ✅ You’re on the list!
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-yellow-400 text-gray-900 font-bold py-4 rounded-xl 
        disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Join Early Access"}
      </button>
    </form>
  );
}
