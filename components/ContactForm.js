"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  async function onSubmit(data) {
    try {
      await axios.post("/api/contact", data);
      toast.success("Message sent — thank you! I'll get back to you soon.");
      reset();
    } catch (error) {
      const message =
        error?.response?.data?.error ||
        "Something went wrong sending your message. Please try again.";
      toast.error(message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="text-sm text-[var(--text-muted)]">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--accent)]"
          {...register("name", {
            required: "Please enter your name.",
            minLength: { value: 2, message: "That name looks too short." },
          })}
        />
        {errors.name && (
          <p role="alert" className="mt-1.5 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-[var(--text-muted)]">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? "true" : "false"}
          className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--accent)]"
          {...register("email", {
            required: "Please enter your email.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
        {errors.email && (
          <p role="alert" className="mt-1.5 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-[var(--text-muted)]">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? "true" : "false"}
          className="mt-2 w-full resize-y rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--accent)]"
          {...register("message", {
            required: "Please write a short message.",
            minLength: { value: 10, message: "Please add a little more detail." },
          })}
        />
        {errors.message && (
          <p role="alert" className="mt-1.5 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
