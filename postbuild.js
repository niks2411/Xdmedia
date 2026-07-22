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
    },
    {
      fileName: 'website-design.html',
      title: 'Website Design & Development Services | Custom Websites | XD Media',
      description: 'Transform your brand with bespoke website design and high-performance development services by XD Media. Fast, mobile-responsive, conversion-focused websites.'
    },
    {
      fileName: 'about-us.html',
      title: 'About Us | XD MEDIA - Digital Marketing & Branding Agency',
      description: 'Learn about XD MEDIA. We are a full-stack digital marketing, branding, and technology agency delivering end-to-end solutions that drive real, measurable growth for global brands.'
    },
    {
      fileName: 'contact.html',
      title: 'Contact Us | XD MEDIA - Digital Marketing & Tech Solutions',
      description: 'Get in touch with XD MEDIA. Contact our team to discuss your SEO, web development, branding, or performance marketing goals today.'
    },
    {
      fileName: 'blog.html',
      title: 'Blog & Insights - XD MEDIA | Digital Marketing & Web Development',
      description: 'Read the latest articles, guides, and insights on SEO, YouTube growth, monetization, website design, and workflow automation from the team at XD MEDIA.'
    },
    {
      fileName: 'white-label-seo.html',
      title: 'White Label SEO Services for Agencies | XD Media',
      description: 'Scale your digital agency with premium, 100% white label SEO services. Partner wholesale pricing, branded client dashboards, and dedicated execution teams.'
    },
    {
      fileName: 'white-label-digital-marketing.html',
      title: 'White Label Digital Marketing Partner Plan | XD Media',
      description: 'Scale your agency catalog with white label Google Ads, Meta Ads, SEO, and email marketing. 100% invisible fulfillment and wholesale agency margins.'
    },
    {
      fileName: 'list-your-business-on-chatgpt.html',
      title: 'List Your Business on ChatGPT & AI Engines | XD Media',
      description: 'Get your brand indexed and recommended by AI assistants like ChatGPT, Claude, and Gemini. Optimize your business for conversational AI search with XD Media.'
    },
    {
      fileName: 'gmb-optimization.html',
      title: 'Google My Business Optimization | Rank #1 Local Map Pack | XD Media',
      description: 'Dominate local search rankings with XD Media\'s GMB Optimization services. Drive high-intent phone calls, foot traffic, and leads with top 3 Map Pack rankings.'
    },
    {
      fileName: 'ai-automation-tools.html',
      title: 'AI Integration & Workflow Automation Services | XD Media',
      description: 'Automate repetitive business workflows and integrate custom AI tools to scale business productivity and customer response times with XD Media.'
    },
    {
      fileName: 'book-a-slot.html',
      canonicalPath: 'book-a-slot',
      title: 'Book a Free Strategy Session | XD MEDIA',
      description: 'Schedule a free 30-minute strategy call with the XD MEDIA team. Choose your preferred date and time slot and let\'s discuss how to grow your brand.'
    },
    {
      fileName: 'blog-seo-guide-for-businesses.html',
      canonicalPath: 'blog/seo-guide-for-businesses',
      title: 'The Complete SEO Guide for 2026: SEO, AEO & GEO | XD Media',
      description: 'The SEO guide you need in 2026. Technical SEO, content authority, AEO & GEO explained with real examples. For any industry, any market.'
    }
  ];

  pages.forEach(page => {
    let modifiedHtml = indexHtml;
    const urlPath = page.canonicalPath || page.fileName.replace('.html', '');

    // Replace title
    modifiedHtml = modifiedHtml.replace(/<title[^>]*>[^<]*<\/title>/gi, `<title data-rh="true">${page.title}</title>`);

    // Replace meta description
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*name="description"[^>]*\/?>/gis,
      `<meta name="description" data-rh="true" content="${page.description}" />`
    );

    // Replace Open Graph / Facebook tags
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*property="og:title"[^>]*\/?>/gis,
      `<meta property="og:title" data-rh="true" content="${page.title}" />`
    );

    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*property="og:description"[^>]*\/?>/gis,
      `<meta property="og:description" data-rh="true" content="${page.description}" />`
    );

    // Replace Twitter tags
    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*property="twitter:title"[^>]*\/?>/gis,
      `<meta property="twitter:title" data-rh="true" content="${page.title}" />`
    );

    modifiedHtml = modifiedHtml.replace(
      /<meta[^>]*property="twitter:description"[^>]*\/?>/gis,
      `<meta property="twitter:description" data-rh="true" content="${page.description}" />`
    );

    // Replace/Inject Canonical tag
    if (modifiedHtml.includes('<link rel="canonical"')) {
      modifiedHtml = modifiedHtml.replace(
        /<link[^>]*rel="canonical"[^>]*\/?>/gis,
        `<link rel="canonical" data-rh="true" href="https://www.xdmedia.in/${urlPath}" />`
      );
    } else {
      modifiedHtml = modifiedHtml.replace(
        '</head>',
        `  <link rel="canonical" data-rh="true" href="https://www.xdmedia.in/${urlPath}" />\n</head>`
      );
    }

    // Write the new file
    const targetPath = path.join(__dirname, 'build', page.fileName);
    fs.writeFileSync(targetPath, modifiedHtml, 'utf8');
    console.log(`Generated SEO-optimized HTML file: ${page.fileName}`);
  });
} else {
  console.log('index.html not found, skipping SEO page generation.');
}
