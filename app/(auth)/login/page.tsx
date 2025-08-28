"use client";

import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect authenticated users away from the login page
    if (user && !loading) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  if (loading || user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Log In
      </h1>
      <AuthForm />
    </div>
  );
}