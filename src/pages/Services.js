import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Share2, Video, Megaphone, Code, ShoppingCart, Search, Palette,
  Camera, Pen, Film, Sparkles, ArrowRight, CheckCircle, Users
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      category: "Partnership & White Label",
      tagline: "Scale Your Agency Without Hiring",
      color: "#22C55E",
      icon: <Users className="w-8 h-8" />,
      services: [
        {
          icon: <Search className="w-6 h-6" />,
          title: "White Label SEO Services",
          path: "/white-label-seo",
          description: "Deliver powerful search results to your clients without the overhead of an in-house team. We handle the fulfillment, you take the credit.",
          features: ["Technical SEO Audits", "High-Authority Backlinks", "Keyword Strategy", "Branded Daily Reporting"]
        },
        {
          icon: <Megaphone className="w-6 h-6" />,
          title: "White Label Digital Marketing",
          path: "/white-label-digital-marketing",
          description: "Offer full-stack marketing solutions including SEO, PPC, and Social Media under your own brand with our senior fulfillment team.",
          features: ["PPC & Google Ads Management", "Social Media Advertising", "Content Marketing", "White Label Client Dashboard"]
        }
      ]
    },
    {
      category: "Digital Marketing Services",
      tagline: "ROI-Driven Campaigns That Scale",
      color: "#47BF72",
      icon: <TrendingUp className="w-8 h-8" />,
      services: [
        {
          icon: <Share2 className="w-6 h-6" />,
          title: "Social Media Management & Strategy",
          description: "End-to-end social media management with data-driven content strategies, community engagement, and brand building across all major platforms.",
          features: ["Content Calendar Planning", "Community Management", "Analytics & Reporting", "Influencer Coordination"]
        },
        {
          icon: <Megaphone className="w-6 h-6" />,
          title: "Performance Marketing",
          description: "Meta Ads, Google Ads, and YouTube Ads campaigns optimized for maximum ROI. We focus on conversions, not vanity metrics.",
          features: ["Meta Ads (Facebook & Instagram)", "Google Ads (Search & Display)", "YouTube Advertising", "Retargeting Campaigns"]
        },
        {
          icon: <Video className="w-6 h-6" />,
          title: "Influencer Marketing & PR",
          description: "Strategic influencer partnerships and PR campaigns that amplify your brand message and build credibility.",
          features: ["Influencer Outreach", "Campaign Management", "PR Strategy", "Media Relations"]
        },
        {
          icon: <Film className="w-6 h-6" />,
          title: "Content Creation & Video Marketing",
          description: "Compelling content and video production that engages audiences and drives action across all channels.",
          features: ["Video Production", "Content Writing", "Scriptwriting", "Post-Production"]
        }
      ]
    },
    {
      category: "Technology & Development",
      tagline: "Fast, Scalable, Conversion-Focused",
      color: "#8B5CF6",
      icon: <Code className="w-8 h-8" />,
      services: [
        {
          icon: <Code className="w-6 h-6" />,
          title: "Website Design & Development",
          description: "Modern, responsive websites built with Next.js and cutting-edge tech. Fast loading, SEO-optimized, and conversion-focused.",
          features: ["Next.js Development", "Responsive Design", "Performance Optimization", "CMS Integration"]
        },
        {
          icon: <ShoppingCart className="w-6 h-6" />,
          title: "E-commerce & Landing Pages",
          description: "High-converting e-commerce stores and landing pages designed to maximize sales and minimize cart abandonment.",
          features: ["Shopify Development", "WooCommerce Solutions", "Landing Page Design", "Conversion Optimization"]
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "SEO & Advanced Analytics",
          description: "Technical SEO, keyword strategy, and advanced analytics to improve rankings and track every metric that matters.",
          features: ["Technical SEO", "Keyword Research", "Google Analytics Setup", "Performance Tracking"]
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "App UI/UX Design",
          description: "Intuitive, beautiful app interfaces that users love. From wireframes to high-fidelity prototypes.",
          features: ["UI/UX Design", "Prototyping", "User Testing", "Design Systems"]
        }
      ]
    },
    {
      category: "Creative Solutions",
      tagline: "Bold Ideas That Stand Out",
      color: "#F59E0B",
      icon: <Palette className="w-8 h-8" />,
      services: [
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Branding & Logo Design",
          description: "Distinctive brand identities that capture your essence and resonate with your target audience.",
          features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
        },
        {
          icon: <Pen className="w-6 h-6" />,
          title: "Graphic Design & Motion Graphics",
          description: "Eye-catching graphics and animations for social media, ads, and digital campaigns.",
          features: ["Social Media Graphics", "Ad Creatives", "Motion Graphics", "Infographics"]
        },
        {
          icon: <Camera className="w-6 h-6" />,
          title: "Photography & Video Production",
          description: "Professional photography and video production for products, events, and brand storytelling.",
          features: ["Product Photography", "Event Coverage", "Brand Videos", "Commercial Shoots"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      {/* Hero Section */}
      <section
        className="py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)'
        }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6"
              style={{
                background: 'rgba(71, 191, 114, 0.1)',
                border: '1px solid rgba(71, 191, 114, 0.3)',
                color: '#47BF72'
              }}>
              Our Services
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight">
              End-to-End Solutions <br /> Under One Roof
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed font-inter mb-8">
              From digital marketing to technology and creative solutions—everything you need to build, grow, and scale your brand. <span className="text-white font-medium">All services delivered in-house, not outsourced.</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                  boxShadow: '0 10px 40px rgba(71, 191, 114, 0.3)'
                }}
              >
                Get Started
              </button>
              <button
                className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-white/10"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section
          key={catIndex}
          className="py-24 relative overflow-hidden"
          style={{
            background: catIndex % 2 === 0 ? '#0a0a0a' : 'linear-gradient(180deg, #0a0a0a 0%, #16213e 50%, #0a0a0a 100%)'
          }}
        >
          <div className="container-max relative z-10">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, ${category.color}30, ${category.color}15)`,
                  border: `1px solid ${category.color}40`,
                  color: category.color
                }}
              >
                {category.icon}
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-inter">
                {category.category}
              </h2>
              <p className="text-xl font-medium font-inter" style={{ color: category.color }}>
                {category.tagline}
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div
                    className="relative overflow-hidden rounded-2xl p-8 h-full backdrop-blur-xl border transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at top left, ${category.color}15, transparent 70%)`
                      }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${category.color}30, ${category.color}15)`,
                          border: `1px solid ${category.color}40`,
                          color: category.color
                        }}
                      >
                        {service.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 font-inter">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed font-inter mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: category.color }} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Link at bottom */}
                      {service.path ? (
                        <Link 
                          to={service.path}
                          className="mt-auto flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all duration-300"
                          style={{ color: category.color }}
                        >
                          Explore Solution
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <div className="mt-auto flex items-center gap-2 text-gray-500 font-semibold italic text-sm">
                          Core Service
                        </div>
                      )}
                    </div>

                    {/* Bottom accent */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ background: category.color }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(71, 191, 114, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
        }}
      >
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-inter">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our end-to-end solutions can help you achieve your business goals.
            </p>
            <button
              className="px-10 py-5 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                boxShadow: '0 10px 40px rgba(71, 191, 114, 0.3)'
              }}
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
