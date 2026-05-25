import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Canonical from '../components/SEO/Canonical';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { MarqueeDemo } from '../components/MarqueeDemo';
import { BackgroundLines } from '../components/ui/background-lines';
import { WobbleCard } from '../components/ui/wobble-card';
import { Timeline } from '../components/ui/Timeline';

const WebDevelopmentService = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeResultTab, setActiveResultTab] = useState(0);

  // Hero Form State
  const [heroData, setHeroData] = useState({
    name: '',
    email: '',
    companyName: '',
    website: '',
    phoneNumber: '',
    budgetRange: ''
  });
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // Bottom Form State
  const [bottomData, setBottomData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [bottomSubmitting, setBottomSubmitting] = useState(false);
  const [bottomSubmitted, setBottomSubmitted] = useState(false);
  const [processCardTransform, setProcessCardTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    translateY: 0
  });

  const handleProcessCardMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const maxTilt = 10;

    setProcessCardTransform({
      rotateX: (0.5 - y) * maxTilt,
      rotateY: (x - 0.5) * maxTilt,
      translateY: -6
    });
  };

  const resetProcessCardTransform = () => {
    setProcessCardTransform({ rotateX: 0, rotateY: 0, translateY: 0 });
  };

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    setHeroSubmitting(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        ...heroData,
        sourcePage: 'Web Development Service',
        formType: 'Hero Quote Request',
        status: 'new',
        timestamp: serverTimestamp()
      });
      setHeroSubmitted(true);
      setHeroData({
        name: '',
        email: '',
        companyName: '',
        website: '',
        phoneNumber: '',
        budgetRange: ''
      });
    } catch (error) {
      console.error("Error submitting hero form: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setHeroSubmitting(false);
    }
  };

  const handleBottomSubmit = async (e) => {
    e.preventDefault();
    setBottomSubmitting(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        ...bottomData,
        sourcePage: 'Web Development Service',
        formType: 'Bottom Proposal Request',
        status: 'new',
        timestamp: serverTimestamp()
      });
      setBottomSubmitted(true);
      setBottomData({ name: '', email: '', website: '', message: '' });
    } catch (error) {
      console.error("Error submitting bottom form: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setBottomSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "What web development technologies do you specialize in?",
      answer: "We specialize in modern full-stack technologies including React.js, Next.js, Angular, Node.js (Express), PHP (Laravel, CodeIgniter), databases (PostgreSQL, MySQL, MongoDB), and top CMS platforms like WordPress and Shopify."
    },
    {
      question: "How long does it take to build a custom website?",
      answer: "A standard marketing site or custom WordPress setup typically takes 2 to 4 weeks. High-performance custom web applications, SaaS dashboards, or complex eCommerce platforms take 6 to 12 weeks of structured agile development sprints."
    },
    {
      question: "Will my website be mobile-responsive and SEO-friendly?",
      answer: "Absolutely. Responsive design and SEO performance are built into our core process. We write clean semantic HTML5, optimize web assets for fast loading (<1.2s LCP), implement sitemaps and structured schema markups, and verify that sites pass Google's Core Web Vitals audits."
    },
    {
      question: "Do you offer post-launch support and hosting maintenance?",
      answer: "Yes, we offer ongoing maintenance packages. We configure secure cloud hosting (AWS, DigitalOcean, Vercel), perform regular package updates, schedule daily automated backups, and execute continuous security monitoring."
    }
  ];

  const stats = [
    { number: '150+', label: 'Custom Apps & CMS Built' },
    { number: '99.9%', label: 'Database Uptime Guarantee' },
    { number: '<1.2s', label: 'Average Core Web Vital LCP' },
    { number: '24/7', label: 'Continuous Security Audits' }
  ];

  const deploymentItems = [
    { countryCode: "us", clientName: "Spellaro Creative App", tech: "React / Node" },
    { countryCode: "de", clientName: "Luxury Real Estate portal", tech: "NextJS Static" },
    { countryCode: "fr", clientName: "Solar Dashboard Paris", tech: "Laravel / Vue" },
    { countryCode: "jp", clientName: "B2B SaaS Analytics Dashboard", tech: "GraphQL / Node" },
    { countryCode: "in", clientName: "Mumbai eCommerce Hub", tech: "WooCommerce / Custom Theme" },
    { countryCode: "br", clientName: "Fintech Application São Paulo", tech: "Laravel API" },
    { countryCode: "kr", clientName: "Seoul Auto Reservation Portal", tech: "React / Express" },
    { countryCode: "it", clientName: "Rome Corporate CMS", tech: "WordPress Custom Theme" },
  ];

  const resultsData = [
    {
      category: "Frontend Solutions",
      smallLabel: "NextJS SPA / JAMstack",
      heading: "98% PageSpeed Score & Accelerated Loading",
      challenge: "Building a high-performance visual website for design agency Spellaro with clean animations, while maintaining load speed under 1 second.",
      resultValue: "98/100",
      resultDesc: "Implemented headless Next.js rendering on Vercel CDN, resulting in 0.8s LCP, boosting retention and lowering bounce rates by 35%.",
      tableTitle: "Performance Indicator",
      tableRows: [
        { label: "First Contentful Paint (FCP)", value: "0.4s", growth: "Excellent" },
        { label: "Largest Contentful Paint (LCP)", value: "0.8s", growth: "Optimal" },
        { label: "Cumulative Layout Shift (CLS)", value: "0.01", growth: "Perfect" }
      ],
      chartTitle: "NextJS Lighthouse Score",
      image: "/Weelee Performance Dashboard.png"
    },
    {
      category: "Backend Systems",
      smallLabel: "Secure CRM / Laravel Portal",
      heading: "Optimized Database Queries & Instant APIs",
      challenge: "Configuring a highly secure, role-based database portal for a Fintech firm supporting over 10K+ active records without query timeout spikes.",
      resultValue: "85ms",
      resultDesc: "Leveraged Redis caching and complex PostgreSQL indexing to reduce average API response latency from 420ms to 85ms.",
      tableTitle: "Performance Indicator",
      tableRows: [
        { label: "Average API Latency", value: "85ms", growth: "-335ms" },
        { label: "Database Query Time", value: "12ms", growth: "-80%" },
        { label: "SSL Security Encryption", value: "A+ Rating", growth: "Active" }
      ],
      chartTitle: "Laravel Backend Latency",
      image: "/Weelee Organic Performance New.png"
    },
    {
      category: "eCommerce Portals",
      smallLabel: "Shopify Custom Liquid / WooCommerce",
      heading: "Fluid Checkout Flow & Automated API Syncs",
      challenge: "Developing a custom storefront integrating inventory CRM APIs, localized payment processors, and automated shipping calculators.",
      resultValue: "96/100",
      resultDesc: "Boosted checkout responsiveness and load speed by 65%, driving a 24% increase in sales conversion rates within 3 months.",
      tableTitle: "Performance Indicator",
      tableRows: [
        { label: "Average Page Load Speed", value: "1.1s", growth: "Optimal" },
        { label: "API Sync Latency", value: "140ms", growth: "Fast" },
        { label: "Cart Conversion Rate", value: "4.8%", growth: "+1.2%" }
      ],
      chartTitle: "Headless Commerce Analytics",
      image: "/Onegolf Performance Dashboard.png"
    }
  ];

  // Dynamic Process Steps for Timeline Redesign
  const processStepsData = [
    {
      title: "Phase 1: Architecture & Design",
      content: (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-[#16a34a]/30 transition-all duration-300 shadow-md hover:shadow-lg max-w-2xl">
          <span className="text-xs font-bold text-[#16a34a] uppercase tracking-wider mb-2 block">Steps 01 - 02</span>
          <h4 className="text-xl font-medium text-slate-900 mb-3">Requirement Gathering & Figma Prototyping</h4>
          <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
            We map out database schemas, functional requirements, and architecture diagrams before transitioning into Figma UI/UX prototyping. You will see precise, high-fidelity visual layouts showing how your users will interact with the application.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">Schema Design</span>
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">Figma UX Draft</span>
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">Tech Specs</span>
          </div>
        </div>
      )
    },
    {
      title: "Phase 2: Frontend & Database Core",
      content: (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-[#16a34a]/30 transition-all duration-300 shadow-md hover:shadow-lg max-w-2xl">
          <span className="text-xs font-bold text-[#16a34a] uppercase tracking-wider mb-2 block">Steps 03 - 04</span>
          <h4 className="text-xl font-medium text-slate-900 mb-3">Modular Frontend & OOP Database Design</h4>
          <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
            Our developers scaffold modular architectures using Next.js/React.js alongside secure Laravel or Node.js backend controllers. We implement structured SQL or NoSQL database schemas indexed for lightning-fast concurrent query requests.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">React / NextJS</span>
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">Laravel / Express</span>
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">Postgres / MySQL</span>
          </div>
        </div>
      )
    },
    {
      title: "Phase 3: Integration & Performance",
      content: (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-[#16a34a]/30 transition-all duration-300 shadow-md hover:shadow-lg max-w-2xl">
          <span className="text-xs font-bold text-[#16a34a] uppercase tracking-wider mb-2 block">Steps 05 - 06</span>
          <h4 className="text-xl font-medium text-slate-900 mb-3">API Connectivity & Core Web Vitals Tuning</h4>
          <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
            We integrate CRM endpoints, payment systems, and headless CMS configurations. Once connected, our optimization engineers optimize load speed metrics (LCP &lt; 1.2s), compress static media, apply lazy-loading protocols, and install Redis caches.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">API Orchestration</span>
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">Redis / CDN Caches</span>
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">99+ Pagespeed Target</span>
          </div>
        </div>
      )
    },
    {
      title: "Phase 4: QA, Security & Deployment",
      content: (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-[#16a34a]/30 transition-all duration-300 shadow-md hover:shadow-lg max-w-2xl">
          <span className="text-xs font-bold text-[#16a34a] uppercase tracking-wider mb-2 block">Steps 07 - 08</span>
          <h4 className="text-xl font-medium text-slate-900 mb-3">Security Inspections & Cloud Deployment</h4>
          <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
            Before deployment, we run security penetration testing to check for CORS, XSS, and SQL injection flaws. After passing all QA audits, we spin up auto-scaling containers on AWS or deploy optimized builds on Vercel with zero-downtime assurances.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">Penetration Audits</span>
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">AWS Auto-Scale</span>
            <span className="bg-emerald-50 text-[#16a34a] border border-emerald-200/50 px-3 py-1 rounded-full text-xs font-light">Zero-Downtime CI/CD</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white text-slate-800 font-inter selection:bg-[#4be277] selection:text-[#003915] min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Best Website Development Services in India | Custom Web App Development | LapaOne</title>
        <meta
          name="description"
          content="Scale your business with the best website development services in India. Custom Web Application, Laravel, React, WordPress & Shopify development by LapaOne."
        />
      </Helmet>
      <Canonical path="/web-development-services" />
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
        }

        .hero-glow {
            background: radial-gradient(circle at 50% 50%, rgba(75, 226, 119, 0.1) 0%, transparent 70%);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
        }
        .bento-glow {
            box-shadow: 0 0 40px rgba(75, 226, 119, 0.05);
        }
        /* Custom scrollbar for premium feel */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      ` }} />

      <main className="pb-16 sm:pb-0"> {/* Padding bottom for mobile marquee */}
        
        {/* Hero Section */}
        <header className="relative min-h-[600px] lg:min-h-[850px] flex items-center overflow-hidden bg-slate-900">
          {/* Background Overlay */}
          <div className="absolute inset-0">
            <img
              src="/seo-hero.png"
              className="w-full h-full object-cover opacity-30"
              alt="Web Development Hero Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          </div>

          <BackgroundLines className="h-full w-full py-12 sm:py-20 relative flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-25 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 sm:gap-16 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white space-y-6 sm:space-y-10"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] tracking-tight">
                    India's Most Trusted, Web Development Company Offering <br className="hidden lg:block" />
                    <span className="font-fraunces italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#47BF72] to-[#22d3ee]">High-Performance</span> Digital Solutions
                  </h1>
                  <div className="space-y-4">
                    <p className="text-xl sm:text-2xl text-slate-300 font-light leading-snug">
                      Still Not Getting High Conversions from Your Site?
                    </p>
                    <p className="text-lg sm:text-xl text-slate-300 font-light leading-snug border-l-4 border-[#47BF72] pl-6 py-1 bg-white/[0.01] rounded-r-lg max-w-xl">
                      Scalable, Secure & Fast Web Apps Within Stipulated Timeline
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                    <button
                      onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-white px-10 py-4 font-semibold uppercase tracking-wide text-sm transition-all duration-200 shadow-lg active:scale-95"
                      style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
                    >
                      Talk to our Expert
                    </button>
                    <a
                      href="https://wa.me/919258462625"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 border border-[#25D366]/40 text-white px-10 py-4 font-medium uppercase tracking-wide text-sm transition-all rounded-[5px] bg-[#25D366]/5 backdrop-blur-md hover:bg-[#25D366] hover:text-white active:scale-95 group"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                </motion.div>

                {/* Right Form Card */}
                <motion.div
                  id="audit-form"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:ml-auto w-full relative z-30"
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl relative border border-slate-100">
                    {heroSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="material-symbols-outlined text-[#16a34a] text-4xl">check_circle</span>
                        </div>
                        <h3 className="text-2xl font-light text-slate-900 mb-2">Request Received!</h3>
                        <p className="text-slate-500 mb-8 font-light">Our web architects will analyze your requirement and contact you shortly.</p>
                        <button onClick={() => setHeroSubmitted(false)} className="text-[#16a34a] font-bold hover:underline">Submit another request</button>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-8 text-center leading-tight">
                          Get A Free <span className="font-fraunces italic text-[#16a34a]">Web Development</span> Proposal & Estimate
                        </h3>

                        <form onSubmit={handleHeroSubmit} className="space-y-4">
                          <div className="space-y-4">
                            <input
                              type="text"
                              placeholder="Enter your name"
                              className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light text-sm"
                              value={heroData.name}
                              onChange={(e) => setHeroData({ ...heroData, name: e.target.value })}
                              required
                            />
                            <input
                              type="email"
                              placeholder="Company Email"
                              className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light text-sm"
                              value={heroData.email}
                              onChange={(e) => setHeroData({ ...heroData, email: e.target.value })}
                              required
                            />
                            <input
                              type="text"
                              placeholder="Company Name"
                              className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light text-sm"
                              value={heroData.companyName}
                              onChange={(e) => setHeroData({ ...heroData, companyName: e.target.value })}
                              required
                            />
                            <input
                              type="url"
                              placeholder="Current Website URL (Optional)"
                              className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light text-sm"
                              value={heroData.website}
                              onChange={(e) => setHeroData({ ...heroData, website: e.target.value })}
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <select className="sm:col-span-1 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all font-light text-xs">
                                <option>India (+91)</option>
                                <option>US (+1)</option>
                                <option>UK (+44)</option>
                              </select>
                              <input
                                type="tel"
                                placeholder="Phone Number"
                                className="sm:col-span-2 bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light text-sm"
                                value={heroData.phoneNumber}
                                onChange={(e) => setHeroData({ ...heroData, phoneNumber: e.target.value })}
                                required
                              />
                            </div>
                            <select
                              className="w-full bg-slate-50 border border-slate-200 text-slate-600 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all font-light text-sm"
                              value={heroData.budgetRange}
                              onChange={(e) => setHeroData({ ...heroData, budgetRange: e.target.value })}
                              required
                            >
                              <option value="" disabled>Project Budget Range</option>
                              <option value="50k-1l">₹50,000 to ₹1 Lakh</option>
                              <option value="1l-2.5l">₹1 Lakh to ₹2.5 Lakh</option>
                              <option value="2.5l-5l">₹2.5 Lakh to ₹5 Lakh</option>
                              <option value="over-5l">Over ₹5 Lakh</option>
                            </select>
                          </div>

                          <button
                            disabled={heroSubmitting}
                            className="w-full text-white py-4 font-medium uppercase tracking-wide text-sm transition-all duration-200 shadow-lg mt-4 disabled:opacity-50 active:scale-[0.98]"
                            style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                            onMouseEnter={(e) => !heroSubmitting && (e.target.style.backgroundColor = '#3aa85f')}
                            onMouseLeave={(e) => !heroSubmitting && (e.target.style.backgroundColor = '#47BF72')}
                          >
                            {heroSubmitting ? 'Submitting...' : 'Get My Free Proposal'}
                          </button>
                        </form>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </BackgroundLines>
        </header>

        {/* Stats Section */}
        <section className="py-16 border-y border-slate-200 bg-slate-200 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`text-center px-2 sm:px-4 ${i !== 0 ? 'border-l border-slate-300' : ''}`}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-[#16a34a] text-[10px] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-widest font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Services Section (Bento Grid) */}
        <section className="py-24 relative overflow-hidden bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="mb-16 sm:mb-20 text-center">
              <span className="text-[#16a34a] text-xs font-bold uppercase tracking-[0.4em] mb-3 block">Engineering Stack</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Complete Web Development Solutions</h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">Custom designed, high-performing websites and software systems engineered for rapid scale.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)] sm:auto-rows-[220px]">
              
              {/* Tall Card: Custom Web Apps */}
              <WobbleCard
                containerClassName="md:row-span-2 md:col-span-1 bg-white border border-slate-200/60 text-slate-800 flex flex-col justify-end shadow-md hover:shadow-lg transition-shadow duration-300"
                className="flex flex-col justify-end h-full"
              >
                <div className="absolute top-6 right-6 text-4xl font-fraunces text-emerald-100 font-bold italic">01</div>
                <div>
                  <div className="w-12 h-12 bg-[#f0fdf4] border border-[#dcfce7] rounded-xl flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#16a34a] text-2xl">code</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-3">Custom Web Applications</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">Robust frontend designs matching React.js & Next.js architectures with database REST/GraphQL APIs configured for speed, security, and complex logic flow.</p>
                </div>
              </WobbleCard>

              {/* Wide Card: eCommerce Solutions */}
              <WobbleCard
                containerClassName="md:col-span-2 bg-white border border-slate-200/60 text-slate-800 flex flex-col justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
                className="h-full flex flex-col justify-center"
              >
                <div className="absolute top-6 right-6 text-4xl font-fraunces text-blue-100 font-bold italic">02</div>
                <div className="pr-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-500 text-2xl">shopping_cart</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-slate-900">eCommerce & Portals</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-light max-w-2xl">Conversion-optimized custom liquid storefronts, Shopify implementations, user profile dashboards, automated localized payment gateways, and backend inventory CRM synching.</p>
                </div>
              </WobbleCard>

              {/* Square Card: CMS Customization */}
              <WobbleCard
                containerClassName="bg-white border border-slate-200/60 text-slate-800 flex flex-col justify-end shadow-md hover:shadow-lg transition-shadow duration-300"
                className="h-full flex flex-col justify-end"
              >
                <div className="absolute top-6 right-6 text-4xl font-fraunces text-purple-100 font-bold italic">03</div>
                <div>
                  <div className="w-10 h-10 bg-purple-50 border border-purple-100 rounded-xl flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-purple-500 text-xl">layers</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-slate-900 mb-2">CMS Content Systems</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">Custom WordPress development, custom Gutenberg blocks, and headless CMS configurations for absolute content editing flexibility.</p>
                </div>
              </WobbleCard>

              {/* Square Card: Enterprise CRMs */}
              <WobbleCard
                containerClassName="bg-white border border-slate-200/60 text-slate-800 flex flex-col justify-end shadow-md hover:shadow-lg transition-shadow duration-300"
                className="h-full flex flex-col justify-end"
              >
                <div className="absolute top-6 right-6 text-4xl font-fraunces text-yellow-100 font-bold italic">04</div>
                <div>
                  <div className="w-10 h-10 bg-yellow-50 border border-yellow-100 rounded-xl flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-yellow-600 text-xl">database</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-slate-900 mb-2">Enterprise CRMs</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">Custom dashboard logs, Perfex CRM setups, ERP database connectivity, and secure SQL/NoSQL database configurations.</p>
                </div>
              </WobbleCard>
            </div>
          </div>
        </section>

        {/* Data-Driven Section */}
        <section className="py-24 relative bg-slate-100 overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#4be277]/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden bg-white p-4 shadow-xl border border-slate-200/60 group"
              >
                <img src="/Weelee Performance Dashboard.png" alt="Data-Driven Web Dev" className="w-full h-auto rounded-xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#dcfce7] mb-6">
                  <span className="material-symbols-outlined text-[#16a34a] text-sm">monitoring</span>
                  <span className="text-[#16a34a] text-[10px] sm:text-xs font-bold uppercase tracking-wider">Advanced Performance</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Data-Driven Approach to <span className="font-fraunces italic text-[#16a34a]">Engineering</span></h2>
                <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 font-light">Guesswork has no place in custom software development. We architect frameworks that prioritize loading speed, database integrity, and high search visibility.</p>

                <div className="space-y-6">
                  {[
                    { icon: "architecture", title: "Tech Stack Mapping", desc: "We select architectures (Laravel, Next.js, WordPress) matching your user scale and database requirements." },
                    { icon: "speed", title: "Core Web Vitals Optimization", desc: "Designing lightweight layouts that score 90+ on Google PageSpeed Insights and load under 1.2s." },
                    { icon: "security", title: "Enterprise-grade Security", desc: "SSL installation, data encryption, input sanitization, rate limiters, and clean OOP development." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <span className="material-symbols-outlined text-[#16a34a] text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-light text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro Banner */}
        <section className="py-20 bg-slate-200 border-t border-slate-100 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-8 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6">Shape your business with the <span className="font-fraunces italic text-[#16a34a]">Leading Web Development Company</span> in India!</h2>
            <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">If you are looking for a development company to build custom web applications, eCommerce portals, or corporate sites, you have come to the right place! LapaOne follows an integrated agile approach to deliver secure and scalable platforms.</p>
            <div className="flex justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white px-10 py-4 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg active:scale-95"
                style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
              >
                Get My Free Proposal & Estimate
              </button>
            </div>
          </motion.div>
        </section>

        {/* 8 Step Process Redesigned with scroll-animated Timeline */}
        <section className="bg-slate-100 py-4 border-t border-slate-100">
          <Timeline 
            data={processStepsData}
            title="LapaOne Web Development Process"
            description="From concept to cloud deployment, our workflow is structured into four major phases ensuring zero downtime and complete project alignment:"
            containerClassName="bg-slate-100"
            titleClassName="text-slate-900 text-3xl sm:text-4xl font-light tracking-wide text-center max-w-4xl mx-auto"
            descriptionClassName="text-slate-600 text-base sm:text-lg font-light text-center max-w-2xl mx-auto"
            lineColor="from-[#16a34a] via-[#47BF72] to-transparent"
          />
        </section>

        {/* Code Integrity & Architecture Audit */}
        <section className="py-20 bg-slate-200 border-y border-slate-300/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1 relative rounded-2xl overflow-hidden bg-white p-4 shadow-xl border border-slate-200/60 group"
              >
                <img
                  src="/competitive-analysis-light.png"
                  alt="Code Integrity & Audit"
                  className="w-full h-auto rounded-xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">Code Integrity & <span className="font-fraunces italic text-[#16a34a]">Architecture Audit</span></h2>
                <div className="space-y-6">
                  <p className="text-slate-600 font-light leading-relaxed border-l-2 border-[#16a34a] pl-6">We inspect your existing databases, API latency values, server loads, and frontend responsiveness configs to map out performance bottlenecks before writing a single line of code.</p>
                  <p className="text-slate-600 font-light leading-relaxed border-l-2 border-slate-300 pl-6">We compare layout metrics and responsiveness constraints to ensure your future system scales flawlessly under concurrent traffic loads.</p>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-medium text-slate-900 mb-6">Technical Audit Focus:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Are SQL database queries running slow?", "How responsive is the mobile navigation?", "Are SSL certificates and CORS secure?", "Is API latency below 150ms? (Redis/REST)"].map((q, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600 font-light text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recent Results Section */}
        <section className="py-20 bg-slate-100 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6">Recent Deployments & Performance Scores</h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
                We write clean, high-performance code. From banking CRMs with tight SSL encryption to headless Next.js online stores, we configure platforms that pass Google's Core Web Vitals with flying colors.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
              {resultsData.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveResultTab(idx)}
                  className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeResultTab === idx
                    ? 'bg-[#16a34a] text-white'
                    : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                    }`}
                >
                  {tab.category}
                </button>
              ))}
            </div>

            <div className="max-w-6xl mx-auto">
              {resultsData.map((data, idx) => (
                activeResultTab === idx && (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden relative"
                  >
                    {/* Card Header */}
                    <div className="flex justify-between items-start p-4 sm:p-6 border-b border-slate-100">
                      <div className="bg-emerald-50 text-[#16a34a] border border-emerald-100 px-4 py-1.5 rounded-lg text-xs font-medium">
                        {data.category}
                      </div>
                      <img src="https://flagcdn.com/w80/in.png" alt="India Flag" className="w-10 sm:w-12 shadow-md rounded-sm" />
                    </div>

                    <div className="px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Left Side: Details */}
                      <div>
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-base font-bold text-slate-900 mb-2">Challenge</h4>
                            <p className="text-slate-600 text-sm font-light leading-relaxed">{data.challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-base font-bold text-slate-900 mb-2">Results</h4>
                            <div className="text-4xl font-bold text-[#16a34a] mb-2">{data.resultValue}</div>
                            <p className="text-slate-700 font-bold text-sm leading-tight">
                              {data.resultDesc}
                            </p>
                          </div>

                          {/* Metrics Table */}
                          <div className="mt-4">
                            <table className="w-full text-left text-sm">
                              <thead>
                                <tr className="border-b border-slate-200">
                                  <th className="pb-2 font-bold text-slate-900">{data.tableTitle}</th>
                                  <th className="pb-2 font-bold text-slate-900 text-right">Value</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {data.tableRows.map((item, i) => (
                                  <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                    <td className="py-2.5 text-slate-600 font-light">{item.label}</td>
                                    <td className="py-2.5 text-[#16a34a] font-bold text-right">{item.value} <span className="text-[10px] opacity-70 ml-1 text-slate-500">({item.growth})</span></td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Analytics */}
                      <div className="flex flex-col">
                        <h4 className="text-base font-bold text-slate-900 mb-3">{data.chartTitle}</h4>
                        <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 flex items-center justify-center overflow-hidden min-h-[280px] max-h-[320px]">
                          {data.image ? (
                            <img src={data.image} alt={data.chartTitle} className="w-full h-auto object-contain rounded-lg opacity-100" />
                          ) : (
                            <div className="text-slate-400 text-xs italic">Analytics Visual Pending</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 sm:py-24 bg-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Continuous <span className="font-fraunces italic text-[#16a34a]">Optimization</span></h2>
                <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 font-light">Custom software isn't static. We support your code long after deployment with database checks and server upgrades.</p>

                <div className="space-y-4">
                  {[
                    { step: "01", title: "Daily Cloud Database Backups", desc: "Automated storage configurations to preserve database transactions." },
                    { step: "02", title: "Framework Package Updates", desc: "Keeping Laravel, React, Node.js packages updated to prevent security loopholes." },
                    { step: "03", title: "Security Vulnerability Audits", desc: "Continuous testing for SQL injection, CORS rules, and rate limiters." },
                    { step: "04", title: "Core Web Vitals Performance Tuning", desc: "Constant testing to maintain high scores and rapid LCP load speeds." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#16a34a]/30 transition-all group">
                      <div className="text-3xl font-fraunces italic text-slate-300 group-hover:text-[#16a34a] transition-colors">{item.step}</div>
                      <div>
                        <h4 className="font-light text-slate-800 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2 relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 p-4 shadow-2xl group flex items-center justify-center min-h-[300px] sm:min-h-[400px]"
              >
                <div className="absolute inset-0 bg-[#4be277]/5 blur-3xl rounded-full"></div>
                <div
                  ref={null} 
                  onMouseMove={handleProcessCardMove}
                  onMouseLeave={resetProcessCardTransform}
                  style={{
                    transform: `rotateX(${processCardTransform.rotateX}deg) rotateY(${processCardTransform.rotateY}deg) translateY(${processCardTransform.translateY}px)`,
                    transition: 'transform 0.2s ease-out',
                    perspective: '1000px'
                  }}
                  className="w-full"
                >
                  <img src="/competitive-analysis.png" alt="Development Architecture Layout" className="relative z-10 w-full h-auto max-w-md mx-auto object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24" style={{ background: '#0a0a0a' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-inter">
                What Our Clients Say
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                Real results, real testimonials from brands we've helped grow
              </p>
              <div className="w-20 h-1 mx-auto mt-6" style={{ background: '#16a34a' }}></div>
            </motion.div>
            <MarqueeDemo />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 sm:py-24 relative bg-slate-100 border-t border-slate-200/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Frequently Asked <span className="font-fraunces italic text-[#16a34a]">Questions</span></h2>
              <p className="text-base sm:text-lg text-slate-600 font-light">Everything you need to know about our web development services.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-slate-200/60 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-light text-slate-800 pr-4 sm:pr-8">{faq.question}</span>
                    <span className={`material-symbols-outlined text-[#16a34a] transition-transform duration-300 shrink-0 ${activeAccordion === i ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === i ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="p-5 sm:p-6 pt-0 text-slate-600 leading-relaxed font-light text-sm sm:text-base border-t border-slate-100 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#dcfce7] mb-6">
                  <span className="material-symbols-outlined text-[#16a34a] text-sm">rocket_launch</span>
                  <span className="text-[#16a34a] text-[10px] sm:text-xs font-bold uppercase tracking-wider">Free Custom Strategy Session</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-6 leading-tight">
                  Ready to compile your <span className="font-fraunces italic text-[#16a34a]">digital presence?</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 font-light leading-relaxed">
                  Stop settling for slow templates. Work with certified web architects to build secure, optimized code infrastructure that converts clicks into buyers.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: "check_circle", text: "Free 30-minute Architecture Call" },
                    { icon: "check_circle", text: "Complete Database Schema Consultation" },
                    { icon: "check_circle", text: "Custom API & Third-Party Roadmap" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#16a34a]">{item.icon}</span>
                      <span className="text-slate-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-150 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(n => (
                      <div key={n} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${n + 25}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map(n => (
                        <span key={n} className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Trusted by 200+ companies worldwide</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#4be277]/10 rounded-3xl blur-3xl -z-10"></div>
                {bottomSubmitted ? (
                  <div className="bg-white border border-slate-200 p-10 rounded-3xl shadow-2xl text-center">
                    <div className="w-20 h-20 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="material-symbols-outlined text-[#16a34a] text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-medium text-slate-900 mb-2">Proposal Request Received!</h3>
                    <p className="text-slate-600 font-light mb-8">Our development experts will analyze your specifications and get back to you within 24 hours.</p>
                    <button
                      onClick={() => setBottomSubmitted(false)}
                      className="text-[#16a34a] font-bold hover:underline"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBottomSubmit} className="bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          required
                          value={bottomData.name}
                          onChange={(e) => setBottomData({ ...bottomData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 transition-all outline-none text-slate-900 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          value={bottomData.email}
                          onChange={(e) => setBottomData({ ...bottomData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 transition-all outline-none text-slate-900 text-sm"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Website URL (Optional)</label>
                      <input
                        type="url"
                        value={bottomData.website}
                        onChange={(e) => setBottomData({ ...bottomData, website: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 transition-all outline-none text-slate-900 text-sm"
                      />
                    </div>
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                      <textarea
                        rows="4"
                        value={bottomData.message}
                        onChange={(e) => setBottomData({ ...bottomData, message: e.target.value })}
                        placeholder="Tell us about your web development goals..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 transition-all outline-none text-slate-900 resize-none text-sm"
                      ></textarea>
                    </div>
                    <button
                      disabled={bottomSubmitting}
                      className="w-full text-white py-4 font-bold uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                      onMouseEnter={(e) => !bottomSubmitting && (e.target.style.backgroundColor = '#3aa85f')}
                      onMouseLeave={(e) => !bottomSubmitting && (e.target.style.backgroundColor = '#47BF72')}
                    >
                      {bottomSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          Sending...
                        </>
                      ) : 'Send My Free Proposal'}
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                      No credit card required. We respect your privacy.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Bottom Marquee */}
      <div className="fixed bottom-0 left-0 w-full h-10 sm:h-12 bg-white border-t border-slate-200 z-50 flex items-center overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {/* Fixed Title Block */}
        <div className="h-full bg-[#4be277] text-[#003915] font-bold px-3 sm:px-6 flex items-center shrink-0 z-10 text-[10px] sm:text-sm uppercase tracking-wider relative">
          <span className="hidden sm:inline">LATEST DEPLOYMENTS THIS WEEK</span>
          <span className="sm:hidden">LAUNCHES</span>
          {/* Arrow Ribbon Effect */}
          <div className="absolute right-[-12px] top-0 w-0 h-0 border-t-[24px] border-t-transparent border-b-[24px] border-b-transparent border-l-[12px] border-l-[#4be277] hidden sm:block"></div>
          <div className="absolute right-[-8px] top-0 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[8px] border-l-[#4be277] sm:hidden"></div>
        </div>

        {/* Marquee Wrapper */}
        <div className="flex-1 overflow-hidden relative flex items-center h-full ml-4 sm:ml-6">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap items-center gap-6 w-max"
          >
            {[...deploymentItems, ...deploymentItems].map((item, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <img src={`https://flagcdn.com/w40/${item.countryCode}.png`} alt={item.countryCode} className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-sm object-cover border border-slate-200 shadow-sm shrink-0" />
                <span className="text-slate-600 font-medium">{item.clientName}</span>
                <span className="text-[#16a34a] font-bold shrink-0">🚀 Live ({item.tech})</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919258462625"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-8 z-[100] bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-16 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Chat with an Expert
        </span>
      </a>
    </div>
  );
};

export default WebDevelopmentService;
