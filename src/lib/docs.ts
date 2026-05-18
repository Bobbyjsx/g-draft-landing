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

  return { slug: realSlug, meta: data, content };
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
