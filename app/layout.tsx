import './globals.css';
import type { Metadata } from 'next';
import { GoogleAnalytics } from './components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Sushant Kumar | Backend Developer (Node.js/PHP)',
  description: 'Professional Backend Developer specializing in Node.js, PHP & MySQL. 7+ years experience building scalable web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}