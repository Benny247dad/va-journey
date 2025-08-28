"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { logEntryAction } from "@/app/actions";
import toast from "react-hot-toast"; // ✅ Import the toast library

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  day: z.number().int().min(1, "Day must be 1 or greater.").max(100, "Day must be 100 or less."),
});

type FormData = z.infer<typeof formSchema>;

export default function LogEntryForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleClientSubmit = async (data: FormData) => {
    setLoading(true);

    const result = await logEntryAction(data);
    setLoading(false);

    // ✅ Use toast for a better user experience
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Entry logged successfully!");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleClientSubmit)} className="space-y-4">
      {/* ❌ Remove the old error message display.
      The toast handles it now. */}
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