"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    setSuccess(false);

    // ✅ Here is where you would send the data to a backend API or a service.
    // Example using a simple fetch request to a backend API route:
    // const response = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    // if (response.ok) {
    //   setSuccess(true);
    //   setFormData({ name: "", email: "", message: "" });
    // } else {
    //   setError(true);
    // }
    
    // ✅ For now, we'll simulate a submission with a delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setSubmitting(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit} // ✅ Added onSubmit handler
        className="w-full max-w-lg bg-gray-800/60 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        
        {success && (
          <p className="text-green-400 text-center font-semibold">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-400 text-center font-semibold">
            Failed to send message. Please try again.
          </p>
        )}

        <div>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            id="name"
            name="name" // ✅ Added name attribute
            type="text"
            value={formData.name} // ✅ Connected to state
            onChange={handleChange} // ✅ Added onChange handler
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            id="email"
            name="email" // ✅ Added name attribute
            type="email"
            value={formData.email} // ✅ Connected to state
            onChange={handleChange} // ✅ Added onChange handler
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            id="message"
            name="message" // ✅ Added name attribute
            rows={4}
            value={formData.message} // ✅ Connected to state
            onChange={handleChange} // ✅ Added onChange handler
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={submitting || !formData.name || !formData.email || !formData.message} // ✅ Added validation to disable button
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </main>
  );
}