import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="keywords" content="backend developer, Node.js developer, PHP expert, MySQL developer" />
        <meta name="author" content="Sushant Kumar" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skfighter.com/" />
        <meta property="og:title" content="Sushant Kumar | Backend Developer (Node.js/PHP)" />
        <meta property="og:description" content="Professional Backend Developer with 7+ years experience in Node.js, PHP & MySQL." />
        <meta property="og:image" content="https://skfighter.com/images/sushant-kumar-profile.jpg" />
        <meta property="og:image:alt" content="Sushant Kumar - Backend Developer" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@skfighter007" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sushant Kumar",
            "jobTitle": "Backend Developer",
            "url": "https://skfighter.com",
            "sameAs": [
              "https://www.linkedin.com/in/sushantkumar-1a4b30b2",
              "https://github.com/sushant777"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chandigarh",
              "addressRegion": "India"
            }
          })}
        </script>
      </Head>

      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-gray-900 text-gray-200">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-xl p-8 sm:p-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-50 blur-lg"></div>
          <div className="relative z-10 text-center">
            <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-sm"></div>
              <div className="relative w-full h-full ring-4 ring-blue-200/20 rounded-full overflow-hidden">
                <Image
                  src="/images/sushant-kumar-profile.jpg"
                  alt="Sushant Kumar"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Sushant Kumar
            </h1>
            <p className="text-lg sm:text-xl mb-4">
              Backend Developer (Node.js/PHP) | Chandigarh, India
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/connect" 
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/sushantkumar-1a4b30b2" 
                target="_blank"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">About Me</h2>
            <p className="mb-6 text-base sm:text-lg">
              Expert <strong className="text-blue-500">Node.js and PHP developer</strong> with <strong>7+ years</strong> of experience building scalable web applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-lg text-blue-400">Technical Skills:</h3>
              <ul className="space-y-2">
                {['NestJS', 'Laravel', 'MySQL', 'PostgreSQL', 'AWS-Serverless', 'Docker','Git'].map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg text-purple-400">Core Expertise:</h3>
              <ul className="space-y-2">
                {['Backend Architecture', 'Performance Optimization', 'Database Design', 'Data integration and security', 'Team Leadership'].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">Get In Touch</h2>
          <div className="space-y-3">
            <p className="flex items-center">
              <span className="mr-2">📧</span>
              <a href="mailto:sushantsharma739@gmail.com" className="text-blue-500 hover:underline">sushantsharma739@gmail.com</a>
            </p>
            <p className="flex items-center">
              <span className="mr-2">📱</span>
              <a href="tel:+918195927482" className="text-blue-500 hover:underline">+91 8195927482</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 sm:py-8 text-gray-500 border-t border-gray-700">
        <p>© {new Date().getFullYear()} Sushant Kumar. All rights reserved.</p>
      </footer>
    </>
  );
}
