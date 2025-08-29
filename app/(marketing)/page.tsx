// app/(marketing)/page.tsx
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VA Journey | 100 Days of Growth",
  description: "Follow my 100-day journey to becoming a professional virtual assistant, sharing projects, learnings, and consistency.",
};

export default function MarketingHomePage() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}