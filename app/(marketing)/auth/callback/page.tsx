"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user?.email_confirmed_at) {
        router.push("/dashboard");
      } else {
        router.push("/auth?error=verify");
      }
    };

    checkSession();
  }, [router]);

  return <p className="text-center mt-10">Verifying your email...</p>;
}