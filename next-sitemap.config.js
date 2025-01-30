/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.kombiustasixirdalan.az', // Saytının əsas URL-i
    generateRobotsTxt: true, // `robots.txt` də yaratsın
    changefreq: 'daily', // Gündəlik yenilənmə
    priority: 0.7, // Səhifələrin indekslənmə prioriteti
    sitemapSize: 5000, // Maksimum 5000 linki bir `sitemap.xml` faylında saxlayır
    exclude: ['/admin'], // İndekslənməsini istəmədiyin səhifələri yaz
  };
  