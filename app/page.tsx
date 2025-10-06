import Head from 'next/head';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Expert Backend Developer specializing in Node.js & PHP",
  description: "Sushant Kumar - Senior Backend Developer with 7+ years experience in Node.js, PHP, Laravel, NestJS, MySQL & AWS. Building scalable web applications in Chandigarh, India.",
  keywords: "backend developer chandigarh, node.js expert, php developer, laravel specialist, mysql database expert, api development, web application development",
  openGraph: {
    title: "Sushant Kumar | Expert Backend Developer (Node.js/PHP)",
    description: "Senior Backend Developer with 7+ years experience. Specializing in Node.js, PHP, Laravel, MySQL & AWS. Available for projects.",
    url: "https://skfighter.com",
    images: [
      {
        url: "/images/sushant-kumar-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Sushant Kumar - Backend Developer Profile"
      }
    ]
  }
};

export default function Home() {
  // Enhanced JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://skfighter.com/#person",
        "name": "Sushant Kumar",
        "alternateName": "SKFighter",
        "url": "https://skfighter.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://skfighter.com/images/sushant-kumar-profile.jpg",
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://www.linkedin.com/in/sushant-kumar-1a4b30b2/",
          "https://github.com/skfighter",
          "https://www.instagram.com/skfighter.ig/#"
        ],
        "jobTitle": "Senior Backend Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance Developer"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chandigarh",
          "addressRegion": "Punjab",
          "addressCountry": "India"
        },
        "email": "sushantsharma739@gmail.com",
        "telephone": "+918195927482",
        "knowsAbout": [
          "Node.js Development",
          "PHP Development", 
          "Laravel Framework",
          "NestJS Framework",
          "MySQL Database",
          "PostgreSQL",
          "API Development",
          "AWS Cloud Services",
          "Docker Containerization",
          "Microservices Architecture"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Backend Developer",
          "occupationLocation": {
            "@type": "City",
            "name": "Chandigarh, India"
          },
          "skills": "Node.js, PHP, Laravel, NestJS, MySQL, PostgreSQL, AWS, Docker"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://skfighter.com/#website",
        "url": "https://skfighter.com",
        "name": "Sushant Kumar - Backend Developer",
        "description": "Professional portfolio of Sushant Kumar, a senior backend developer specializing in Node.js, PHP, and scalable web applications.",
        "publisher": {
          "@id": "https://skfighter.com/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://skfighter.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://skfighter.com/#service",
        "name": "Backend Development Services",
        "provider": {
          "@id": "https://skfighter.com/#person"
        },
        "serviceType": "Web Development",
        "areaServed": "India",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "API Development",
                "description": "Custom REST and GraphQL API development"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Web Application Development",
                "description": "Scalable web application development using modern frameworks"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Database Design",
                "description": "Efficient database architecture and optimization"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Enhanced SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="author" content="Sushant Kumar" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Language and Location */}
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-CH" />
        <meta name="geo.placename" content="Chandigarh" />
        <meta name="geo.position" content="30.7333;76.7794" />
        <meta name="ICBM" content="30.7333, 76.7794" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://skfighter.com/" />
        <meta property="og:site_name" content="Sushant Kumar - Backend Developer" />
        <meta property="og:locale" content="en_IN" />
        <meta property="profile:first_name" content="Sushant" />
        <meta property="profile:last_name" content="Kumar" />
        <meta property="profile:username" content="skfighter" />
        
        {/* Enhanced Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@skfighter007" />
        <meta name="twitter:creator" content="@skfighter007" />
        
        {/* Professional Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Additional Technical SEO */}
        <link rel="canonical" href="https://skfighter.com/" />
        <link rel="alternate" hrefLang="en-in" href="https://skfighter.com/" />
        <link rel="alternate" hrefLang="en" href="https://skfighter.com/" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-gray-900 text-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-xl p-8 sm:p-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-60 blur-lg"></div>
          <div className="relative z-10 text-center">
            <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-xs"></div>
              <div className="relative w-full h-full ring-4 ring-purple-300/30 rounded-full overflow-hidden">
                <Image
                  src="/images/sushant-kumar-profile.jpg"
                  alt="Sushant Kumar - Senior Backend Developer specializing in Node.js, PHP, Laravel and MySQL development in Chandigarh, India"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 96px, 128px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bK"
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sushant Kumar
            </h1>
            <p className="text-lg sm:text-xl mb-4 text-gray-200">
              Backend Developer (Node.js/PHP) | Chandigarh, India
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/connect" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-500">About Me</h2>
            <p className="mb-6 text-base sm:text-lg text-gray-200">
              Passionate <strong className="text-blue-500">Backend Developer</strong> with <strong>7+ years</strong> of experience in building robust, scalable web applications. I specialize in creating efficient server-side solutions that power modern web and mobile applications.
            </p>
            <p className="mb-6 text-base text-gray-300">
              My expertise spans across multiple technologies and frameworks, with a strong focus on performance optimization, security, and maintainable code architecture. I enjoy solving complex technical challenges and collaborating with cross-functional teams to deliver exceptional digital experiences.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Problem Solver</span>
              <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Team Player</span>
              <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Continuous Learner</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-lg text-blue-500">Backend Technologies:</h3>
              <ul className="space-y-2 text-gray-200">
                {['Node.js & NestJS', 'PHP & Laravel', 'Python & FastAPI', 'RESTful APIs', 'GraphQL', 'Microservices'].map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg text-purple-500">Infrastructure & Tools:</h3>
              <ul className="space-y-2 text-gray-200">
                {['AWS & Serverless', 'Docker & Kubernetes', 'MySQL & PostgreSQL', 'MongoDB & Redis', 'Git & CI/CD', 'Linux Administration'].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-500">Professional Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">Senior Backend Developer</h3>
                <span className="text-sm text-gray-400">2020 - Present</span>
              </div>
              <p className="text-blue-400 mb-2">Various Organizations | Chandigarh, India</p>
              <ul className="space-y-1 text-gray-200">
                <li>• Led development of scalable backend systems serving 100K+ users</li>
                <li>• Architected microservices infrastructure reducing response time by 40%</li>
                <li>• Implemented robust security measures and data protection protocols</li>
                <li>• Mentored junior developers and established coding best practices</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
                <span className="text-sm text-gray-400">2018 - 2020</span>
              </div>
              <p className="text-purple-400 mb-2">Technology Companies | India</p>
              <ul className="space-y-1 text-gray-200">
                <li>• Developed and maintained web applications using PHP, Laravel, and MySQL</li>
                <li>• Integrated third-party APIs and payment gateways</li>
                <li>• Optimized database queries improving application performance by 60%</li>
                <li>• Collaborated with frontend teams to deliver seamless user experiences</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">Junior Developer</h3>
                <span className="text-sm text-gray-400">2017 - 2018</span>
              </div>
              <p className="text-green-400 mb-2">Software Development | India</p>
              <ul className="space-y-1 text-gray-200">
                <li>• Built responsive web applications using modern frameworks</li>
                <li>• Participated in agile development processes and code reviews</li>
                <li>• Learned industry best practices for software development lifecycle</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-purple-500">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">API</span>
                </div>
                <h3 className="text-xl font-semibold text-white">E-commerce API Platform</h3>
              </div>
              <p className="text-gray-300 mb-4">Scalable REST API for e-commerce platform handling inventory, orders, and payments with Node.js and PostgreSQL.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded">AWS</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">CRM</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Customer Management System</h3>
              </div>
              <p className="text-gray-300 mb-4">Complete CRM solution with user management, analytics dashboard, and automated reporting using Laravel and MySQL.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-red-600/20 text-red-400 text-xs rounded">Laravel</span>
                <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">MySQL</span>
                <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded">Redis</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">IoT</span>
                </div>
                <h3 className="text-xl font-semibold text-white">IoT Data Processing</h3>
              </div>
              <p className="text-gray-300 mb-4">Real-time data processing system for IoT devices with serverless architecture and machine learning integration.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-600/20 text-orange-400 text-xs rounded">AWS Lambda</span>
                <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded">Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-green-500">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-4 text-lg text-blue-500 flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">⚙️</span>
                Backend Development
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Node.js / NestJS</span>
                    <span className="text-blue-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">PHP / Laravel</span>
                    <span className="text-blue-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Python / FastAPI</span>
                    <span className="text-blue-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg text-purple-500 flex items-center">
                <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">🗄️</span>
                Database Management
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">MySQL</span>
                    <span className="text-purple-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">PostgreSQL</span>
                    <span className="text-purple-400">88%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">MongoDB / Redis</span>
                    <span className="text-purple-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg text-green-500 flex items-center">
                <span className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">☁️</span>
                Cloud & DevOps
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">AWS Services</span>
                    <span className="text-green-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Docker / Kubernetes</span>
                    <span className="text-green-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">CI/CD Pipelines</span>
                    <span className="text-green-400">82%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg text-yellow-500 flex items-center">
                <span className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center mr-3">🔧</span>
                Tools & Practices
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Git / Version Control</span>
                    <span className="text-yellow-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">API Design</span>
                    <span className="text-yellow-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Agile / Scrum</span>
                    <span className="text-yellow-400">88%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Stats Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-yellow-500">Professional Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-white mb-2">7+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-200">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-white mb-2">100K+</div>
              <div className="text-green-200">Users Served</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-yellow-200">Technologies Mastered</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-indigo-500">Services I Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">API Development</h3>
              <p className="text-gray-300">Custom REST and GraphQL APIs with robust authentication, rate limiting, and comprehensive documentation.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-300">Database optimization, caching strategies, and code refactoring to improve application performance.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Architecture</h3>
              <p className="text-gray-300">Scalable cloud solutions using AWS services, serverless architecture, and container orchestration.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security Implementation</h3>
              <p className="text-gray-300">Comprehensive security measures including encryption, authentication, and vulnerability assessments.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">System Architecture</h3>
              <p className="text-gray-300">Design and implementation of microservices architecture and distributed systems.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Technical Consulting</h3>
              <p className="text-gray-300">Expert guidance on technology stack selection, best practices, and project planning.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-500">Get In Touch</h2>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Contact Information</h3>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:sushantsharma739@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    sushantsharma739@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+918195927482" className="text-green-400 hover:text-green-300 transition-colors">
                    +91 8195927482
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Connect With Me</h3>
              
              {/* LinkedIn */}
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sushant-kumar-1a4b30b2/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Professional Profile
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a href="https://github.com/skfighter" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Code Repository
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.167 3.632 2.182 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c3.629-.167 5.652-2.182 5.817-5.817C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123C19.773 2.245 17.755.228 14.123.06 13.056.012 12.716 0 10 0zm0 1.8c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.37.057 4.042 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Instagram</p>
                  <a href="https://www.instagram.com/skfighter.ig/#" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                    Personal Updates
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-6 border-t border-gray-700">
            <p className="text-gray-300 mb-4">Ready to start your project? Let's discuss your requirements!</p>
            <a 
              href="/connect" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg"
              title="Contact Sushant Kumar for Backend Development Projects"
              aria-label="Contact Sushant Kumar for your backend development needs"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Contact Me Now
            </a>
          </div>
        </section>
      </main>

      {/* Enhanced Footer with SEO Links */}
      <footer className="bg-gray-800 text-center py-8 text-gray-400 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-semibold text-white mb-3">Quick Links</h3>
              <nav className="space-y-2">
                <a href="/" className="block text-gray-400 hover:text-blue-400 transition-colors" title="Home - Sushant Kumar Backend Developer">Home</a>
                <a href="/blog" className="block text-gray-400 hover:text-blue-400 transition-colors" title="Tech Blog - Backend Development Articles">Blog</a>
                <a href="/connect" className="block text-gray-400 hover:text-blue-400 transition-colors" title="Contact Sushant Kumar">Contact</a>
                <a href="/chat" className="block text-gray-400 hover:text-blue-400 transition-colors" title="Chat with Sushant">Chat</a>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Services</h3>
              <nav className="space-y-2 text-sm">
                <span className="block text-gray-500">Node.js Development</span>
                <span className="block text-gray-500">PHP & Laravel Development</span>
                <span className="block text-gray-500">API Development</span>
                <span className="block text-gray-500">Database Design</span>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Connect</h3>
              <nav className="space-y-2">
                <a href="https://www.linkedin.com/in/sushant-kumar-1a4b30b2/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-blue-400 transition-colors" title="Sushant Kumar LinkedIn Profile">LinkedIn</a>
                <a href="https://github.com/skfighter" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-purple-400 transition-colors" title="Sushant Kumar GitHub Profile">GitHub</a>
                <a href="mailto:sushantsharma739@gmail.com" className="block text-gray-400 hover:text-green-400 transition-colors" title="Email Sushant Kumar">Email</a>
              </nav>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-700">
            <p className="mb-2">© {new Date().getFullYear()} Sushant Kumar. All rights reserved.</p>
            <p className="text-sm">
              <span className="text-gray-500">Backend Developer specializing in </span>
              <span className="text-blue-400">Node.js</span>
              <span className="text-gray-500">, </span>
              <span className="text-red-400">PHP</span>
              <span className="text-gray-500">, </span>
              <span className="text-green-400">Laravel</span>
              <span className="text-gray-500"> & </span>
              <span className="text-yellow-400">MySQL</span>
              <span className="text-gray-500"> in Chandigarh, India</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
