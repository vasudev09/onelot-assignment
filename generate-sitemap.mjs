import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

const staticPaths = ["/"];

// // Function to generate the sitemap XML
async function generateSitemap() {
  console.log("Generating sitemap.xml ....");

  const allPaths = [...staticPaths];
  const sitemapEntries = allPaths
    .map((url) => {
      return `
      <url>
        <loc>${SITE_URL}${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapEntries}
  </urlset>`;

  // Write sitemap.xml to the public directory
  const sitemapPath = path.join(__dirname, "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap);
  console.log("Sitemap generated successfully!");
}

generateSitemap();
