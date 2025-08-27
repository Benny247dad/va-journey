// components/LogEntryForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  day: z.number().int().min(1, "Day must be 1 or greater.").max(100, "Day must be 100 or less."),
});

type FormData = z.infer<typeof formSchema>;

export default function LogEntryForm({ onEntryLogged }: { onEntryLogged: () => void }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (!user) {
      setError("You must be logged in to submit.");
      return;
    }

    setLoading(true);
    setError("");

    const { error: supabaseError } = await supabase
      .from("entries")
      .insert({
        ...data,
        user_id: user.id,
      });

    setLoading(false);

    if (supabaseError) {
      setError(supabaseError.message);
    } else {
      reset();
      onEntryLogged();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div>
        <label className="block text-sm font-medium mb-1 dark:text-gray-300">Day Number</label>
        <input
          type="number"
          {...register("day", { valueAsNumber: true })}
          className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.day && <p className="text-red-500 text-sm mt-1">{errors.day.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 dark:text-gray-300">Title</label>
        <input
          type="text"
          {...register("title")}
          className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 dark:text-gray-300">Description</label>
        <textarea
          {...register("description")}
          rows={4}
          className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {loading ? "Logging..." : "Log Entry"}
      </button>
    </form>
  );
}