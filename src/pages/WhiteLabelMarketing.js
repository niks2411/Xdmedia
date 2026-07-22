import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Canonical from '../components/SEO/Canonical';
import { ChevronDown, Send, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import { countries } from '../lib/countries';
import GmbBadge from '../components/GmbBadge';

const WhiteLabelMarketing = () => {
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
          sourcePage: 'White Label Marketing',
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
          sourcePage: 'White Label Marketing',
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
    { number: '1M+', label: 'Leads Generated' },
    { number: '5M+', label: 'Keywords Ranked' },
    { number: '1K+', label: 'Campaigns Managed' },
    { number: '60%', label: 'Average Overhead Saved' }
  ];

  const marketingServices = [
    {
      icon: "search",
      title: "Search Engine Optimization",
      description: "Scale organic rankings with data-driven keywords, deep on-page strategies, and technical search auditing."
    },
    {
      icon: "ads_click",
      title: "Paid Advertising (PPC)",
      description: "High-intent client customer acquisition across Google, Bing, and major social paid advertising networks."
    },
    {
      icon: "share",
      title: "Social Media Management",
      description: "Build robust, authoritative brand presence through strategic paid and organic social campaign workflows."
    },
    {
      icon: "article",
      title: "Content Marketing",
      description: "Engaging, conversion-focused content designed to build brand authority and generate leads."
    },
    {
      icon: "mail",
      title: "Email & Funnel Automation",
      description: "Automated nurture sequences, high-converting funnel setups, and lifecycle email campaigns."
    },
    {
      icon: "psychology",
      title: "Next-Gen Marketing Tech",
      description: "Automated reporting integrations, AI workflows, and advanced tracking solutions to save agency hours."
    }
  ];

  const reasons = [
    {
      icon: "payments",
      title: "Highly Cost Effective",
      description: "Cut operational overheads by up to 60% compared to hiring full-time, in-house technical marketing specialists."
    },
    {
      icon: "trending_up",
      title: "On-Demand Scalability",
      description: "Instantly expand your client roster or service catalog without worrying about production bottleneck capacities."
    },
    {
      icon: "support_agent",
      title: "Dedicated Agency Support",
      description: "Get direct, real-time communication channels and a dedicated partner success manager for your agency accounts."
    },
    {
      icon: "verified",
      title: "Complete Brand Ownership",
      description: "Every metric audit, weekly report, and client dashboard is fully customized with your agency branding assets."
    }
  ];

  const workflow = [
    { number: "01", title: "Discovery", description: "Audit of client assets, competitor gaps, and conversion tracking bottlenecks." },
    { number: "02", title: "Strategy Setup", description: "Creation of a fully customized growth blueprint and target KPI benchmarks." },
    { number: "03", title: "Execution Plan", description: "Our expert teams deploy tracking, code updates, and launch creative assets." },
    { number: "04", title: "Optimization", description: "Continuous A/B testing, budget refinement, and asset upgrades to scale results." },
    { number: "05", title: "Reporting Sync", description: "Monthly unbranded dashboard summaries and raw metric downloads sent directly to your team." }
  ];

  const industries = [
    { icon: "shopping_bag", name: "E-commerce" },
    { icon: "medical_services", name: "Healthcare" },
    { icon: "home_work", name: "Real Estate" },
    { icon: "cloud_done", name: "SaaS" },
    { icon: "gavel", name: "Legal" },
    { icon: "flight_takeoff", name: "Travel" }
  ];

  const testimonials = [
    {
      quote: "XD Media transformed our agency capacity overnight. We scaled from 10 to 50 clients in six months without hiring a single new manager.",
      name: "Marcus Chen",
      role: "CEO, Zenith Digital",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiAFGPsxQqXWc9Tj_6e-gGfl18IIw86Az7IUXXXb0507A1ukKjbmOYgHFZFAaq2XVbdncdjW9b7BIYrKSpWNxqvjkuG8sQvtvkEL9qiBMu5U2b1OC0VtqDU0AJMeTBOpOhS2Cc5nSePP0euTYTOvrufKSmGTOazEfPzt3RIh__bpMSz5ACQxNRFLlkCraXbyCiZY1acKgxlFhFEwUKJJVi0G_Al3yZwOz0Epu4gq1mf8PsSN0FfiIasy_Ra9cVP1lSBHBFXBuJGg"
    },
    {
      quote: "The quality of their SEO work is better than what we were doing in-house. Our clients are thrilled, and our margins have never been better.",
      name: "Sarah Williams",
      role: "Director, Sky High Ads",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFVlgzdyuYrWPHZ47DjWSbIGPZl1wb7J25Qc4xsnPQP2loah4g3TH5GxtZtWKh1AM5wyot2fhrwCQ-2qPiV1k5k1sqcLRPHl-NyUH8hnqznAUr7_hbhTdOU4IEWtuRnW2J6vY2_A5fpvFMmaNzgUIfP278kk0MyT4rMM-ofaL5kjY_Pc-Dp-TkMHVrOXV0P0eMJrAZ1WPXBt0-2WVRwCZxeeJIhMd-XQVX8BKBgPUGSda3_5fVaoegeqRHs42FNEcI73MVh4mULQ"
    },
    {
      quote: "Completely invisible fulfillment. My clients think I have a team of 30 people working in the back room. The dashboard is stunning.",
      name: "David Miller",
      role: "Founder, Miller & Co",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6-tlV-uFrZTqWwlwQvRGnaf5E4KiNP-Dei6qX04VNReepYLnRb739vpdiL5OKj7EOkd3mExHMTMvGTaMFQSAeCAr1SYqkUM7gyvRhhzMT6Q0P9Zld1dld8xVDiUYZy96MeRoJhGiZ87cYmF33e69JT2DEeMzrOnH8I2RBJpBeDUifRhkr0wo9yiqX_222N-FErYu0z9KelyKFSLlY0B6FTdjkbqYe5sjxIGqVsF0VYEP04ysV98s82_yA7pCMrbsrculeyXEL5Q"
    }
  ];

  const faqs = [
    {
      question: "What marketing channels are covered?",
      answer: "We support a complete suite: Technical SEO, Google/Meta/LinkedIn PPC Campaigns, Organic Social Strategy, email funnels, and conversion rate optimization (CRO)."
    },
    {
      question: "How do you brand dashboards and deliverables?",
      answer: "We offer 100% white label integrations. We deliver metrics, audits, and dashboards either on unbranded portals or custom domains carrying your branding configurations."
    },
    {
      question: "Is there client-facing support from your team?",
      answer: "No. To protect your brand authority, all client communication runs directly through your account managers. We remain strictly in the background as your core delivery engine."
    },
    {
      question: "Are there long-term contracts?",
      answer: "We work on a flexible month-to-month basis. We earn your agency's trust campaign-by-campaign, so you are never locked into long-term overhead obligations."
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white font-inter selection:bg-[#47BF72] selection:text-black">
      <Helmet>
        <title>White Label Digital Marketing Partner Plan | XD Media</title>
        <meta name="description" content="Scale your agency catalog with white label Google Ads, Meta Ads, SEO, and email marketing. 100% invisible fulfillment and wholesale agency margins." />
      </Helmet>
      <Canonical path="/white-label-digital-marketing" />

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
            background: rgba(25, 25, 25, 0.4);
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
              alt="White Label Marketing Hero Background"
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
                  Your Complete Backend <br />
                  Digital Marketing Team
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
                  Offer premium SEO, PPC, and funnel creation under your agency brand. We handle the heavy lifting while you take credit and scale client satisfaction.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => document.getElementById('services-bento')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white px-8 py-4 font-semibold uppercase tracking-wide text-xs transition-all duration-200 shadow-lg"
                    style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
                  >
                    Explore Capabilities
                  </button>
                  <a
                    href="https://wa.me/917901724043?text=Hi%20XD%20Media%2C%20I%20am%20interested%20in%20your%20White%20Label%20Digital%20Marketing%20partnership."
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

        {/* Services Bento Grid */}
        <section id="services-bento" className="py-24 relative overflow-hidden bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="mb-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6">Expert Solutions Under Your Brand</h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Deploy high-performance marketing strategies without the overhead of an in-house fulfillment team.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingServices.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass-card p-8 rounded-2xl group hover:border-[#47BF72]/30 hover:bg-white/[0.01] transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#47BF72] group-hover:text-black transition-all">
                    <span className="material-symbols-outlined text-[#47BF72] group-hover:text-black text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-black border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-10 leading-tight">
                Your Success is Our <br />
                <span className="font-fraunces italic text-[#47BF72]">Only Metric</span>
              </h2>
              <ul className="space-y-8">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#47BF72] text-xl">{reason.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">{reason.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#47BF72]/5 rounded-2xl blur-3xl pointer-events-none"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf2jg0Ha7kOZ8iSXoc1wS3KPPllA4feF2J_vc7kKbj4AnJBzk2gs9C6_M2iOgjEMZlBJnIOwF1h4Zt3Je9NLy2dIHijhlW8AmO41bforMNfT_YUhi5V96pSCY8WIKRLnV_AVkQr678m_GxUPP6FlOteAF-eUeBHzcueETXz70h0ySaj549AKGmBxiqAEY881UWBolxAciDLHl8gHZmpGyXZBYV0QTkRbVNyIAkTwGq3ud1Je_9L-XAEIqJjEV_2klmrurB9T6qjw"
                alt="Team Collaboration"
                className="rounded-2xl border border-white/10 w-full object-cover max-h-[400px]"
              />
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">Our Seamless Workflow</h2>
              <p className="text-gray-400 max-w-xl mx-auto">From onboard setup to conversion scaling, our pipeline runs invisibly in the background.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {workflow.map((item, i) => (
                <div key={i} className="group bg-white/[0.02] p-8 rounded-2xl border-t-2 border-white/10 hover:border-[#47BF72] transition-all">
                  <span className="text-white/20 font-black text-4xl block mb-6 group-hover:text-[#47BF72] transition-colors">{item.number}</span>
                  <h4 className="text-base sm:text-lg font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 bg-black border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mb-20">Specialized In Your Verticals</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((ind, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-[#47BF72] text-3xl mb-4">{ind.icon}</span>
                  <span className="text-sm font-medium text-white">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl text-white mb-4">Trusted by 200+ Agencies</h2>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[#47BF72] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl flex flex-col justify-between">
                  <p className="text-gray-300 italic text-sm leading-relaxed mb-8">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-white">{t.name}</h5>
                      <p className="text-[#47BF72] text-[10px] uppercase font-bold tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-black border-t border-white/5">
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
        <section className="py-24 bg-[#0d0d0d] relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 hero-glow opacity-30 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl text-white mb-4">Scale Your Agency Volume Overnight</h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Join hundreds of agencies who have unlocked client growth using our white-label execution teams.
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

export default WhiteLabelMarketing;
