// app/actions.ts
"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  day: z.coerce.number().int().min(1).max(100), // ✅ z.coerce.number() to handle the string conversion
});

export async function addEntryAction(formData: FormData) { // ✅ Accept FormData directly
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to log an entry." };
  }

  // ✅ Extract data from FormData
  const result = formSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    day: formData.get("day"),
  });

  if (!result.success) {
    return { error: result.error.issues[0].message };
  }

  const { error } = await supabase
    .from("entries")
    .insert({
      title: result.data.title,
      description: result.data.description,
      day: result.data.day,
      user_id: user.id,
    });

  if (error) {
    console.error("Error logging entry:", error);
    return { error: error.message };
  }

  revalidatePath("/dashboard");
  return { success: true };
}

// ✅ Corrected `deleteEntryAction`
export async function deleteEntryAction(formData: FormData) { // ✅ Accept FormData directly
  const entryId = formData.get("entryId") as string;
  
  if (!entryId) {
    return { error: "Entry ID is missing." };
  }

  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to delete an entry." };
  }

  const { error } = await supabase
    .from("entries")
    .delete()
    .eq("id", entryId)
    .eq("user_id", user.id);

  if (error) {
    console.error("Error deleting entry:", error);
    return { error: error.message };
  }

  revalidatePath("/dashboard");
  return { success: true };
}