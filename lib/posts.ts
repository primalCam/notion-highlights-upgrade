// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Folder where your .mdx blog posts live
const postsDirectory = path.join(process.cwd(), "posts");

/**
 * Get all posts from the /posts directory
 * Returns sorted list by date (newest first)
 */
export function getAllPosts() {
  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Posts directory not found:", postsDirectory);
    return [];
  }

  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const { data: frontMatter } = matter(fileContent);

      return {
        slug: filename.replace(".mdx", ""),
        frontMatter,
      };
    });

  return posts.sort(
    (a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  );
}

/**
 * Get the full content of a single post
 */
export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data: frontMatter, content } = matter(fileContent);

  return {
    slug,
    frontMatter,
    content,
  };
}

/**
 * List all slugs for dynamic routing
 */
export function getAllSlugs() {
  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Posts directory not found:", postsDirectory);
    return [];
  }

  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}