// app/(marketing)/signup/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up to Start Your Journey",
  description: "Sign up to track your own 100-day virtual assistant journey.",
};

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Start Your Own Journey</h1>
      <p className="text-lg text-gray-600">
        This is the sign-up page. It will be built soon!
      </p>
    </div>
  );
}