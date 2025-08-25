"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(true); // ✅ Use a single toggle state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // ✅ Move email validation to the correct logical place
    if (!isLogin && !email.endsWith("@gmail.com")) {
      setMessage("❌ Only Gmail accounts are allowed for signup.");
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        // Login Logic
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push("/dashboard");
      } else {
        // Signup Logic
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });
        if (error) throw error;
        setMessage("✅ Check your Gmail inbox to verify your account.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isLogin ? "Log In" : "Sign Up"}
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Processing..." : isLogin ? "Log In" : "Sign Up"}
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-sm" style={{ color: message.startsWith("✅") ? 'green' : 'red' }}>
          {message}
        </p>
      )}
      <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage(null); // Clear message on toggle
          }}
          className="text-blue-600 hover:underline"
        >
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </p>
    </div>
  );
}