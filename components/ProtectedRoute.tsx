"use client";

import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // delay until user state is known
    if (user === null) {
      router.push("/auth"); // redirect if not logged in
    }
    setChecking(false);
  }, [user, router]);

  if (checking) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return <>{children}</>;
}