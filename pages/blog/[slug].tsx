// pages/blog/[slug].tsx - UPDATED VERSION
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllSlugs, getPostBySlug } from "../../lib/posts";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { gaEvent } from "../../lib/ga";

const SITE_URL = "https://notionhighlights.com";

type Props = {
  frontMatter: any;
  content: string;
  slug: string;
};

// Helper to get post category
const getPostCategory = (frontMatter: any): string => {
  return frontMatter?.category || frontMatter?.tags?.[0] || "Article";
};

// Helper to calculate read time
const getReadTime = (content: string, frontMatter: any): string => {
  if (frontMatter?.readTime) return frontMatter.readTime;
  
  const wordCount = content?.split(/\s+/).length || 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
};

export default function BlogPost({ frontMatter, content, slug }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (frontMatter?.title) {
      gaEvent('post_view', { 
        slug, 
        title: frontMatter.title.substring(0, 50) 
      });
    }
  }, [slug, frontMatter]);

  if (router.isFallback) {
    return (
      <Layout>
        <div className="min-h-screen bg-[#030303] pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-4xl mb-4 text-yellow-400">⏳</div>
            <p className="text-white/60 text-lg font-light">Loading article...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const {
    title = "Untitled Article",
    excerpt,
    description,
    date = "",
    keywords = "",
    image,
    tags = []
  } = frontMatter;

  const metaDescription = excerpt || description || "";
  const ogImage = image
    ? `${SITE_URL}${image}`
    : `${SITE_URL}/default-og.png`;
  const canonicalUrl = `${SITE_URL}/blog/${slug}`;

  const calculatedReadTime = getReadTime(content, frontMatter);
  const postCategory = getPostCategory(frontMatter);

  return (
    <Layout>
      <Head>
        {/* Primary SEO */}
        <title>{title} — Notion Highlights Blog</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD Schema (Article) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description: metaDescription,
              image: ogImage,
              author: {
                "@type": "Organization",
                name: "Notion Highlights",
              },
              publisher: {
                "@type": "Organization",
                name: "Notion Highlights",
                logo: {
                  "@type": "ImageObject",
                  url: `${SITE_URL}/icons/icon128.png`,
                },
              },
              url: canonicalUrl,
              datePublished: date,
            }),
          }}
        />
      </Head>

      {/* Base Background */}
      <div className="min-h-screen bg-[#030303] pt-32 pb-20 px-6">
        
        {/* Dynamic Gold Glow */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-yellow-400/20 to-yellow-600/10 blur-[160px] opacity-40" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Link */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
            >
              ← Back to All Articles
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card-chrome rounded-[2.5rem] border border-white/10 p-12 mb-12 bg-gradient-to-br from-yellow-500/5 to-transparent"
          >
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-widest">
                {postCategory}
              </span>
              <span className="text-white/40 text-sm font-light">
                {date}
              </span>
              <span className="text-white/40 text-sm font-light">
                • {calculatedReadTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-white/60 text-xl leading-relaxed font-light mb-8">
              {metaDescription}
            </p>

            {/* Tags */}
            {tags && Array.isArray(tags) && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag: string, index: number) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-white/5 text-white/60 rounded-full text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer"
                    onClick={() => {
                      gaEvent('tag_click', { tag, source: 'blog_post' });
                      router.push(`/blog?category=${tag}`);
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.header>

          {/* Article Content */}
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-chrome rounded-[2.5rem] border border-white/10 p-12 mb-12"
          >
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ ...props }) => (
                    <h1 className="text-3xl md:text-4xl font-black text-white mt-12 mb-6 tracking-tight border-b border-white/5 pb-4" {...props} />
                  ),
                  h2: ({ ...props }) => (
                    <h2 className="text-2xl md:text-3xl font-black text-white mt-10 mb-4 tracking-tight" {...props} />
                  ),
                  h3: ({ ...props }) => (
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight" {...props} />
                  ),
                  h4: ({ ...props }) => (
                    <h4 className="text-lg font-bold text-white mt-6 mb-2" {...props} />
                  ),
                  p: ({ ...props }) => (
                    <p className="mb-6 text-white/60 leading-relaxed font-light text-lg" {...props} />
                  ),
                  ul: ({ ...props }) => (
                    <ul className="list-disc list-inside mb-6 text-white/60 space-y-2 font-light" {...props} />
                  ),
                  ol: ({ ...props }) => (
                    <ol className="list-decimal list-inside mb-6 text-white/60 space-y-2 font-light" {...props} />
                  ),
                  li: ({ ...props }) => (
                    <li className="mb-1 text-white/60 font-light" {...props} />
                  ),
                  a: ({ ...props }) => (
                    <a 
                      className="text-yellow-400 hover:text-yellow-300 underline font-medium" 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => gaEvent('external_link_click', { url: props.href || '' })}
                      {...props} 
                    />
                  ),
                  strong: ({ ...props }) => (
                    <strong className="font-bold text-white" {...props} />
                  ),
                  em: ({ ...props }) => (
                    <em className="italic text-white/70" {...props} />
                  ),
                  blockquote: ({ ...props }) => (
                    <blockquote className="border-l-4 border-yellow-500/50 pl-6 py-2 my-6 italic text-white/70 font-light" {...props} />
                  ),
                  code: ({ node, inline, className, children, ...props }: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline ? (
                      <pre className="bg-white/10 p-4 rounded-lg overflow-x-auto my-6">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-white" {...props}>
                        {children}
                      </code>
                    );
                  },
                  pre: ({ ...props }) => (
                    <pre className="bg-white/10 p-4 rounded-lg overflow-x-auto my-6" {...props} />
                  ),
                  img: ({ ...props }) => (
                    <img 
                      className="rounded-2xl my-8 border border-white/10 max-w-full h-auto" 
                      loading="lazy"
                      {...props} 
                    />
                  ),
                  hr: ({ ...props }) => (
                    <hr className="my-8 border-white/10" {...props} />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </motion.article>

          {/* Share & CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card-chrome rounded-[2.5rem] border border-yellow-500/20 p-12 text-center bg-gradient-to-br from-yellow-500/5 to-transparent"
          >
            <h3 className="text-2xl font-black text-white mb-6 tracking-tight">Enjoyed this article?</h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto font-light">
              Share it with others who might find it useful!
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <button
                onClick={() => {
                  gaEvent('share_click', { platform: 'twitter', slug });
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(canonicalUrl)}`, '_blank');
                }}
                className="px-6 py-3 bg-white/5 text-white font-medium text-sm uppercase tracking-widest border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <span>🦋</span>
                Share on Twitter
              </button>
              <button
                onClick={() => {
                  gaEvent('share_click', { platform: 'linkedin', slug });
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`, '_blank');
                }}
                className="px-6 py-3 bg-white/5 text-white font-medium text-sm uppercase tracking-widest border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <span>💼</span>
                Share on LinkedIn
              </button>
              <button
                onClick={() => {
                  gaEvent('share_click', { platform: 'copy', slug });
                  navigator.clipboard.writeText(canonicalUrl);
                  alert('Link copied to clipboard!');
                }}
                className="px-6 py-3 bg-white/5 text-white font-medium text-sm uppercase tracking-widest border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <span>📋</span>
                Copy Link
              </button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">More from the blog</h4>
              <Link 
                href="/blog"
                onClick={() => gaEvent('cta_click', { action: 'view_more_posts', source: 'blog_post' })}
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm uppercase tracking-widest font-bold transition-colors"
              >
                Explore All Articles →
              </Link>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 glass-card-chrome rounded-[2.5rem] border border-white/10 p-12 text-center"
          >
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
              Never miss an update
            </h3>
            <p className="text-white/60 mb-8 max-w-lg mx-auto font-light">
              Get the latest productivity tips, Notion templates, and AI workflow guides delivered to your inbox.
            </p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
                if (emailInput?.value) {
                  gaEvent('newsletter_signup', { source: 'blog_post_page', slug });
                  alert(`Thank you! We'll send updates to ${emailInput.value}`);
                  emailInput.value = '';
                }
              }}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light"
              />
              <button
                type="submit"
                className="bg-white text-black font-black text-sm uppercase tracking-widest py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/30 text-sm mt-6 font-light">
              No spam, unsubscribe anytime. Read our <a href="/privacy" className="text-yellow-400 hover:text-yellow-300 transition-colors">privacy policy</a>
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        body { background: #030303; }
        .glass-card-chrome {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
        }
        .prose {
          color: inherit;
        }
        .prose a {
          text-decoration: none;
        }
        .prose a:hover {
          text-decoration: underline;
        }
        .prose code::before,
        .prose code::after {
          content: none;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug as string;

    if (!slug) {
      return { notFound: true };
    }

    const post = getPostBySlug(slug);

    return {
      props: {
        frontMatter: post.frontMatter,
        content: post.content,
        slug,
      },
    };
  } catch (error) {
    console.error("Error generating blog post:", error);
    return { notFound: true };
  }
};