import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import WelcomePopup from './components/WelcomePopup';
import Home from './pages/Home';
import MarketingTools from './pages/MarketingTools';
import Analytics from './pages/Analytics';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import WhiteLabelSEO from './pages/WhiteLabelSEO';
import WhiteLabelMarketing from './pages/WhiteLabelMarketing';
import SEOService from './pages/SEOService';
import SEOAdmin from './pages/SEOAdmin';
import WebDevelopmentService from './pages/WebDevelopmentService';
import ChatGPTListing from './pages/ChatGPTListing';
import GMBOptimization from './pages/GMBOptimization';
import AIAutomationTools from './pages/AIAutomationTools';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <WelcomePopup />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/website-design" element={<MarketingTools />} />
            <Route path="/performance-marketing" element={<Analytics />} />
            <Route path="/white-label-seo" element={<WhiteLabelSEO />} />
            <Route path="/white-label-digital-marketing" element={<WhiteLabelMarketing />} />
            <Route path="/seo-service" element={<SEOService />} />
            <Route path="/affordable-seo-services-in-india" element={<SEOService />} />
            <Route path="/web-development-services" element={<WebDevelopmentService />} />
            <Route path="/web-development-company-india" element={<WebDevelopmentService />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/seo-leads" element={<SEOAdmin />} />
            <Route path="/list-your-business-on-chatgpt" element={<ChatGPTListing />} />
            <Route path="/gmb-optimization" element={<GMBOptimization />} />
            <Route path="/ai-automation-tools" element={<AIAutomationTools />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
