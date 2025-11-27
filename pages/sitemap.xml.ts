// pages/sitemap.xml.ts
import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next";

const SITE_URL = "https://notionhighlights.com";

// Basic slug sanitizer
function cleanSlug(slug: string) {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9\-]/g, "-") // replace invalid chars w/ dash
    .replace(/-+/g, "-")          // collapse multiple dashes
    .replace(/^-|-$/g, "");       // trim leading/trailing dash
}

function generateSiteMap(slugs: string[]) {
  const urls = slugs
    .map(
      (slug) => `
  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const staticPages = `
  <url>
    <loc>${SITE_URL}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/upgrade</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  `;

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
  >
    ${staticPages}
    ${urls}
  </urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const slugs = files
    .filter((file) => /\.(md|mdx)$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""))
    .map(cleanSlug); // 🔥 sanitize every slug

  const sitemap = generateSiteMap(slugs);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function SiteMap() {
  return null;
}
