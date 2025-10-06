import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Blog | Insights from a Senior Backend Developer",
  description: "Read technical articles, tutorials, and insights about Node.js, PHP, Laravel, MySQL, and backend development by Sushant Kumar.",
  keywords: "backend development blog, node.js tutorials, php articles, laravel tips, mysql optimization, web development insights",
  openGraph: {
    title: "Tech Blog | Backend Development Insights by Sushant Kumar",
    description: "Technical articles and tutorials about backend development, Node.js, PHP, Laravel, and more.",
    url: "https://skfighter.com/blog",
  },
  alternates: {
    canonical: "https://skfighter.com/blog",
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and NestJS",
      excerpt: "Learn how to create robust, scalable APIs using Node.js and the NestJS framework with best practices and real-world examples.",
      date: "2025-10-01",
      readTime: "8 min read",
      tags: ["Node.js", "NestJS", "API Development"],
      slug: "scalable-apis-nodejs-nestjs"
    },
    {
      id: 2,
      title: "Laravel Performance Optimization: Database Queries",
      excerpt: "Discover advanced techniques to optimize Laravel application performance through efficient database query optimization.",
      date: "2025-09-28",
      readTime: "6 min read",
      tags: ["Laravel", "PHP", "Database", "Performance"],
      slug: "laravel-performance-optimization"
    },
    {
      id: 3,
      title: "MySQL Indexing Strategies for Better Performance",
      excerpt: "Master MySQL indexing strategies to dramatically improve your database performance and query execution time.",
      date: "2025-09-25",
      readTime: "10 min read",
      tags: ["MySQL", "Database", "Performance", "Indexing"],
      slug: "mysql-indexing-strategies"
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Tech Blog
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Insights, tutorials, and best practices from a senior backend developer. 
          Learn about Node.js, PHP, Laravel, MySQL, and modern web development.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors">
              <a href={`/blog/${post.slug}`} title={post.title}>
                {post.title}
              </a>
            </h2>
            <p className="text-gray-300 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span>{post.readTime}</span>
            </div>
          </article>
        ))}
      </section>

      {/* Coming Soon Section */}
      <section className="bg-gray-800 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">More Articles Coming Soon</h2>
        <p className="text-gray-300 mb-6">
          I&apos;m actively working on more in-depth articles about backend development, 
          performance optimization, and modern web technologies.
        </p>
        <a 
          href="/connect" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
        >
          Subscribe for Updates
        </a>
      </section>
    </main>
  );
}