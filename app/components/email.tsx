"use client";

import { useState } from "react";

export default function EmailSignupForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your email submission logic here
    console. log("Email submitted:", email);
  };

  return (
    <div className="w-full max-w-md px-4 space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full p-3 sm:p-4 text-gray-800 bg-white rounded-xl border-2 border-white/20 
                   focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 
                   text-base sm:text-lg placeholder:text-gray-400 shadow-lg transition-all duration-200"
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl 
                   border-2 border-yellow-400 hover:bg-yellow-500 hover:scale-105 
                   transform transition-all duration-200 shadow-lg hover:shadow-xl 
                   active:scale-100 text-base sm:text-lg"
        >
          Join Early Access
        </button>
      </form>
      <p className="text-gray-200 text-sm text-center font-medium">
        🔒 No spam.  Early access only.
      </p>
    </div>
  );
}