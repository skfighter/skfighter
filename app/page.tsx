import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2980b9" />
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

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <img
            src="./images/sushant-kumar-profile.jpg"
            alt="Sushant Kumar"
            className="mx-auto rounded-full w-32 h-32 object-cover mb-6 ring-4 ring-blue-500/20"
          />
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sushant Kumar
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Backend Developer (Node.js/PHP) | Chandigarh, India
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/connect" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="https://www.linkedin.com/in/sushantkumar-1a4b30b2" 
              target="_blank"
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            About Me
          </h2>
          <p className="mb-6 text-lg">
            Expert <strong className="text-blue-600 dark:text-blue-400">Node.js and PHP developer</strong> with <strong>7+ years</strong> of experience building scalable web applications.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-lg">Technical Skills:</h3>
              <ul className="space-y-2">
                {['Node.js', 'PHP', 'MySQL', 'REST APIs', 'AWS', 'Docker'].map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Core Expertise:</h3>
              <ul className="space-y-2">
                {['Backend Architecture', 'Performance Optimization', 'Database Design', 'Team Leadership'].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-16">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <div className="space-y-3">
            <p className="flex items-center">
              <span className="mr-2">📧</span>
              <a href="mailto:sushantsharma739@gmail.com">sushantsharma739@gmail.com</a>
            </p>
            <p className="flex items-center">
              <span className="mr-2">📱</span>
              <a href="tel:+918195927482">+91 8195927482</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>© {new Date().getFullYear()} Sushant Kumar. All rights reserved.</p>
      </footer>
    </>
  );
}