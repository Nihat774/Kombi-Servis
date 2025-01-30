export const metadata = {
    title: "Sitemap",
  };
  
  export default function sitemap() {
    return [
      {
        url: "https://www.kombiustasixirdalan.az/",
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: "https://www.kombiustasixirdalan.az/about",
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://www.kombiustasixirdalan.az/contact",
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
    ];
  }
  