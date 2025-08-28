"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  day: z.number().int().min(1).max(100),
});

export async function logEntryAction(data: z.infer<typeof formSchema>) {
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to log an entry." };
  }

  const { error } = await supabase
    .from("entries")
    .insert({
      title: data.title,
      description: data.description,
      day: data.day,
      user_id: user.id,
    });

  if (error) {
    console.error("Error logging entry:", error);
    return { error: error.message };
  }

  // Revalidate the dashboard page to show the new entry
  revalidatePath("/dashboard");
  return { success: true };
}

// ✅ New Server Action to delete an entry
export async function deleteEntryAction(entryId: string) {
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to delete an entry." };
  }

  // Delete the entry, but only if the user_id matches the current user's ID
  const { error } = await supabase
    .from("entries")
    .delete()
    .eq("id", entryId)
    .eq("user_id", user.id);

  if (error) {
    console.error("Error deleting entry:", error);
    return { error: error.message };
  }

  return { success: true };
}