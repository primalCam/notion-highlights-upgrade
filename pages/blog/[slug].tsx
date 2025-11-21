// pages/blog/[slug].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllSlugs, getPostBySlug } from "../../lib/posts";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

type Props = {
  frontMatter: any;
  content: string;
};

export default function BlogPost({ frontMatter, content }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title} — Notion Highlights Blog</title>
        <meta name="description" content={frontMatter.excerpt || frontMatter.description} />
      </Head>

      <article className="max-w-3xl mx-auto px-6 py-24">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">{frontMatter.title}</h1>
          <p className="text-gray-400 text-lg">{frontMatter.date}</p>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-white" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3 text-white" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-4 mb-2 text-white" {...props} />,
              p: ({ node, ...props }) => <p className="mb-4 text-white/80 leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 text-white/80" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 text-white/80" {...props} />,
              li: ({ node, ...props }) => <li className="mb-1 text-white/80" {...props} />,
              a: ({ node, ...props }) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
              code: ({ node, ...props }) => <code className="bg-white/10 px-1 py-0.5 rounded text-sm" {...props} />,
              pre: ({ node, ...props }) => <pre className="bg-white/10 p-4 rounded-lg overflow-x-auto my-4" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
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
      return {
        notFound: true,
      };
    }

    const post = getPostBySlug(slug);

    return {
      props: {
        frontMatter: post.frontMatter,
        content: post.content,
      },
    };
  } catch (error) {
    console.error("Error generating blog post:", error);
    return {
      notFound: true,
    };
  }
};