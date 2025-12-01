// pages/blog/[slug].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllSlugs, getPostBySlug } from "../../lib/posts";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const SITE_URL = "https://notionhighlights.com";

type Props = {
  frontMatter: any;
  content: string;
  slug: string; // ✅ Added slug
};

export default function BlogPost({ frontMatter, content, slug }: Props) {
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

  const {
    title,
    excerpt,
    description,
    date,
    keywords,
    image
  } = frontMatter;

  const metaDescription = excerpt || description || "";
  const ogImage = image
    ? `${SITE_URL}${image}`
    : `${SITE_URL}/default-og.png`;

  // ❌ OLD (broken for SEO):
  // const canonicalUrl = `${SITE_URL}${router.asPath}`;

  // ✅ NEW (clean, stable, Google-friendly):
  const canonicalUrl = `${SITE_URL}/blog/${slug}`;

  return (
    <Layout>
      <Head>
        {/* Primary SEO */}
        <title>{title} — Notion Highlights Blog</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords || ""} />
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

      {/* MAIN ARTICLE */}
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-gray-400 text-lg">{date}</p>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-white" {...props} />,
              h2: ({ ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3 text-white" {...props} />,
              h3: ({ ...props }) => <h3 className="text-xl font-bold mt-4 mb-2 text-white" {...props} />,
              p: ({ ...props }) => <p className="mb-4 text-white/80 leading-relaxed" {...props} />,
              ul: ({ ...props }) => <ul className="list-disc list-inside mb-4 text-white/80" {...props} />,
              ol: ({ ...props }) => <ol className="list-decimal list-inside mb-4 text-white/80" {...props} />,
              li: ({ ...props }) => <li className="mb-1 text-white/80" {...props} />,
              a: ({ ...props }) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
              code: ({ ...props }) => (
                <code className="bg-white/10 px-1 py-0.5 rounded text-sm" {...props} />
              ),
              pre: ({ ...props }) => (
                <pre className="bg-white/10 p-4 rounded-lg overflow-x-auto my-4" {...props} />
              ),
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
      return { notFound: true };
    }

    const post = getPostBySlug(slug);

    return {
      props: {
        frontMatter: post.frontMatter,
        content: post.content,
        slug, // ✅ Pass slug to the component
      },
    };
  } catch (error) {
    console.error("Error generating blog post:", error);
    return { notFound: true };
  }
};
