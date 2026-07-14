const fs = require('fs');
const path = require('path');

// 1. Copy main.css (existing logic)
const cssDir = path.join(__dirname, 'build', 'static', 'css');

if (fs.existsSync(cssDir)) {
  const files = fs.readdirSync(cssDir);
  const mainCssFile = files.find(file => file.startsWith('main.') && file.endsWith('.css'));
  if (mainCssFile) {
    fs.copyFileSync(
      path.join(cssDir, mainCssFile),
      path.join(cssDir, 'main.css')
    );
    console.log(`Successfully copied ${mainCssFile} to main.css`);
  } else {
    console.log('No main.*.css file found.');
  }
} else {
  console.log('Build directory or CSS directory does not exist.');
}

// 2. Generate optimized static HTML files for SEO
const indexPath = path.join(__dirname, 'build', 'index.html');

if (fs.existsSync(indexPath)) {
  let indexHtml = fs.readFileSync(indexPath, 'utf8');
  
  const pages = [
    {
      fileName: 'affordable-seo-services-in-india.html',
      title: 'Affordable SEO Services | Drive Organic Growth | XD Media',
      description: 'Improve your online visibility with affordable SEO services. XD Media offers keyword research, on-page SEO, technical SEO, local SEO, and link building to increase rankings, traffic, and qualified leads.'
    },
    {
      fileName: 'seo-service.html',
      title: 'Affordable SEO Services | Drive Organic Growth | XD Media',
      description: 'Improve your online visibility with affordable SEO services. XD Media offers keyword research, on-page SEO, technical SEO, local SEO, and link building to increase rankings, traffic, and qualified leads.'
    },
    {
      fileName: 'web-development-services.html',
      title: 'Web Development Services | Custom Websites | XD Media',
      description: 'Create a fast, responsive, and SEO-friendly website with XD Media. Our web development services include custom websites, WordPress development, eCommerce solutions, UI/UX design, and ongoing website support.'
    },
    {
      fileName: 'web-development-company-india.html',
      title: 'Web Development Services | Custom Websites | XD Media',
      description: 'Create a fast, responsive, and SEO-friendly website with XD Media. Our web development services include custom websites, WordPress development, eCommerce solutions, UI/UX design, and ongoing website support.'
    },
    {
      fileName: 'performance-marketing.html',
      title: 'Performance Marketing Agency | Google & Meta Ads | XD Media',
      description: 'Maximize your ROI with performance marketing services from XD Media. We create and optimize Google Ads and Meta Ads campaigns, improve conversions, and deliver measurable business growth through data-driven strategies.'
    }
  ];

  pages.forEach(page => {
    let modifiedHtml = indexHtml;
    
    // Replace standard tags
    modifiedHtml = modifiedHtml.replace(/<title>[^<]*<\/title>/gi, `<title>${page.title}</title>`);
    
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*name="description"[^>]*content="[^"]*"[^>]*\/?>/gis,
      `<meta name="description" content="${page.description}" />`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*content="[^"]*"[^>]*name="description"[^>]*\/?>/gis,
      `<meta name="description" content="${page.description}" />`
    );

    // Replace Open Graph / Facebook tags
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*property="og:title"[^>]*content="[^"]*"[^>]*\/?>/gis,
      `<meta property="og:title" content="${page.title}" />`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*content="[^"]*"[^>]*property="og:title"[^>]*\/?>/gis,
      `<meta property="og:title" content="${page.title}" />`
    );

    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*property="og:description"[^>]*content="[^"]*"[^>]*\/?>/gis,
      `<meta property="og:description" content="${page.description}" />`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*content="[^"]*"[^>]*property="og:description"[^>]*\/?>/gis,
      `<meta property="og:description" content="${page.description}" />`
    );

    // Replace Twitter tags
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*property="twitter:title"[^>]*content="[^"]*"[^>]*\/?>/gis,
      `<meta property="twitter:title" content="${page.title}" />`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*content="[^"]*"[^>]*property="twitter:title"[^>]*\/?>/gis,
      `<meta property="twitter:title" content="${page.title}" />`
    );

    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*property="twitter:description"[^>]*content="[^"]*"[^>]*\/?>/gis,
      `<meta property="twitter:description" content="${page.description}" />`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*content="[^"]*"[^>]*property="twitter:description"[^>]*\/?>/gis,
      `<meta property="twitter:description" content="${page.description}" />`
    );

    // Write the new file
    const targetPath = path.join(__dirname, 'build', page.fileName);
    fs.writeFileSync(targetPath, modifiedHtml, 'utf8');
    console.log(`Generated SEO-optimized HTML file: ${page.fileName}`);
  });
} else {
  console.log('index.html not found, skipping SEO page generation.');
}
