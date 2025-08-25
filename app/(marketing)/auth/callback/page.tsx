"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const next = searchParams.get("next") || "/dashboard";

  useEffect(() => {
    // If a code is found in the URL, exchange it for a session.
    // This is the standard way to handle authentication callbacks.
    if (code) {
      const exchangeCodeForSession = async () => {
        const {
          data: { session },
          error,
        } = await supabase.auth.exchangeCodeForSession(code);

        if (session && !error) {
          router.push(next);
        } else {
          router.push("/auth?error=auth_failed");
        }
      };
      exchangeCodeForSession();
    } else {
      // Fallback for cases where no code is present.
      router.push("/auth?error=no_code");
    }
  }, [code, router, next]);

  return <p className="text-center mt-10">Authenticating...</p>;
}