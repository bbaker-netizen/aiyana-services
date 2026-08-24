import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const indexPath = path.join(distDir, "index.html");
const SITE_URL = "https://aiyanaservices.com";

if (!fs.existsSync(indexPath)) {
    console.warn("generate-seo-html: dist/index.html not found, skipping.");
    process.exit(0);
}

const template = fs.readFileSync(indexPath, "utf-8");

// Routes with page-specific title/description, mirroring src/hooks/useSeo.ts
// Intentionally excludes "/" (homepage already correct in the base template),
const routes = [
  { path: "/services", title: "Services | Aiyana Services Edmonton", description: "In-home respite and FSCD and PDD funded community supports for Edmonton families." },
  { path: "/services/respite-care", title: "Respite Care Edmonton | Aiyana Services", description: "Flexible in-home respite in Edmonton with screened, trained support workers for families of children, youth, and adults with complex needs." },
  { path: "/about", title: "About Aiyana Services | Edmonton Family Care", description: "Learn about Aiyana Services' mission and values, supporting Edmonton families with in-home respite and funded community supports." },
  { path: "/contact", title: "Contact Aiyana Services | Edmonton", description: "Contact Aiyana Services in Edmonton for in-home respite, funded community supports, and help with FSCD and PDD funding." },
  { path: "/faq", title: "FAQ | Aiyana Services Edmonton", description: "Answers about in-home respite, community supports, FSCD and PDD funding, staff screening, and booking in Edmonton." },
  { path: "/about/mission", title: "Our Mission | Aiyana Services" },
  { path: "/about/careers", title: "Careers | Aiyana Services" },
  { path: "/privacy-policy", title: "Privacy Policy | Aiyana Services" },
  { path: "/terms-of-service", title: "Terms of Service | Aiyana Services" },
  ];


function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
}

function replaceTag(html, regex, replacement) {
    return regex.test(html) ? html.replace(regex, replacement) : html;
}

function buildHtml(route) {
    const { path: routePath, title, description } = route;
    const url = SITE_URL + routePath;
    let html = template;

  if (title) {
        const safeTitle = escapeHtml(title);
        html = replaceTag(html, /<title>[\s\S]*?<\/title>/, "<title>" + safeTitle + "</title>");
        html = replaceTag(html, /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, '<meta property="og:title" content="' + safeTitle + '" />');
        html = replaceTag(html, /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/, '<meta name="twitter:title" content="' + safeTitle + '" />');
  }

  if (description) {
        const safeDescription = escapeHtml(description);
        html = replaceTag(html, /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, '<meta name="description" content="' + safeDescription + '" />');
        html = replaceTag(html, /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, '<meta property="og:description" content="' + safeDescription + '" />');
        html = replaceTag(html, /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/, '<meta name="twitter:description" content="' + safeDescription + '" />');
  }

  html = replaceTag(html, /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, '<link rel="canonical" href="' + url + '" />');
    html = replaceTag(html, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, '<meta property="og:url" content="' + url + '" />');

  return html;
}

let written = 0;
for (const route of routes) {
    const html = buildHtml(route);
    const outDir = path.join(distDir, route.path);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
    written++;
}

console.log("generate-seo-html: wrote " + written + " static route snapshots with page-specific meta tags.");
