import React from 'react';
import Canonical from '../components/SEO/Canonical';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Target, Monitor, CheckCircle, ArrowRight, Smartphone, Gauge, Layers, Palette, Globe, Sparkles } from 'lucide-react';
import InlineContactForm from '../components/InlineContactForm';
import { MacbookScroll } from '../components/ui/macbook-scroll';
import { BackgroundLines } from '../components/ui/background-lines';

const MarketingTools = () => {
  // Animation variants
  const floatingVariants = {
    float: {
      y: [-15, 15, -15],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const marketingServices = [
    {
      title: "Custom Website Design",
      description: "Beautiful, responsive designs tailored to your brand with modern UI/UX principles",
      features: ["Custom UI/UX", "Responsive Design", "Brand Integration", "Wireframing & Prototyping"]
    },
    {
      title: "Web Development",
      description: "High-performance websites built with modern frameworks and best practices",
      features: ["React.js & Next.js", "WordPress & Shopify", "API Integration", "Database Design"]
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, SEO, and conversions",
      features: ["Speed Optimization", "Core Web Vitals", "SEO Integration", "CRO Strategies"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Canonical path="/website-design" />
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
                <Code className="w-4 h-4" />
                Core Expertise ⭐
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6 tracking-tight">
                <span className="text-white font-inter font-normal block mb-2">
                  Website Design & Development
                </span>
                <span className="text-white font-fraunces italic font-light">
                  Designed to Convert.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-inter font-light mb-6 sm:mb-8">
                High-performance websites built for speed, scale, and conversions. We design and develop websites that don't just look good — they perform. SEO-first, mobile-first, and conversion-focused.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Custom UI/UX & Development</h3>
                    <p className="text-gray-400 text-sm">React.js, Next.js, WordPress, Shopify & WooCommerce</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Ecommerce Solutions</h3>
                    <p className="text-gray-400 text-sm">Single & multi-product stores with payment integrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Speed & CRO Optimization</h3>
                    <p className="text-gray-400 text-sm">Performance optimization and conversion rate improvements</p>
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
                servicePage="Website Design"
                defaultService="Website Design & Development"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stunning MacbookScroll Showcase Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgb(12,33,21) 0%, #0a0a0a 50%, rgb(12,33,21) 100%)' }}>
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20 blur-xl"
          style={{ background: 'radial-gradient(circle, rgba(71, 191, 114, 0.4) 0%, transparent 70%)' }}
          variants={pulseVariants}
          animate="pulse"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full opacity-20 blur-xl"
          style={{ background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)' }}
          variants={pulseVariants}
          animate="pulse"
        />

        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-green-400 opacity-60"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full bg-cyan-400 opacity-60"
          variants={floatingVariants}
          animate="float"
        />

        {/* Rotating Ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed opacity-10 pointer-events-none"
          style={{ borderColor: 'rgba(71, 191, 114, 0.4)' }}
          variants={rotateVariants}
          animate="rotate"
        />

        <div className="w-full flex-1 flex flex-col items-center justify-center relative z-10 px-4">
          <BackgroundLines className="relative w-full flex flex-col items-center justify-center px-4 pt-4 pb-4 overflow-hidden">
            <motion.div
              className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced Title with Letter Animation */}
              <motion.div className="mb-2 leading-tight">
                {['Crafting Digital', 'Experiences'].map((line, lineIdx) => (
                  <div key={lineIdx} className={`${lineIdx === 1 ? 'mt-1 md:mt-2' : ''}`}>
                    {Array.from(line).map((letter, index) => (
                      <motion.span
                        key={`${lineIdx}-${index}`}
                        className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                        initial={{ y: 50, opacity: 0, rotateX: -90 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        transition={{
                          delay: index * 0.05 + lineIdx * 0.4,
                          duration: 0.5,
                          type: 'spring',
                          stiffness: 100
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <p className="text-lg sm:text-xl md:text-2xl text-green-400 font-medium">
                  Where Design Meets Performance
                </p>
              </motion.div>

              <motion.p
                className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                Premium websites engineered for speed, built for conversions.
              </motion.p>
            </motion.div>
          </BackgroundLines>
        </div>

        {/* MacbookScroll Section */}
        <div className="w-full flex justify-center relative">
          <BackgroundLines className="absolute inset-0 overflow-hidden pointer-events-none" />
          <div className="relative z-10 w-full flex justify-center">
            <MacbookScroll
              showGradient={false}
              screenTitle="Your Website Here"
              screenSubtitle="Designed with precision. Built for performance."
              screenDescription="React.js • Next.js • WordPress • Shopify"
            />
          </div>
        </div>
      </section>

      {/* Marketing Services */}
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
              Complete Web Design Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              From design to development, we create websites that perform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
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

export default MarketingTools;
