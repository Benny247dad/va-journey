"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Database } from "@/types/supabase";

interface AuthContextType {
  user: Session["user"] | null;
  loading: boolean;
  signOut: () => Promise<void>; // ✅ add signOut
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Session["user"] | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);

      if (event === "SIGNED_OUT") {
        router.push("/");
      }
    });

    async function getUserSession() {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    }

    getUserSession();

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase.auth]);

  // ✅ implement signOut
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut: handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
