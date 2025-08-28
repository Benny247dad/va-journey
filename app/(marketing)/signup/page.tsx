// app/(marketing)/signup/page.tsx
import SignupForm from "@/components/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up to Start Your Journey",
  description: "Sign up to track your own 100-day virtual assistant journey.",
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      <SignupForm />
    </main>
  );
}
