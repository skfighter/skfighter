import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Hire a Backend Developer",
  description: "Hire Sushant Kumar for backend development in Node.js, PHP, Laravel and MySQL. Available for freelance projects and consultations. Based in Chandigarh.",
  keywords: "contact backend developer, hire node.js developer, php developer for hire, freelance developer chandigarh, backend development services",
  openGraph: {
    title: "Contact Sushant Kumar | Backend Developer Services",
    description: "Get in touch for backend development projects. Expert in Node.js, PHP, Laravel & MySQL. Professional consultation available.",
    url: "/connect",
  },
  alternates: {
    canonical: "/connect",
  },
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}