// app/(auth)/callback/page.tsx
"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners"; // Assuming you have this library installed

export default function CallbackPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleCallback = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        setError("Login failed: " + error.message);
        return;
      }
      
      if (data.session) {
        // User successfully logged in, redirect to the dashboard
        router.push("/dashboard");
      } else {
        setError("No session found. Please try logging in again.");
      }
    };
    handleCallback();
  }, [router, supabase]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={() => router.push("/login")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4 dark:text-gray-200">
        Authenticating...
      </h1>
      <BeatLoader color="#4F46E5" />
    </div>
  );
}