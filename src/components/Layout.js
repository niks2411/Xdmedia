import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  const validPaths = [
    '/',
    '/website-design',
    '/performance-marketing',
    '/white-label-seo',
    '/white-label-digital-marketing',
    '/seo-service',
    '/affordable-seo-services-in-india',
    '/web-development-services',
    '/web-development-company-india',
    '/about-us',
    '/contact',
    '/admin',
    '/admin/seo-leads',
    '/list-your-business-on-chatgpt',
    '/gmb-optimization',
    '/ai-automation-tools',
    '/privacy-policy'
  ];

  const normalizedPath = location.pathname.endsWith('/') && location.pathname.length > 1
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const is404 = !validPaths.includes(normalizedPath);
  const hideFooter = location.pathname === '/privacy-policy' || is404;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
