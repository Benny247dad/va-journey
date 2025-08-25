// app/(marketing)/auth/callback/page.tsx
"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

// This is the component that uses useSearchParams()
function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const supabase = createClientComponentClient();

  useEffect(() => {
    if (code) {
      const handleAuth = async () => {
        await supabase.auth.exchangeCodeForSession(code);
        router.push("/dashboard");
      };
      handleAuth();
    }
  }, [code, router, supabase]);

  // You can render a loading message or spinner here
  return (
    <div className="flex justify-center items-center min-h-screen">
      <p>Logging you in...</p>
    </div>
  );
}

// Wrap the component with <Suspense>
export default function CallbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthCallback />
    </Suspense>
  );
}