import type { Metadata } from "next";

// Download page: keep it out of search results so it doesn't compete with the homepage.
export const metadata: Metadata = {
  title: "Chrome Extension Download",
  robots: { index: false, follow: true },
  alternates: { canonical: "/zip" },
};

export default function ZipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
