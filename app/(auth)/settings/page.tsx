// app/(auth)/settings/page.tsx
import SettingsPageContainer from "@/components/SettingsPageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Settings | VA Journey",
  description: "Manage your account settings and preferences for your VA Journey.",
};

export default function SettingsPage() {
  return <SettingsPageContainer />;
}