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
// and excludes /brochure + /business-cards (those pages set noindex on purpose).
const routes = [
  { path: "/services", title: "Services | Aiyana Services Edmonton", description: "Integrated respite care, ADHD and autism assessments, addiction support, and dual diagnosis care in Edmonton." },
  { path: "/services/respite-care", title: "Respite Care Edmonton | Aiyana Services", description: "Flexible respite care in Edmonton with trained caregivers and 24/7 support for families of children, youth, and adults with complex needs." },
  { path: "/services/adhd-assessment", title: "ADHD Assessment Edmonton | Aiyana Services", description: "Comprehensive ADHD assessments in Edmonton with standardized testing, behavioural observation, and detailed reports for children and youth." },
  { path: "/services/autism-evaluation", title: "Autism Evaluation Edmonton | Aiyana Services", description: "Gold-standard autism evaluations in Edmonton using ADOS-2 and multi-disciplinary expertise across toddlers, children, and adolescents." },
  { path: "/services/addiction-support", title: "Addiction Support Edmonton | Aiyana Services", description: "Family-centered addiction support in Edmonton with individual therapy, family counseling, and dual diagnosis treatment for youth." },
  { path: "/services/dual-diagnosis", title: "Dual Diagnosis Care Edmonton | Aiyana Services", description: "Integrated dual diagnosis care in Edmonton for co-occurring mental health and developmental conditions in children and youth." },
  { path: "/about", title: "About Aiyana Services | Edmonton Family Care", description: "Learn about Aiyana Services' mission, values, and team supporting Edmonton families with respite, assessments, and integrated care." },
  { path: "/contact", title: "Contact Aiyana Services | Edmonton", description: "Contact Aiyana Services in Edmonton for respite care, ADHD and autism assessments, and integrated family support." },
  { path: "/faq", title: "FAQ | Aiyana Services Edmonton", description: "Answers about respite care, ADHD and autism assessments, FSCD/PDD funding, insurance, and staff qualifications in Edmonton." },
  { path: "/about/mission", title: "Our Mission | Aiyana Services" },
  { path: "/about/team", title: "Our Team | Aiyana Services" },
  { path: "/about/testimonials", title: "Client Testimonials | Aiyana Services" },
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
