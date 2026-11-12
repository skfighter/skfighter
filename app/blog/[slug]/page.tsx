import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, type Block } from "../posts";
import { SEOBreadcrumbs } from "../../components/SEOSchemas";

const SITE_URL = "https://www.skfighter.com";

// Pre-render every post at build time; unknown slugs return 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: ["Sushant Kumar"],
      tags: post.tags,
      images: [{ url: "/images/sushant-kumar-profile.jpg", alt: "Sushant Kumar" }],
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="text-2xl font-semibold text-white mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-gray-300 leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre
          key={i}
          className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto text-sm mb-6"
        >
          <code className={`language-${block.lang} text-gray-100`}>{block.code}</code>
        </pre>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url,
    mainEntityOfPage: url,
    keywords: post.tags.join(", "),
    image: `${SITE_URL}/images/sushant-kumar-profile.jpg`,
    author: { "@id": `${SITE_URL}/#person`, "@type": "Person", name: "Sushant Kumar", url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-gray-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: post.title, url },
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-400">Blog</Link>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="text-sm text-gray-400">
            By <Link href="/" className="text-gray-200 hover:text-blue-400">Sushant Kumar</Link>
            {" · "}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {" · "}
            {post.readTime}
          </div>
        </header>

        {post.content.map(renderBlock)}
      </article>

      <section className="mt-12 bg-gray-800 rounded-xl p-6 text-center">
        <p className="text-gray-300 mb-4">
          Need help with your backend? I build and optimise APIs and databases.
        </p>
        <Link
          href="/connect"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
        >
          Get in touch
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white mb-4">More articles</h2>
        <ul className="space-y-3">
          {others.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="text-blue-400 hover:text-blue-300">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
