// components/NewEntryForm.tsx
"use client";

import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { FaTimes, FaCheck } from "react-icons/fa";
import { addEntryAction } from "@/app/actions";

export default function NewEntryForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await addEntryAction(formData);

    setLoading(false);

    if (result.error) {
      toast.error(result.error);
      setSuccess(false);
    } else {
      toast.success("Entry logged successfully!");
      setSuccess(true);
      // Reset form fields
      setTitle("");
      setDescription("");
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
        <FaCheck className="text-5xl text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-center mb-2">
          Entry Logged!
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Your progress has been successfully recorded.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
        >
          Add Another Entry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Log Your Daily Progress
      </h2>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="day" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Day
          </label>
          <input
            id="day"
            name="day"
            type="text"
            readOnly
            value={new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm placeholder-gray-400 bg-gray-100 dark:bg-gray-800 text-gray-500 cursor-not-allowed sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white sm:text-sm"
            placeholder="e.g., Learned CSS Grid"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white sm:text-sm"
            placeholder="Write a brief summary of what you did today..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {loading ? (
            <BeatLoader size={12} color="#ffffff" />
          ) : (
            "Log Entry"
          )}
        </button>
      </div>
    </form>
  );
}