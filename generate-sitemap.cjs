const fs = require('fs');

const DOMAIN = 'https://www.audiopigment.com';
const languages = ['fr', 'en'];
const pages = [
  '',
  '/expertise',
  '/realisations',
  '/services',
  '/studios',
  '/contact',
  '/actu',
  '/cgu',
  '/Mentions'
];

// Gestion spécifique pour À propos / About
const specialPages = {
    'fr': '/À propos',
    'en': '/about'
};

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

languages.forEach(lang => {
  pages.forEach(page => {
    const url = `${DOMAIN}/${lang}${page}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
  });
  
  // Ajout de la page A propos
  const specialUrl = `${DOMAIN}/${lang}${specialPages[lang]}`;
  xml += `  <url>\n    <loc>${specialUrl}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
});

xml += '</urlset>';

fs.writeFileSync('static/sitemap.xml', xml);
console.log('Sitemap.xml généré avec succès dans le dossier static/ !');
