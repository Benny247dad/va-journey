// app/(auth)/profiles/page.tsx
import ProfilesPageContainer from "@/components/ProfilesPageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile | VA Journey",
  description: "View and manage your user profile details.",
};

export default function ProfilesPage() {
  return <ProfilesPageContainer />;
}