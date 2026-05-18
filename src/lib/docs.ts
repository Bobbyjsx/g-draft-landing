import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "docs");

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(docsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Robust link rewriting to ensure internal markdown links work on the web
  const transformedContent = content.replace(/\]\((.*?)\)/g, (match, linkPath) => {
    // Only transform internal relative links
    if (linkPath.startsWith("http") || linkPath.startsWith("#") || linkPath.startsWith("/")) {
      return match;
    }

    let newLink = linkPath;

    // Handle README mapping specifically
    if (newLink === "README.md" || newLink === "../README.md") {
      return `](/docs/introduction)`;
    }

    // Remove docs/ prefix if present to normalize paths
    if (newLink.startsWith("docs/")) {
      newLink = newLink.replace("docs/", "");
    } else if (newLink.startsWith("./docs/")) {
       newLink = newLink.replace("./docs/", "");
    }

    // Ensure it starts with /docs/
    newLink = `/docs/${newLink}`;

    // Remove .md extension only for documentation pages
    if (newLink.endsWith(".md")) {
      newLink = newLink.replace(/\.md$/, "");
    }

    return `](${newLink})`;
  });

  return { slug: realSlug, meta: data, content: transformedContent };
}

export function getAllDocs() {
  if (!fs.existsSync(docsDirectory)) return [];
  const files = fs.readdirSync(docsDirectory);
  const docs = files
    .filter((file) => file.endsWith(".md") && file !== "introduction.md")
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(docsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
      };
    });

  // Always put Introduction first
  docs.unshift({ slug: "introduction", title: "Introduction" });
  
  return docs;
}
