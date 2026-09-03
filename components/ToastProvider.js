"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 4500,
        style: {
          background: "var(--surface)",
          color: "var(--text)",
          border: "1px solid var(--border)",
          borderRadius: "10px",
          fontFamily: "var(--font-sans)",
          fontSize: "0.9rem",
        },
        success: {
          iconTheme: { primary: "#4f46e5", secondary: "#ffffff" },
        },
        error: {
          iconTheme: { primary: "#dc2626", secondary: "#ffffff" },
        },
      }}
    />
  );
}
