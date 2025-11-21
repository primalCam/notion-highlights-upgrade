// pages/blog/index.tsx
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPosts } from "../../lib/posts";

type PostFrontMatter = {
  title: string;
  date: string;
  excerpt: string;
};

type Post = {
  slug: string;
  frontMatter: PostFrontMatter;
};

type BlogIndexProps = {
  posts: Post[];
};

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center">
          Notion Highlights Blog
        </h1>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-white/70">No blog posts found.</p>
            <p className="text-white/50 mt-2">Check that your posts directory exists and contains .mdx files.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="glass-card p-8 rounded-2xl cursor-pointer transition-all hover:scale-[1.02] hover:bg-white/10">
                  <h2 className="text-3xl font-bold mb-4">
                    {post.frontMatter.title}
                  </h2>

                  <p className="text-white/70 text-lg mb-4">
                    {post.frontMatter.excerpt}
                  </p>

                  <p className="text-white/50 text-sm">
                    {post.frontMatter.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};