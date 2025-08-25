"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only run this effect after the initial loading state is resolved
    if (!loading) {
      // If there's no user and the current path is NOT the auth page
      if (!user && pathname !== "/auth") {
        // Redirect to the login page
        router.push("/auth");
      }
    }
  }, [user, loading, router, pathname]);

  // While loading, show a simple message or a spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // If a user is logged in, render the children
  return <>{children}</>;
}