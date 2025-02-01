export default function handler(req, res) {
  const baseUrl = "https://www.kombiustasixirdalan.az";

  const pages = [
    { url: "/", changeFrequency: "daily", priority: 1.0 },
    { url: "/about", changeFrequency: "monthly", priority: 0.8 },
    { url: "/contact", changeFrequency: "weekly", priority: 0.7 },
    { url: "/services", changeFrequency: "monthly", priority: 0.7 },
    { url: "/faq", changeFrequency: "monthly", priority: 0.6 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
    </url>
    `
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
