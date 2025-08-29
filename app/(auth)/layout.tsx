// app/(auth)/layout.tsx
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DashboardNavbar from "@/components/DashboardNavbar";

interface AuthLayoutProps {
  children: ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  // Redirect unauthenticated users to the login page
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <DashboardNavbar />
      <main className="flex-grow">{children}</main>
    </>
  );
}