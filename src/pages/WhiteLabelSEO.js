import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Canonical from '../components/SEO/Canonical';
import { ChevronDown, Send, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import { countries } from '../lib/countries';
import GmbBadge from '../components/GmbBadge';

const WhiteLabelSEO = () => {
  // Hero Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agencyName: '',
    website: '',
    phoneNumber: '',
    countryCode: '+1',
    clientCount: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Bottom Form State
  const [bottomData, setBottomData] = useState({
    name: '',
    email: '',
    agencyName: '',
    website: '',
    phoneNumber: '',
    countryCode: '+1',
    clientCount: ''
  });
  const [bottomSubmitting, setBottomSubmitting] = useState(false);
  const [bottomSubmitted, setBottomSubmitted] = useState(false);
  const [bottomError, setBottomError] = useState(null);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          agencyName: formData.agencyName,
          website: formData.website,
          phoneNumber: `${formData.countryCode} ${formData.phoneNumber}`,
          clientCount: formData.clientCount,
          sourcePage: 'White Label SEO',
          formType: 'Hero Partnership Request'
        })
      });

      if (!response.ok) {
        throw new Error('Hero Partnership Request submission failed');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        agencyName: '',
        website: '',
        phoneNumber: '',
        countryCode: '+1',
        clientCount: ''
      });
    } catch (err) {
      console.error("Error submitting hero form:", err);
      setError("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBottomSubmit = async (e) => {
    e.preventDefault();
    setBottomSubmitting(true);
    setBottomError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: bottomData.name,
          email: bottomData.email,
          agencyName: bottomData.agencyName,
          website: bottomData.website,
          phoneNumber: `${bottomData.countryCode} ${bottomData.phoneNumber}`,
          clientCount: bottomData.clientCount,
          sourcePage: 'White Label SEO',
          formType: 'Bottom Partnership Request'
        })
      });

      if (!response.ok) {
        throw new Error('Bottom Partnership Request submission failed');
      }

      setBottomSubmitted(true);
      setBottomData({
        name: '',
        email: '',
        agencyName: '',
        website: '',
        phoneNumber: '',
        countryCode: '+1',
        clientCount: ''
      });
    } catch (err) {
      console.error("Error submitting bottom form:", err);
      setBottomError("Failed to submit request. Please try again.");
    } finally {
      setBottomSubmitting(false);
    }
  };

  const stats = [
    { number: '10K+', label: 'Projects Delivered' },
    { number: '200%', label: 'Average Client ROI' },
    { number: '100+', label: 'Agency Partners' },
    { number: '24/7', label: 'Dedicated Support' }
  ];

  const benefits = [
    {
      icon: "add_business",
      title: "Expand Services Instantly",
      description: "Add world-class SEO capabilities to your agency's service portfolio overnight without the overhead of hiring or training."
    },
    {
      icon: "rocket_launch",
      title: "Focus on Scaling Sales",
      description: "Spend your valuable time on business development, sales, and client relationships while we handle technical execution."
    },
    {
      icon: "trending_up",
      title: "Effortless Scaling",
      description: "From 1 client to 1,000, our delivery infrastructure scales smoothly alongside your agency's client volume."
    },
    {
      icon: "payments",
      title: "Boost Your Profit Margins",
      description: "Slash your operational overheads and increase your agency margins with wholesale SEO partner rates."
    },
    {
      icon: "groups",
      title: "Dedicated Experts",
      description: "Access a certified team of search analysts, technical optimizers, and content editors focused on your success."
    },
    {
      icon: "article",
      title: "100% White Label Reporting",
      description: "Get completely branded dashboards, ranking audits, and PDF reports featuring your agency logo and colors."
    }
  ];

  const services = [
    {
      title: "White Label Technical SEO",
      description: "Deeper technical audits, structural optimization, speed optimization, and schema markup deployments.",
      image: "/images/stitch/white-label-seo-hero.png"
    },
    {
      title: "Authority Link Building",
      description: "High-quality, contextual link placements and blogger outreach campaigns to push competitive keyword terms.",
      image: "/images/stitch/white-label-seo-hero.png"
    },
    {
      title: "Premium Content Strategy",
      description: "Editorial-grade copywriting, blog writing, and targeted landing page copy optimized to capture rankings.",
      image: "/images/stitch/white-label-seo-hero.png"
    }
  ];

  const steps = [
    { number: "01", title: "Partner Sync & Onboarding", description: "We sync with your agency processes, dashboard tracking, and custom requirements." },
    { number: "02", title: "Strategy & Audit Development", description: "Our team runs exhaustive audits and designs keyword roadmaps for your client." },
    { number: "03", title: "On-page & Off-page Execution", description: "Specialists execute technical SEO edits, content upgrades, and high-authority link campaigns." },
    { number: "04", title: "Unbranded Reports Delivery", description: "Monthly interactive white-labeled dashboards and PDFs delivered straight to your inbox." }
  ];



  const faqs = [
    {
      question: "Will my clients know XD Media is involved?",
      answer: "No. Our white label SEO is 100% anonymous. Every dashboard, report, audit document, and email deliverable is completely rebranded with your agency's logo, colors, and branding details."
    },
    {
      question: "How do you handle client communication?",
      answer: "We act as your behind-the-scenes delivery team. We never contact your clients directly. All insights, deliverables, and recommendations are sent directly to you, so you remain the sole point of contact for your clients."
    },
    {
      question: "Are there any minimum client requirements or contract locks?",
      answer: "No minimum client counts are required. You can start with a single client campaign. All campaigns run on month-to-month contracts, meaning you can upgrade, downgrade, or cancel at any time."
    },
    {
      question: "How do we submit new clients?",
      answer: "Once you join as an agency partner, you get access to a streamlined partner portal where you can submit client intake details, track campaign status, and request custom proposals."
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white font-inter selection:bg-[#47BF72] selection:text-black">
      <Helmet>
        <title>White Label SEO Services for Agencies | XD Media</title>
        <meta name="description" content="Scale your digital agency with premium, 100% white label SEO services. Partner wholesale pricing, branded client dashboards, and dedicated execution teams." />
      </Helmet>
      <Canonical path="/white-label-seo" />

      {/* Custom styles for glowing details */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
        }
        .hero-glow {
            background: radial-gradient(circle at 50% 50%, rgba(71, 191, 114, 0.12) 0%, transparent 70%);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
      ` }} />

      <main className="pb-16 sm:pb-0">
        {/* Hero Section */}
        <header className="relative min-h-[600px] lg:min-h-[750px] flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0">
            <img
              src="/seo-hero.png"
              className="w-full h-full object-cover opacity-40"
              alt="White Label SEO Hero Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#0a0a0a]/60 to-transparent"></div>
            <div className="absolute inset-0 hero-glow"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full py-12 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 sm:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white space-y-6 sm:space-y-10"
              >
                <div>
                  <GmbBadge />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-[1.1] tracking-tight">
                  Premium SEO Services <br />
                  Under Your Brand Name
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
                  Offer premium SEO capabilities to your clients without hiring a single employee. We deliver world-class rankings while your agency takes 100% of the credit.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white px-8 py-4 font-semibold uppercase tracking-wide text-xs transition-all duration-200 shadow-lg"
                    style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
                  >
                    Become a Partner
                  </button>
                  <a
                    href="https://wa.me/917901724043?text=Hi%20XD%20Media%2C%20I%20am%20interested%20in%20your%20White%20Label%20SEO%20partnership."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 border-2 border-emerald-500 text-white px-8 py-4 font-semibold uppercase tracking-wide text-xs transition-all rounded-[5px] bg-[#47BF72]/10 hover:bg-[#47BF72] active:scale-95"
                  >
                    Partner Consult
                  </a>
                </div>
              </motion.div>

              {/* Right Form Card */}
              <motion.div
                id="partnership-form"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:ml-auto w-full max-w-md"
              >
                <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-[#47BF72]/15 border border-[#47BF72]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-[#47BF72]" />
                      </div>
                      <h3 className="text-xl text-white mb-2">Proposal Requested!</h3>
                      <p className="text-gray-400 mb-8 text-sm">Our agency partnership managers will contact you within 24 hours.</p>
                      <button onClick={() => setIsSubmitted(false)} className="text-[#47BF72] font-semibold hover:underline text-sm">Submit another request</button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl sm:text-2xl text-white mb-6 text-center leading-tight">
                        Request Agency <span className="font-fraunces italic text-[#47BF72]">Partner Proposal</span>
                      </h3>

                      {error && (
                        <div className="mb-4 p-3 rounded-lg flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <p>{error}</p>
                        </div>
                      )}

                      <form onSubmit={handleHeroSubmit} className="space-y-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all placeholder-white/30 text-sm"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                        <input
                          type="email"
                          placeholder="Agency Email"
                          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all placeholder-white/30 text-sm"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                        <input
                          type="text"
                          placeholder="Agency Name"
                          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all placeholder-white/30 text-sm"
                          value={formData.agencyName}
                          onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                          required
                        />
                        <input
                          type="url"
                          placeholder="Agency Website"
                          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all placeholder-white/30 text-sm"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          required
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <select
                            value={formData.countryCode}
                            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                            className="sm:col-span-1 bg-slate-900 border border-white/10 text-white/70 px-3 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all text-sm text-left"
                          >
                            {countries.map((c, idx) => (
                              <option key={`hero-${c.name}-${c.code}-${idx}`} value={c.code}>
                                {c.name} ({c.code})
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            className="sm:col-span-2 bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all placeholder-white/30 text-sm"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            required
                          />
                        </div>
                        <select
                          className="w-full bg-slate-900 border border-white/10 text-white/70 px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all text-sm"
                          value={formData.clientCount}
                          onChange={(e) => setFormData({ ...formData, clientCount: e.target.value })}
                          required
                        >
                          <option value="" disabled>Active SEO Clients</option>
                          <option value="none">0 Clients (Just Starting)</option>
                          <option value="1-5">1 to 5 Clients</option>
                          <option value="5-15">5 to 15 Clients</option>
                          <option value="over-15">15+ Clients</option>
                        </select>

                        <button
                          disabled={isSubmitting}
                          className="w-full text-white py-3.5 font-semibold uppercase tracking-wide text-xs transition-all duration-200 shadow-lg mt-4 disabled:opacity-50 active:scale-[0.98]"
                          style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                          onMouseEnter={(e) => !isSubmitting && (e.target.style.backgroundColor = '#3aa85f')}
                          onMouseLeave={(e) => !isSubmitting && (e.target.style.backgroundColor = '#47BF72')}
                        >
                          {isSubmitting ? 'Submitting...' : 'Request Partner Proposal'}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="py-12 bg-black border-y border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`text-center px-4 ${i !== 0 ? 'border-l border-white/10' : ''}`}
                >
                  <div className="text-3xl sm:text-4xl text-[#47BF72] mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Bento Box Style */}
        <section className="py-24 relative overflow-hidden bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="mb-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6">Why Agencies Partner With Us</h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Elevate your agency's execution capabilities with a backend team designed to scale your margins seamlessly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass-card p-8 rounded-2xl group hover:border-[#47BF72]/30 hover:bg-white/[0.01] transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#47BF72] group-hover:text-black transition-all">
                    <span className="material-symbols-outlined text-[#47BF72] group-hover:text-black text-2xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Parity Grid */}
        <section className="py-24 bg-black border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">Under-the-Hood Execution</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Complete execution covering every technical, off-page, and creative optimization requirement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 group">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-medium text-white mb-2">{service.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow timeline */}
        <section className="py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-20 text-center">Onboarding & Delivery Workflow</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#47BF72] transition-colors relative z-10 bg-[#0d0d0d]">
                      <span className="text-lg font-semibold text-[#47BF72]">{step.number}</span>
                    </div>
                    <h5 className="text-base sm:text-lg font-medium text-white mb-2">{step.title}</h5>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* FAQs */}
        <section className="py-24 bg-[#0d0d0d] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl text-center text-white mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-4">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg text-white hover:text-[#47BF72] transition-colors flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#47BF72] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        activeFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 text-sm leading-relaxed pl-8 pb-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Form Section */}
        <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 hero-glow opacity-30 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl text-white mb-4">Start Growing Your Agency Today</h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Ready to deliver top-tier search visibility under your own brand? Fill out the brief below and talk to our experts.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-10 shadow-2xl">
              {bottomSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#47BF72]/15 border border-[#47BF72]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-[#47BF72]" />
                  </div>
                  <h3 className="text-2xl text-white mb-2">Thank you!</h3>
                  <p className="text-gray-400 mb-8 text-sm">We've received your request and will schedule a partner onboarding sync shortly.</p>
                  <button onClick={() => setBottomSubmitted(false)} className="text-[#47BF72] font-semibold hover:underline text-sm">Send another request</button>
                </div>
              ) : (
                <form onSubmit={handleBottomSubmit} className="space-y-6">
                  {bottomError && (
                    <div className="p-3 rounded-lg flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <p>{bottomError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all placeholder-white/30 text-sm"
                      value={bottomData.name}
                      onChange={(e) => setBottomData({ ...bottomData, name: e.target.value })}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Agency Email"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all placeholder-white/30 text-sm"
                      value={bottomData.email}
                      onChange={(e) => setBottomData({ ...bottomData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Agency Name"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all placeholder-white/30 text-sm"
                      value={bottomData.agencyName}
                      onChange={(e) => setBottomData({ ...bottomData, agencyName: e.target.value })}
                      required
                    />
                    <input
                      type="url"
                      placeholder="Agency Website"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all placeholder-white/30 text-sm"
                      value={bottomData.website}
                      onChange={(e) => setBottomData({ ...bottomData, website: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <select
                        value={bottomData.countryCode}
                        onChange={(e) => setBottomData({ ...bottomData, countryCode: e.target.value })}
                        className="sm:col-span-1 bg-slate-900 border border-white/10 text-white/70 px-3 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all text-sm text-left"
                      >
                        {countries.map((c, idx) => (
                          <option key={`bottom-${c.name}-${c.code}-${idx}`} value={c.code}>
                            {c.name} ({c.code})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="sm:col-span-2 bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all placeholder-white/30 text-sm"
                        value={bottomData.phoneNumber}
                        onChange={(e) => setBottomData({ ...bottomData, phoneNumber: e.target.value })}
                        required
                      />
                    </div>
                    <select
                      className="w-full bg-slate-900 border border-white/10 text-white/70 px-4 py-3 rounded-xl focus:border-[#47BF72] outline-none transition-all text-sm"
                      value={bottomData.clientCount}
                      onChange={(e) => setBottomData({ ...bottomData, clientCount: e.target.value })}
                      required
                    >
                      <option value="" disabled>Active SEO Clients</option>
                      <option value="none">0 Clients (Just Starting)</option>
                      <option value="1-5">1 to 5 Clients</option>
                      <option value="5-15">5 to 15 Clients</option>
                      <option value="over-15">15+ Clients</option>
                    </select>
                  </div>

                  <button
                    disabled={bottomSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.01] inline-flex items-center justify-center gap-2 disabled:opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                      boxShadow: '0 10px 40px rgba(71, 191, 114, 0.2)'
                    }}
                  >
                    {bottomSubmitting ? 'Sending Request...' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhiteLabelSEO;
