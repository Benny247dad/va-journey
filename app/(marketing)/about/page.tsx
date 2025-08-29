// app/(marketing)/about/page.tsx

import { Metadata } from "next";
import AboutPageContainer from "@/components/AboutPageContainer";

export const metadata: Metadata = {
  title: "About Dayo | My Story",
  description: "Learn about my background, motivations, and the goals of my 100-day VA journey.",
};

export default function AboutPage() {
  return <AboutPageContainer />;
}