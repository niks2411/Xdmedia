import React from 'react';
import Canonical from '../components/SEO/Canonical';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, CheckCircle, Search, Cpu, Brain, Layers } from 'lucide-react';
import InlineContactForm from '../components/InlineContactForm';

const ChatGPTListing = () => {
  const features = [
    {
      title: "AI Directory Indexing",
      description: "Ensure your business is correctly cataloged in AI indexes, aggregators, and crawler pathways.",
      items: ["AI Crawler Verification", "Database Directory Mapping", "Index Status Reports"]
    },
    {
      title: "Semantic Schema Markup",
      description: "Embed rich JSON-LD schema so LLMs understand your services, location, and entities.",
      items: ["Entity Schema Optimization", "Local NAP Integration", "Product & FAQ Rich Schemas"]
    },
    {
      title: "AI Response Optimization (AIO)",
      description: "Structure web content to rank as the cited answer in ChatGPT Search, Gemini, and Claude.",
      items: ["Direct Answer Formats", "Topical Authority Content", "AI Citations Audit"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Canonical path="/list-your-business-on-chatgpt" />
      
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
                <Cpu className="w-4 h-4" />
                AI Search Optimization ⭐
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6 tracking-tight">
                <span className="text-white font-inter font-normal block mb-2">
                  List Your Business on
                </span>
                <span className="text-white font-fraunces italic font-light">
                  ChatGPT & AI Engines.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-inter font-light mb-6 sm:mb-8">
                Be discoverable where users are searching next. We optimize and index your brand for LLM scrapers, conversational searches, and AI assistants like ChatGPT, Claude, and Google Gemini.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Crawlability by AI Bots</h3>
                    <p className="text-gray-400 text-sm">Ensure your robots.txt and sitemaps are optimized for GPTBot and other AI user-agents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Conversational Search Readiness</h3>
                    <p className="text-gray-400 text-sm">Content structured for intent-based, semantic queries rather than simple keyword matches.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Entity Authority Building</h3>
                    <p className="text-gray-400 text-sm">Get referenced in datasets and directories that AI models use as high-confidence sources.</p>
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
                servicePage="ChatGPT Listing"
                defaultService="List Your Business on ChatGPT"
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
              AI Search Readiness Strategy
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              We prepare your digital assets to be read, cited, and recommended by AI engines.
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

export default ChatGPTListing;
