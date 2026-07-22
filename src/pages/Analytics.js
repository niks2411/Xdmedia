import React from 'react';
import { Helmet } from 'react-helmet-async';
import Canonical from '../components/SEO/Canonical';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Eye, MousePointer, Clock, CheckCircle, ArrowRight, PieChart, Activity } from 'lucide-react';
import InlineContactForm from '../components/InlineContactForm';
import GmbBadge from '../components/GmbBadge';

const Analytics = () => {
  const analyticsFeatures = [
    {
      title: "Real-Time Tracking",
      description: "Monitor website visitors, user behavior, and conversions as they happen in real-time",
      features: ["Live Visitor Tracking", "Real-Time Events", "Session Recording", "Heatmaps"]
    },
    {
      title: "Advanced Reporting",
      description: "Custom reports and dashboards with actionable insights to drive business decisions",
      features: ["Custom Dashboards", "Automated Reports", "Data Export", "Goal Tracking"]
    },
    {
      title: "Conversion Optimization",
      description: "Identify bottlenecks, optimize funnels, and increase conversion rates with data-driven insights",
      features: ["Funnel Analysis", "A/B Testing", "User Journey Mapping", "Conversion Attribution"]
    }
  ];

  const metrics = [
    { label: "Page Views", value: "2.4M", change: "+45%", icon: <Eye className="w-5 h-5" /> },
    { label: "Avg. Session", value: "4:32", change: "+28%", icon: <Clock className="w-5 h-5" /> },
    { label: "Conversion Rate", value: "8.2%", change: "+92%", icon: <MousePointer className="w-5 h-5" /> },
    { label: "Bounce Rate", value: "32%", change: "-18%", icon: <Activity className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Helmet>
        <title>Performance Marketing Agency | Google & Meta Ads | XD Media</title>
        <meta
          name="description"
          content="Maximize your ROI with performance marketing services from XD Media. We create and optimize Google Ads and Meta Ads campaigns, improve conversions, and deliver measurable business growth through data-driven strategies."
        />
      </Helmet>
      <Canonical path="/performance-marketing" />
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
              <div className="mb-6">
                <GmbBadge />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-6 tracking-tight">
                Performance Marketing & Brand Growth <br className="hidden sm:block" /> Scaled to Grow.
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-inter mb-6 sm:mb-8">
                Paid reach + smart targeting = predictable growth. We combine data, creativity, and strategy to deliver ROI-driven paid campaigns and strong brand presence.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Google & Meta Ads</h3>
                    <p className="text-gray-400 text-sm">Search, Display, Shopping, YouTube, Facebook & Instagram</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Social Media Marketing</h3>
                    <p className="text-gray-400 text-sm">Complete management, influencer marketing & UGC campaigns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Funnel & Retargeting</h3>
                    <p className="text-gray-400 text-sm">Analytics, tracking, optimization & performance campaigns</p>
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
                servicePage="Analytics"
                defaultService="Digital Marketing & Analytics"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Visualization */}
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
              Your Analytics Command Center
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              All your key metrics in one beautiful, easy-to-understand dashboard
            </p>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="rounded-2xl p-6 backdrop-blur-xl border transition-all duration-300" style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                      background: 'rgba(71, 191, 114, 0.2)',
                      color: '#47BF72'
                    }}>
                      {metric.icon}
                    </div>
                    <span className={`text-sm font-semibold ${metric.change.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden backdrop-blur-xl border" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderColor: 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Traffic Overview</h3>
                  <p className="text-gray-400 text-sm">Last 30 days performance</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{
                    background: 'rgba(71, 191, 114, 0.2)',
                    border: '1px solid rgba(71, 191, 114, 0.3)'
                  }}>
                    Last 30 Days
                  </button>
                </div>
              </div>

              {/* Traffic Chart */}
              <div className="rounded-xl p-8 mb-8" style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div className="flex items-end justify-between h-64 gap-2">
                  {[45, 52, 48, 65, 58, 72, 68, 75, 70, 82, 78, 88, 85, 92, 89, 95, 90, 98, 94, 100, 96, 98, 95, 97, 94, 96, 93, 95, 92, 94].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: index * 0.03 }}
                      viewport={{ once: true }}
                      className="flex-1 rounded-t transition-all duration-300 hover:opacity-80"
                      style={{
                        background: `linear-gradient(180deg, #47BF72 0%, #3aa85f 100%)`,
                        minHeight: '10px',
                        maxWidth: '20px'
                      }}
                    ></motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-500">
                  <span>Day 1</span>
                  <span>Day 15</span>
                  <span>Day 30</span>
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Top Pages */}
                <div className="rounded-xl p-6" style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <h4 className="text-white font-semibold mb-4">Top Pages</h4>
                  <div className="space-y-3">
                    {[
                      { page: "/services", views: "45.2K", percentage: 85 },
                      { page: "/about-us", views: "32.8K", percentage: 65 },
                      { page: "/contact", views: "28.4K", percentage: 55 },
                      { page: "/blog", views: "21.6K", percentage: 42 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300">{item.page}</span>
                          <span className="text-white font-medium">{item.views}</span>
                        </div>
                        <div className="w-full h-2 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full rounded-full"
                            style={{ background: '#47BF72' }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Traffic Sources */}
                <div className="rounded-xl p-6" style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <h4 className="text-white font-semibold mb-4">Traffic Sources</h4>
                  <div className="space-y-4">
                    {[
                      { source: "Organic Search", percentage: "45%", color: "#47BF72" },
                      { source: "Direct", percentage: "28%", color: "#8B5CF6" },
                      { source: "Social Media", percentage: "18%", color: "#F59E0B" },
                      { source: "Referral", percentage: "9%", color: "#EF4444" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ background: item.color }}></div>
                          <span className="text-gray-300 text-sm">{item.source}</span>
                        </div>
                        <span className="text-white font-semibold">{item.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Features */}
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
              Powerful Analytics Features
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to understand and optimize your digital presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
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
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
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

export default Analytics;
