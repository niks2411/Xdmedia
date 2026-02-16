import React, { useState, useEffect } from 'react';
import Canonical from '../components/SEO/Canonical';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Search, BarChart3, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import InlineContactForm from '../components/InlineContactForm';

const SEOTools = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Step 0: Initial state (0s)
    // Step 1: Move to #2 (after 2s)
    // Step 2: Move to #1 (after 4s)
    const timer1 = setTimeout(() => setAnimationStep(1), 2000);
    const timer2 = setTimeout(() => setAnimationStep(2), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const seoServices = [
    {
      title: "Technical SEO",
      description: "Site speed optimization, mobile responsiveness, structured data, and crawlability improvements",
      features: ["Site Speed Optimization", "Mobile-First Indexing", "Schema Markup", "XML Sitemaps"]
    },
    {
      title: "On-Page SEO",
      description: "Content optimization, keyword research, meta tags, and internal linking strategies",
      features: ["Keyword Research", "Content Optimization", "Meta Tags Setup", "Internal Linking"]
    },
    {
      title: "Off-Page SEO",
      description: "Link building, brand mentions, social signals, and authority building campaigns",
      features: ["Quality Backlinks", "Brand Mentions", "Guest Posting", "Authority Building"]
    }
  ];

  // Define the ranking order for each step
  const getRankings = () => {
    if (animationStep === 0) {
      // Initial: competitor1 #1, competitor2 #2, yourwebsite #3
      return [
        { position: 1, url: "competitor1.com", title: "Digital Marketing Agency - Professional Services", isYours: false },
        { position: 2, url: "competitor2.com", title: "Marketing Solutions for Your Business", isYours: false },
        { position: 3, url: "yourwebsite.com", title: "Best Digital Marketing Services | Expert SEO & Growth", isYours: true }
      ];
    } else if (animationStep === 1) {
      // Step 1: competitor1 #1, yourwebsite #2, competitor2 #3
      return [
        { position: 1, url: "competitor1.com", title: "Digital Marketing Agency - Professional Services", isYours: false },
        { position: 2, url: "yourwebsite.com", title: "Best Digital Marketing Services | Expert SEO & Growth", isYours: true },
        { position: 3, url: "competitor2.com", title: "Marketing Solutions for Your Business", isYours: false }
      ];
    } else {
      // Step 2: yourwebsite #1, competitor1 #2, competitor2 #3
      return [
        { position: 1, url: "yourwebsite.com", title: "Best Digital Marketing Services | Expert SEO & Growth", isYours: true },
        { position: 2, url: "competitor1.com", title: "Digital Marketing Agency - Professional Services", isYours: false },
        { position: 3, url: "competitor2.com", title: "Marketing Solutions for Your Business", isYours: false }
      ];
    }
  };

  const rankings = getRankings();


  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Canonical path="/seo-tools" />
      {/* Hero Section with Contact Form */}
      <section
        className="min-h-screen py-12 sm:py-16 lg:py-20 relative overflow-hidden flex items-center"
        style={{
          background: 'linear-gradient(135deg, rgb(12,33,21) 0%, rgb(20,50,35) 100%)'
        }}
      >
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Service Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6"
                style={{
                  background: 'rgba(71, 191, 114, 0.2)',
                  border: '1px solid rgba(71, 191, 114, 0.4)',
                  color: '#47BF72'
                }}
              >
                <Search className="w-4 h-4" />
                Core Expertise ⭐
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6 tracking-tight">
                <span className="text-white font-inter font-normal block mb-2">
                  SEO & Organic Growth
                </span>
                <span className="text-white font-fraunces italic font-light">
                  Built to Rank.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-inter font-light mb-6 sm:mb-8">
                Long-term visibility. Sustainable traffic. Compounding growth. We specialize in advanced, scalable SEO for brands that want consistent, high-intent organic traffic — not vanity rankings.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Technical SEO & Site Architecture</h3>
                    <p className="text-gray-400 text-sm">Site audits, speed optimization, Core Web Vitals, indexing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Ecommerce & SaaS SEO</h3>
                    <p className="text-gray-400 text-sm">Programmatic SEO, marketplace optimization, coupon SEO</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Authority & Backlink Building</h3>
                    <p className="text-gray-400 text-sm">Quality backlinks, content optimization, monthly reporting</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InlineContactForm
                servicePage="SEO Tools"
                defaultService="SEO & Performance Optimization"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sequential SEO Animation */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-inter">
              See SEO in Action
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Watch how your website climbs from position #3 → #2 → #1 after our SEO optimization
            </p>
          </motion.div>

          {/* Search Results Mockup */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl p-8 backdrop-blur-xl border" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderColor: 'rgba(255, 255, 255, 0.1)'
            }}>
              {/* Search Bar Mockup */}
              <div className="flex items-center gap-3 p-4 rounded-full mb-8" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value="digital marketing services"
                  readOnly
                  className="flex-1 bg-transparent text-white outline-none"
                />
              </div>

              {/* Animated Rankings */}
              <div className="space-y-4 relative" style={{ minHeight: '400px' }}>
                <AnimatePresence mode="popLayout">
                  {rankings.map((rank) => (
                    <motion.div
                      key={rank.url}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        layout: { duration: 1, type: "spring", stiffness: 50, damping: 20 },
                        opacity: { duration: 0.3 }
                      }}
                    >
                      <div
                        className={`p-6 rounded-xl transition-all duration-300 ${rank.isYours && rank.position === 1 ? 'relative overflow-hidden' : ''}`}
                        style={rank.isYours && rank.position === 1 ? {
                          background: 'linear-gradient(135deg, rgba(71, 191, 114, 0.2) 0%, rgba(71, 191, 114, 0.05) 100%)',
                          border: '2px solid #47BF72',
                          boxShadow: '0 0 30px rgba(71, 191, 114, 0.3)'
                        } : {
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {rank.isYours && rank.position === 1 && (
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent animate-pulse"></div>
                        )}

                        <div className="flex items-start gap-4 relative z-10">
                          <div
                            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                            style={{
                              background: rank.position === 1 ? '#FFD700' : rank.position === 2 ? '#C0C0C0' : '#CD7F32',
                              boxShadow: rank.isYours && rank.position === 1 ? '0 0 20px rgba(255, 215, 0, 0.5)' : 'none'
                            }}
                          >
                            #{rank.position}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Globe className={`w-4 h-4 ${rank.isYours ? 'text-green-400' : 'text-gray-400'}`} />
                              <span className={`font-medium ${rank.isYours ? 'text-green-400 font-bold' : 'text-gray-400'}`}>
                                {rank.url}
                              </span>
                              {rank.isYours && (
                                <span className="px-2 py-1 rounded text-xs font-semibold" style={{
                                  background: 'rgba(71, 191, 114, 0.2)',
                                  color: '#47BF72'
                                }}>
                                  YOUR SITE
                                </span>
                              )}
                            </div>
                            <h3 className={`text-lg font-semibold mb-1 ${rank.isYours ? 'text-white' : 'text-gray-300'}`}>
                              {rank.title}
                            </h3>
                            <p className={`text-sm ${rank.isYours ? 'text-gray-300' : 'text-gray-500'}`}>
                              {rank.isYours
                                ? "Optimized for search engines with targeted keywords, quality content, and technical SEO perfection..."
                                : "Marketing services for businesses looking to grow online..."}
                            </p>
                          </div>
                          {rank.isYours && rank.position === 1 && (
                            <div className="flex-shrink-0 text-right">
                              <div className="flex items-center gap-1 text-green-400 font-bold text-xl">
                                <TrendingUp className="w-5 h-5" />
                                #1
                              </div>
                              <span className="text-xs text-gray-400">top ranking</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* SEO Impact Note */}
              {animationStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-8 p-6 rounded-xl text-center" style={{
                    background: 'rgba(71, 191, 114, 0.1)',
                    border: '1px solid rgba(71, 191, 114, 0.2)'
                  }}
                >
                  <p className="text-green-400 font-medium mb-2">
                    🚀 The Power of SEO Optimization
                  </p>
                  <p className="text-gray-300 text-sm">
                    With the right strategy, your website can climb the rankings — driving more organic traffic, higher visibility, and better leads
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
      }}>
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-inter">
              Complete SEO Solutions
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Everything you need to dominate search rankings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl p-8 h-full backdrop-blur-xl border transition-all duration-300" style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <h3 className="text-2xl font-bold text-white mb-4 font-inter">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: '#47BF72' }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOTools;
