// pages/blog/index.tsx - UPDATED VERSION
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPosts, Post } from "../../lib/posts";
import { useEffect, useState, useMemo } from "react";
import { gaEvent } from "../../lib/ga";
import { motion, AnimatePresence } from "framer-motion";

const SITE_URL = "https://notionhighlights.com";

interface BlogIndexProps {
  posts: Post[];
}

// Helper to safely get category from frontMatter
const getPostCategory = (frontMatter: any): string => {
  return frontMatter?.category || frontMatter?.tags?.[0] || "General";
};

// Helper to estimate read time
const getReadTime = (content: string, frontMatter: any): string => {
  if (frontMatter?.readTime) return frontMatter.readTime;
  
  const wordCount = content?.split(/\s+/).length || 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
};

export default function BlogIndex({ posts = [] }: BlogIndexProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    gaEvent('page_view', { page: 'blog', post_count: posts.length })
  }, [posts.length]);

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const cats = posts
      .map(post => getPostCategory(post.frontMatter))
      .filter(Boolean)
      .filter((value, index, self) => self.indexOf(value) === index);
    return cats as string[];
  }, [posts]);

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        (post.frontMatter?.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (post.frontMatter?.excerpt?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (post.frontMatter?.description?.toLowerCase() || '').includes(searchQuery.toLowerCase());
      
      const postCategory = getPostCategory(post.frontMatter);
      const matchesCategory = selectedCategory === null || 
        postCategory === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const otherPosts = filteredPosts.slice(1);

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

      {/* Base Background */}
      <div className="min-h-screen bg-[#030303] pt-32 pb-20 px-6">
        
        {/* Dynamic Gold Glow */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-yellow-400/20 to-yellow-600/10 blur-[160px] opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
              Notion Highlights
              <span className="text-white/20 block">Blog</span>
            </h1>
            <p className="text-white/40 text-lg max-w-xl mx-auto font-light">
              Tutorials, research, productivity & AI workflow guides for modern creators
            </p>
          </div>

          {/* Search and Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card-chrome rounded-[2rem] border border-white/10 p-8 mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search Input */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles by title or content..."
                    className="w-full px-6 py-4 pl-14 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light"
                  />
                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/40">
                    🔍
                  </div>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter */}
              <div className="md:w-64">
                <select
                  value={selectedCategory || ""}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light appearance-none"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters Button */}
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                    gaEvent('filter_cleared', { hadSearch: !!searchQuery, hadCategory: !!selectedCategory });
                  }}
                  className="px-6 py-4 bg-white/5 text-white font-medium text-sm uppercase tracking-widest border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Results Count */}
            <AnimatePresence>
              {(searchQuery || selectedCategory) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-white/5"
                >
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-white/60 font-light">
                      Showing <span className="text-yellow-400 font-bold">{filteredPosts.length}</span> of{" "}
                      <span className="text-white">{posts.length}</span> articles
                      {searchQuery && (
                        <span> for "<span className="text-white">{searchQuery}</span>"</span>
                      )}
                      {selectedCategory && selectedCategory !== "General" && (
                        <span> in <span className="text-yellow-400">{selectedCategory}</span></span>
                      )}
                    </div>
                    {filteredPosts.length === 0 && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCategory(null);
                        }}
                        className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors"
                      >
                        Show all articles →
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <Link 
                href={`/blog/${featuredPost.slug}`}
                onClick={() => gaEvent('featured_post_click', { 
                  slug: featuredPost.slug, 
                  title: (featuredPost.frontMatter?.title?.substring(0, 50) || '') 
                })}
              >
                <div className="glass-card-chrome rounded-[2.5rem] border border-yellow-500/30 overflow-hidden hover:scale-[1.01] transition-all duration-500 bg-gradient-to-br from-yellow-500/10 to-transparent group">
                  <div className="p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-widest">
                        Featured
                      </span>
                      <span className="text-white/40 text-sm font-light">
                        {featuredPost.frontMatter?.date || "Latest"}
                      </span>
                      <span className="px-3 py-1 bg-white/5 text-white/60 rounded-full text-xs font-medium">
                        {getPostCategory(featuredPost.frontMatter)}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight group-hover:text-yellow-400 transition-colors">
                      {featuredPost.frontMatter?.title || "Untitled Post"}
                    </h2>
                    <p className="text-white/60 text-lg mb-8 leading-relaxed font-light max-w-3xl">
                      {featuredPost.frontMatter?.excerpt || featuredPost.frontMatter?.description || "No summary available."}
                    </p>
                    <div className="flex items-center gap-3 text-yellow-400 font-bold text-sm uppercase tracking-widest">
                      Read Featured Article
                      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Blog Posts Grid or Empty State */}
          <AnimatePresence mode="wait">
            {filteredPosts.length > 1 ? (
              <motion.div
                key="posts-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {otherPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card-chrome rounded-[2rem] border border-white/10 p-8 hover:border-yellow-500/30 transition-all duration-500 hover:scale-[1.02] group cursor-pointer"
                    onClick={() => {
                      gaEvent('blog_post_click', { 
                        slug: post.slug, 
                        title: (post.frontMatter?.title?.substring(0, 50) || '') 
                      })
                      window.location.href = `/blog/${post.slug}`
                    }}
                  >
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="block"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-white/40 text-sm font-light">
                          {post.frontMatter?.date || "No date provided"}
                        </span>
                        <span className="px-3 py-1 bg-white/5 text-white/60 rounded-full text-xs font-medium">
                          {getPostCategory(post.frontMatter)}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-yellow-400 transition-colors">
                        {post.frontMatter?.title || "Untitled Post"}
                      </h2>
                      
                      <p className="text-white/60 mb-6 leading-relaxed font-light line-clamp-3">
                        {post.frontMatter?.excerpt || post.frontMatter?.description || "No summary available."}
                      </p>
                      
                      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 text-yellow-400 text-sm font-bold uppercase tracking-widest">
                          Read Article
                          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </div>
                        <div className="text-white/30 text-xs font-light ml-auto">
                          {getReadTime(post.content || '', post.frontMatter)}
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            ) : filteredPosts.length === 0 ? (
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-card-chrome rounded-[2.5rem] border border-yellow-500/20 p-16 text-center bg-gradient-to-br from-yellow-500/5 to-transparent"
              >
                <div className="text-6xl mb-6 text-yellow-400">🔍</div>
                <h2 className="text-3xl font-black text-white mb-4 tracking-tight">No articles found</h2>
                <p className="text-white/60 mb-6 max-w-md mx-auto font-light">
                  {searchQuery || selectedCategory ? (
                    <>
                      No articles match your search criteria. Try different keywords or clear filters.
                    </>
                  ) : (
                    "We're cooking up some amazing content. Check back soon for tutorials, guides, and productivity insights!"
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {(searchQuery || selectedCategory) && (
                    <button 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory(null);
                      }}
                      className="bg-white text-black font-black text-sm uppercase tracking-widest py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300"
                    >
                      Show All Articles
                    </button>
                  )}
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-white/5 text-white font-bold text-sm uppercase tracking-widest py-4 px-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    Suggest a Topic
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Newsletter CTA */}
          {filteredPosts.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-20 glass-card-chrome rounded-[2.5rem] border border-yellow-500/30 p-12 text-center bg-gradient-to-br from-yellow-500/10 to-transparent"
            >
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                Never Miss an Update
              </h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto font-light">
                Get the latest productivity tips, Notion templates, and AI workflow guides delivered to your inbox.
              </p>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
                  if (emailInput?.value) {
                    gaEvent('newsletter_signup', { source: 'blog_page' });
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
          )}
        </div>
      </div>

      <style jsx global>{`
        body { background: #030303; }
        .glass-card-chrome {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .glass-card-chrome:hover {
          box-shadow: 0 20px 60px rgba(245, 158, 11, 0.1);
        }
        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.5em;
          padding-right: 3rem;
        }
        select option {
          background: #1a1a1a;
          color: white;
        }
      `}</style>
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