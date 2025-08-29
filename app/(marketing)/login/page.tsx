// app/(marketing)/login/page.tsx
import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In to Your VA Journey Dashboard",
  description:
    "Log in to your account to continue tracking your 100-day virtual assistant journey.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      <LoginForm />
    </main>
  );
}
