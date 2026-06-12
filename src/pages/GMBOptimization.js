import React from 'react';
import Canonical from '../components/SEO/Canonical';
import { motion } from 'framer-motion';
import { MapPin, Target, CheckCircle, Search, Star, Award, Layers } from 'lucide-react';
import InlineContactForm from '../components/InlineContactForm';

const GMBOptimization = () => {
  const features = [
    {
      title: "GMB Complete Audit & Setup",
      description: "Optimizing your Google Business Profile (formerly GMB) with correct categories, NAP, and high-impact descriptions.",
      items: ["Primary & Secondary Categories", "Business Description Keywords", "Attributes & Services Listings"]
    },
    {
      title: "Local Citations & Directory Links",
      description: "Building authoritative local backlinks and citation matches across major directories to lock in geographic relevance.",
      items: ["Consistent NAP Submissions", "High-DA Directory Listings", "Local Map Backlink Building"]
    },
    {
      title: "Review & Engagement Systems",
      description: "Setup automated systems to gather reviews and respond to user queries, sending positive signals to Google Local algorithms.",
      items: ["Review Link QR Code/Shortlinks", "Automated Q&A Templates", "Monthly Posts & Updates Execution"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Canonical path="/gmb-optimization" />
      
      {/* Hero Section */}
      <section
        className="min-h-[80vh] py-20 relative overflow-hidden flex items-center"
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
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6"
                style={{
                  background: 'rgba(71, 191, 114, 0.2)',
                  border: '1px solid rgba(71, 191, 114, 0.4)',
                  color: '#47BF72'
                }}
              >
                <MapPin className="w-4 h-4" />
                Local SEO Dominance ⭐
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6 tracking-tight">
                <span className="text-white font-inter font-normal block mb-2">
                  Google My Business
                </span>
                <span className="text-white font-fraunces italic font-light">
                  #1 Map Optimization.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-inter font-light mb-6 sm:mb-8">
                Rank first on Google Maps and the local map pack. We optimize your business profile to capture high-intent buyers searching for services in your area.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Local Map Pack Dominance</h3>
                    <p className="text-gray-400 text-sm">Secure a spot in Google's coveted 3-Pack, driving unmatched phone calls and direction requests.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Citation Consistency Audit</h3>
                    <p className="text-gray-400 text-sm">Correct name, address, and phone number errors across the web that harm local trust metrics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Geo-targeted Keywords</h3>
                    <p className="text-gray-400 text-sm">Optimizing profile attributes and local landing pages with location-specific intent terms.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InlineContactForm
                servicePage="GMB Optimization"
                defaultService="GMB #1 Optimization"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
      }}>
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-inter">
              GMB Optimization Capabilities
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              We focus on the local indicators Google values to give your business maps visibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 font-light">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-green-400" />
                        {item}
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

export default GMBOptimization;
