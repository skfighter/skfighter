import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Get in Touch with Sushant Kumar - Backend Developer",
  description: "Contact Sushant Kumar for your backend development needs. Expert in Node.js, PHP, Laravel, MySQL. Available for freelance projects and consultations in Chandigarh, India.",
  keywords: "contact backend developer, hire node.js developer, php developer for hire, freelance developer chandigarh, backend development services",
  openGraph: {
    title: "Contact Sushant Kumar | Backend Developer Services",
    description: "Get in touch for backend development projects. Expert in Node.js, PHP, Laravel & MySQL. Professional consultation available.",
    url: "https://skfighter.com/connect",
  },
  alternates: {
    canonical: "https://skfighter.com/connect",
  },
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}