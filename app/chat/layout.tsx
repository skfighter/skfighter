import type { Metadata } from "next";

// Utility page: keep it out of search results so it doesn't compete with the homepage.
export const metadata: Metadata = {
  title: "Chat",
  robots: { index: false, follow: true },
  alternates: { canonical: "/chat" },
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
