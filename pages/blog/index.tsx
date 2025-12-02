// pages/blog/index.tsx
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPosts, Post } from "../../lib/posts";
import { useEffect } from "react";
import { gaEvent } from "../../lib/ga";

const SITE_URL = "https://notionhighlights.com";

interface BlogIndexProps {
  posts: Post[];
}

export default function BlogIndex({ posts = [] }: BlogIndexProps) {
  useEffect(() => {
    gaEvent('page_view', { page: 'blog', post_count: posts.length })
  }, [posts.length])

  const pageTitle =
    "Notion Highlights Blog — Tutorials, Research, Productivity & AI Workflow Guides";
  const description =
    "Read high-quality guides on Notion productivity, web clipping, AI workflows, research automation, and creator tools.";
  const canonicalUrl = `${SITE_URL}/blog`;
  const ogImage = `${SITE_URL}/default-og.png`;

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OG */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-12">
          Notion Highlights Blog
        </h1>

        <div className="space-y-10">
          {posts.length === 0 && (
            <p className="text-white/70">No articles found yet.</p>
          )}

          {posts.map(({ slug, frontMatter }) => (
            <article
              key={slug}
              className="
                glass
                rounded-2xl
                p-8
                transition
                hover:shadow-xl
                hover:scale-[1.01]
                cursor-pointer
                border border-white/10
              "
            >
              <Link 
                href={`/blog/${slug}`}
                onClick={() => gaEvent('blog_post_click', { slug, title: frontMatter?.title?.substring(0, 50) })}
              >
                <h2 className="text-2xl font-bold text-white hover:text-blue-300 mb-3">
                  {frontMatter?.title || "Untitled Post"}
                </h2>
              </Link>

              <p className="text-gray-400 mb-3">
                {frontMatter?.date || "No date provided"}
              </p>

              <p className="text-white/80 leading-relaxed mb-5">
                {frontMatter?.excerpt ||
                  frontMatter?.description ||
                  "No summary available."}
              </p>

              <Link
                href={`/blog/${slug}`}
                className="text-blue-400 hover:text-blue-300 underline text-lg"
                onClick={() => gaEvent('blog_post_click', { slug, title: frontMatter?.title?.substring(0, 50) })}
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts() || [];

  return {
    props: {
      posts,
    },
  };
}
