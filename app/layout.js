import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dua-fatima.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dua Fatima — Frontend Developer",
    template: "%s — Dua Fatima",
  },
  description:
    "Dua Fatima is a frontend developer building fast, modern interfaces with React.js and Next.js — clean component architecture, thoughtful motion, and responsive design.",
  keywords: [
    "Dua Fatima",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI Developer",
  ],
  authors: [{ name: "Dua Fatima" }],
  creator: "Dua Fatima",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Dua Fatima — Frontend Developer",
    description:
      "Frontend developer specializing in React.js, Next.js, and modern, responsive interfaces.",
    siteName: "Dua Fatima Portfolio",
    images: [
      {
        url: "/images/dua-fatima.png",
        width: 1402,
        height: 1122,
        alt: "Dua Fatima, Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dua Fatima — Frontend Developer",
    description:
      "Frontend developer specializing in React.js, Next.js, and modern, responsive interfaces.",
    images: ["/images/dua-fatima.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Runs before paint so the stored theme applies with no flash of the
// wrong theme. Kept tiny and inline on purpose.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored ? stored : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>

      <body className="min-h-screen antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-(--accent) focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />

        <ToastProvider />
      </body>
    </html>
  );
}
