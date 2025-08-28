"use server";

import { supabase } from "@/lib/supabaseClient";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  day: z.number().int().min(1, "Day must be 1 or greater.").max(100, "Day must be 100 or less."),
});

// ✅ The Server Action function
export async function logEntryAction(data: unknown) {
  // ✅ Validate the form data with Zod
  const validatedFields = formSchema.safeParse(data);

  // If validation fails, return the errors early.
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.message,
    };
  }

  // ✅ Get the user's session directly on the server
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    return {
      error: "You must be logged in to submit an entry.",
    };
  }

  // ✅ Insert the data into Supabase
  const { error } = await supabase.from("entries").insert({
    ...validatedFields.data,
    user_id: session.user.id,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: "Entry logged successfully!",
  };
}