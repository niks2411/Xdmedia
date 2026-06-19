import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Canonical from '../components/SEO/Canonical';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { MarqueeDemo } from '../components/MarqueeDemo';
import { TrendingUp } from 'lucide-react';

const SEOService = () => {
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
    companyName: '',
    website: '',
    phoneNumber: '',
    budgetRange: ''
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
        sourcePage: 'SEO Service',
        formType: 'Hero Audit Request',
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
        sourcePage: 'SEO Service',
        formType: 'Bottom Audit',
        status: 'new',
        timestamp: serverTimestamp()
      });
      setBottomSubmitted(true);
      setBottomData({
        name: '',
        email: '',
        companyName: '',
        website: '',
        phoneNumber: '',
        budgetRange: ''
      });
    } catch (error) {
      console.error("Error submitting bottom form: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setBottomSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "How is your SEO approach different?",
      answer: "We combine data-driven technical optimization with high-authority link building and premium content strategies. Every campaign is custom-built around your specific business goals, ensuring transparent, measurable growth."
    },
    {
      question: "How long until we see tangible results?",
      answer: "While early technical wins can yield results within 30 days, substantial organic growth and first-page rankings typically take 3 to 6 months depending on your industry's competitiveness."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No. We believe in earning your business every month. Our agreements are flexible, though we recommend a minimum 6-month commitment to see the full impact of an SEO campaign."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We focus on metrics that impact your bottom line: organic revenue, lead volume, and targeted traffic. You'll receive a live dashboard tracking keyword rankings, traffic growth, and conversion rates."
    }
  ];

  const stats = [
    { number: '10K+', label: 'Websites Optimized' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  const rankingItems = [
    { countryCode: "us", keyword: "roofing software" },
    { countryCode: "de", keyword: "luxury real estate berlin" },
    { countryCode: "fr", keyword: "solar panels paris" },
    { countryCode: "jp", keyword: "b2b saas marketing" },
    { countryCode: "in", keyword: "commercial cleaning delhi" },
    { countryCode: "br", keyword: "fintech app development" },
    { countryCode: "kr", keyword: "car rental seoul" },
    { countryCode: "it", keyword: "corporate tax consultants" },
    { countryCode: "es", keyword: "ecommerce logistics" },
    { countryCode: "mx", keyword: "dental implants mexico" },
  ];

  const resultsData = [
    {
      category: "AI Search Visibility",
      smallLabel: "AI SEO / Generative Engine Optimization",
      heading: "Significant Growth in AI Citations & AI-Cited Pages",
      challenge: "Improving the website’s visibility across AI-powered search systems by strengthening semantic SEO, topical authority, and content relevance.",
      resultValue: "+70.1K",
      resultDesc: "AI citations increased from 120 to 942, significantly improving visibility across AI-generated search responses and answer engines.",
      tableTitle: "Metric",
      tableRows: [
        { label: "AI Citations", value: "942", growth: "+70.1K" },
        { label: "AI-Cited Pages", value: "75", growth: "+188%" },
        { label: "Total AI Citations", value: "70.1K", growth: "Growth" }
      ],
      chartTitle: "AI Visibility Report",
      image: "/Weelee Performance Dashboard.png"
    },
    {
      category: "Organic SEO Growth",
      smallLabel: "Organic Search Performance",
      heading: "Improved Rankings, Impressions & Organic Traffic",
      challenge: "Implemented a strategic SEO campaign focused on keyword rankings, search visibility, technical SEO improvements, and content optimization.",
      resultValue: "328K",
      resultDesc: "Organic clicks increased from 299K to 328K, with total impressions reaching 6.96M within the last 3 months.",
      tableTitle: "Metric",
      tableRows: [
        { label: "Total Clicks", value: "328K", growth: "+26K" },
        { label: "Total Impressions", value: "6.96M", growth: "+830K" },
        { label: "Average Position", value: "7.2", growth: "9.6 Prev" },
        { label: "Average CTR", value: "4.7%", growth: "Stable" }
      ],
      chartTitle: "Google Search Console",
      image: "/Weelee Organic Performance New.png"
    },
    {
      category: "AI Citation Growth",
      smallLabel: "AI Search Optimization",
      heading: "Improved AI Citations & Content Recognition",
      challenge: "Focused on improving content relevance, semantic SEO, topical authority, and crawlable content structure to strengthen visibility.",
      resultValue: "+8.4K",
      resultDesc: "AI citations increased significantly from 20 to 168, showing substantial growth in AI search visibility and answer engine recognition.",
      tableTitle: "Metric",
      tableRows: [
        { label: "AI Citations", value: "168", growth: "+8.4K" },
        { label: "AI-Cited Pages", value: "30", growth: "+275%" },
        { label: "Total AI Citations", value: "8.4K", growth: "Improved" }
      ],
      chartTitle: "AI Citation Dashboard",
      image: "/Onegolf Performance Dashboard.png"
    }
  ];

  return (
    <div className="bg-white text-slate-800 font-inter selection:bg-[#4be277] selection:text-[#003915] min-h-screen">
      <Helmet>
        <title>Best SEO Services in India | Rank #1 on Google Fast | Free SEO Audit</title>
        <meta
          name="description"
          content="Increase website traffic, rankings &amp; conversions with affordable SEO services trusted by Indian brands. Free SEO audit available."
        />
      </Helmet>
      <Canonical path="/affordable-seo-services-in-india" />
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
      ` }} />

      <main className="pb-16 sm:pb-0"> {/* Padding bottom for mobile marquee */}
        {/* Hero Section */}
        {/* Hero Section */}
        <header className="relative min-h-[600px] lg:min-h-[750px] flex items-center overflow-hidden bg-slate-900">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/seo-hero-backup.png"
              className="w-full h-full object-cover opacity-50"
              alt="SEO Hero Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
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
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] tracking-tight">
                  <span className="sm:whitespace-nowrap">AI-Powered SEO Solutions</span> <br className="hidden lg:block" />
                  Built for <span className="font-fraunces italic text-[#16a34a]">Long-Term Rankings</span> & Revenue Growth
                </h1>
                <div className="space-y-4">
                  <p className="text-xl sm:text-2xl text-slate-200 font-light leading-snug">
                    Still Not Getting Qualified Leads from Google?
                  </p>
                  <p className="text-xl sm:text-2xl text-slate-200 font-bold leading-snug border-l-4 border-[#47BF72] pl-6">
                    Proven Results Within Stipulated timeline
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => document.getElementById('recent-results')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white px-10 py-4 font-medium uppercase tracking-wide text-sm transition-all duration-200 shadow-lg active:scale-95"
                    style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
                  >
                    View Results
                  </button>
                  <a
                    href="https://wa.me/917901724043?text=Hi%20XD%20Media%2C%20I%20am%20interested%20in%20your%20SEO%20%26%20AI%20SEO%20services.%20I%20would%20like%20to%20get%20an%20SEO%20audit%20report."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 border-2 border-[#25D366] text-white px-10 py-4 font-medium uppercase tracking-wide text-sm transition-all rounded-[5px] bg-[#25D366]/10 backdrop-blur-md hover:bg-[#25D366] active:scale-95 group"
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
                className="lg:ml-auto lg:mr-8 w-full max-w-md"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl relative border border-slate-100">
                  {heroSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-[#16a34a] text-4xl">check_circle</span>
                      </div>
                      <h3 className="text-2xl font-light text-slate-900 mb-2">Request Received!</h3>
                      <p className="text-slate-500 mb-8 font-light">Our SEO experts will analyze your site and contact you shortly.</p>
                      <button onClick={() => setHeroSubmitted(false)} className="text-[#16a34a] font-bold hover:underline">Submit another request</button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-8 text-center leading-tight">
                        Get A Free <span className="font-fraunces italic text-[#16a34a]">SEO & AI SEO</span> Audit Report
                      </h3>

                      <form onSubmit={handleHeroSubmit} className="space-y-4">
                        <div className="space-y-4">
                          <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light"
                            value={heroData.name}
                            onChange={(e) => setHeroData({ ...heroData, name: e.target.value })}
                            required
                          />
                          <input
                            type="email"
                            placeholder="Company Email"
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light"
                            value={heroData.email}
                            onChange={(e) => setHeroData({ ...heroData, email: e.target.value })}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Company Name"
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light"
                            value={heroData.companyName}
                            onChange={(e) => setHeroData({ ...heroData, companyName: e.target.value })}
                            required
                          />
                          <input
                            type="url"
                            placeholder="Website URL"
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light"
                            value={heroData.website}
                            onChange={(e) => setHeroData({ ...heroData, website: e.target.value })}
                            required
                          />
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <select className="sm:col-span-1 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all font-light text-sm">
                              <option>India (+91)</option>
                              <option>US (+1)</option>
                              <option>UK (+44)</option>
                            </select>
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              className="sm:col-span-2 bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light"
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
                            <option value="" disabled>Monthly Budget Range</option>
                            <option value="30k-50k">₹30,000 to ₹50,000</option>
                            <option value="50k-1l">₹50,000 to ₹1 Lakh</option>
                            <option value="1l-2.5l">₹1 Lakh to ₹2.5 Lakh</option>
                            <option value="over-2.5l">Over ₹2.5 Lakh</option>
                          </select>
                        </div>

                        <button
                          disabled={heroSubmitting}
                          className="w-full text-white py-4 font-medium uppercase tracking-wide text-sm transition-all duration-200 shadow-lg mt-4 disabled:opacity-50 active:scale-[0.98]"
                          style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                          onMouseEnter={(e) => !heroSubmitting && (e.target.style.backgroundColor = '#3aa85f')}
                          onMouseLeave={(e) => !heroSubmitting && (e.target.style.backgroundColor = '#47BF72')}
                        >
                          {heroSubmitting ? 'Submitting...' : 'Get My Free Audit'}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-12 border-y border-slate-200 bg-slate-200 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`text-center px-2 sm:px-4 ${i !== 0 && i !== 2 ? 'border-l border-slate-200' : ''} ${i === 2 ? 'md:border-l border-slate-200' : ''}`}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-[#16a34a] text-[10px] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-widest font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Services Section */}
        <section className="pt-20 sm:pt-24 pb-8 sm:pb-10 relative overflow-hidden bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="mb-12 sm:mb-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Complete SEO Solutions</h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">Everything you need to capture search market share, build domain authority, and drive qualified leads. We map out full-funnel keyword opportunities, resolve complex technical crawlability blocks, and scale high-value backlink campaigns to deliver sustainable organic revenue.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] sm:auto-rows-[180px]">
              {/* Tall Card: Keyword Intelligence */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:row-span-2 md:col-span-1 glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-[#4be277]/40 hover:bg-[#f0fdf4] transition-all duration-500 flex flex-col justify-end bg-white"
              >
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#4be277]/10 rounded-full blur-[60px] group-hover:bg-[#4be277]/20 transition-all duration-700"></div>

                {/* Number Top Right */}
                <div className="absolute top-6 right-6 text-5xl font-fraunces text-slate-100 font-bold italic group-hover:text-[#4be277]/30 transition-colors z-20 duration-500">01</div>

                <div className="relative z-20 mt-20 md:mt-0">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center relative z-20 group-hover:bg-[#dcfce7] transition-all duration-500 mb-4">
                    <span className="material-symbols-outlined text-[#16a34a] text-2xl">manage_search</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-2">Keyword Intelligence</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">Data-backed research to identify high-converting, accessible search terms that your competitors are completely missing.</p>
                </div>
              </motion.div>

              {/* Wide Card: Technical SEO */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="md:col-span-2 glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-[#4be277]/40 hover:bg-[#f0fdf4] transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#4be277]/5 rounded-full blur-[50px] group-hover:bg-[#4be277]/10 transition-all duration-700"></div>

                {/* Number Top Right */}
                <div className="absolute top-6 right-6 text-5xl font-fraunces text-slate-100 font-bold italic group-hover:text-[#4be277]/30 transition-colors z-20 duration-500">02</div>

                <div className="relative z-20 flex-1 pr-12">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center relative z-20 group-hover:bg-[#dcfce7] transition-all duration-500">
                      <span className="material-symbols-outlined text-[#16a34a] text-2xl">build</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-slate-900">Technical SEO</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-light max-w-md">Ensuring flawless crawlability, rapid indexation, and perfect core web vitals performance to lay a frictionless foundation for growth.</p>
                </div>
              </motion.div>

              {/* Square Card: Content Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-[#4be277]/40 hover:bg-[#f0fdf4] transition-all duration-500 flex flex-col justify-end bg-white"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#4be277]/10 rounded-full blur-[40px] group-hover:bg-[#4be277]/20 transition-all duration-700"></div>

                {/* Number Top Right */}
                <div className="absolute top-6 right-6 text-5xl font-fraunces text-slate-100 font-bold italic group-hover:text-[#4be277]/30 transition-colors z-20 duration-500">03</div>

                <div className="relative z-20 mt-16 md:mt-0">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center relative z-20 group-hover:bg-[#dcfce7] transition-all duration-500 mb-3">
                    <span className="material-symbols-outlined text-[#16a34a] text-xl">edit_document</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-slate-900 mb-2">Content Strategy</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">Perfecting site architecture and content mapping for maximum relevance.</p>
                </div>
              </motion.div>

              {/* Square Card: Authority Building */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-[#4be277]/40 hover:bg-[#f0fdf4] transition-all duration-500 flex flex-col justify-end bg-white"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#4be277]/10 rounded-full blur-[40px] group-hover:bg-[#4be277]/20 transition-all duration-700"></div>

                {/* Number Top Right */}
                <div className="absolute top-6 right-6 text-5xl font-fraunces text-slate-100 font-bold italic group-hover:text-[#4be277]/30 transition-colors z-20 duration-500">04</div>

                <div className="relative z-20 mt-16 md:mt-0">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center relative z-20 group-hover:bg-[#dcfce7] transition-all duration-500 mb-3">
                    <span className="material-symbols-outlined text-[#16a34a] text-xl">link</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-slate-900 mb-2">Authority Building</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">Securing elite contextual backlinks that signal trust to search algorithms.</p>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-12">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white px-10 py-4 font-medium uppercase tracking-wide text-sm transition-all duration-200 shadow-lg active:scale-95"
                style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
              >
                Get Free Audit
              </button>
            </div>
          </div>
        </section>

        {/* Data-Driven Section with User's Image */}
        <section className="pt-8 sm:pt-10 pb-20 sm:pb-24 relative bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Mobile Header block */}
            <div className="lg:hidden mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#dcfce7] mb-4">
                <span className="material-symbols-outlined text-[#16a34a] text-sm">monitoring</span>
                <span className="text-[#16a34a] text-[10px] sm:text-xs font-bold uppercase tracking-wider">Advanced Analytics</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 leading-tight">Data-Driven Approach to <span className="font-fraunces italic text-[#16a34a]">Growth</span></h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden bg-slate-50 p-4 shadow-xl border border-slate-100 group"
              >
                <img src="/Illustration.png" alt="Data-Driven SEO" className="w-full h-auto rounded-xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Desktop-only Header block */}
                <div className="hidden lg:block">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#dcfce7] mb-6">
                    <span className="material-symbols-outlined text-[#16a34a] text-sm">monitoring</span>
                    <span className="text-[#16a34a] text-[10px] sm:text-xs font-bold uppercase tracking-wider">Advanced Analytics</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Data-Driven Approach to <span className="font-fraunces italic text-[#16a34a]">Growth</span></h2>
                </div>
                <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 font-light">Guesswork has no place in modern SEO. Our strategies are built on deep data analysis, competitor reverse-engineering, and proven frameworks.</p>

                <div className="space-y-6">
                  {[
                    { icon: "radar", title: "Competitor Analysis", desc: "We map out exactly what your top competitors are doing and build a roadmap to outpace them." },
                    { icon: "history_edu", title: "Content Strategy", desc: "Creating high-value, intent-matched content that ranks faster and converts visitors into buyers." },
                    { icon: "insights", title: "Performance Tracking", desc: "Live reporting dashboards so you always know your ROI, ranking improvements, and traffic gains." }
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

        {/* New Massive SEO Process Content */}
        {/* Intro Banner */}
        <section className="py-20 bg-slate-200 border-t border-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-8 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6">Shape your business with the <span className="font-fraunces italic text-[#16a34a]">Leading SEO Company</span> in India!</h2>
            <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">If you are looking for an SEO company to rank your website on #1 page of Google, you have come to the right place! XD Media, the leading SEO company in India, follows an integrated approach to mark your presence in the worldwide online market.</p>
            <div className="flex justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white px-10 py-4 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg active:scale-95"
                style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
              >
                Get My Free SEO Audit
              </button>
            </div>
          </motion.div>
        </section>

        {/* 8 Step Process - Simple Lines Layout */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Mobile Header block */}
            <div className="lg:hidden mb-8">
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 leading-tight">XD Media SEO Campaign <span className="font-fraunces italic text-[#16a34a]">Process</span></h2>
              <p className="text-slate-600 font-light mt-4 max-w-xl">In the competitive world of internet marketing, strategy should never be an afterthought. Our process is broadly divided into eight logical steps:</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                {/* Desktop-only Header block */}
                <div className="hidden lg:block">
                  <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">XD Media SEO Campaign <span className="font-fraunces italic text-[#16a34a]">Process</span></h2>
                  <p className="text-slate-600 font-light mb-10 max-w-xl">In the competitive world of internet marketing, strategy should never be an afterthought. Our process is broadly divided into eight logical steps:</p>
                </div>

                <div className="space-y-6">
                  {[
                    "Website & Competitive Analysis",
                    "Keyword Research",
                    "Website On-Page Optimization",
                    "Manual Link building",
                    "Submissions to Trusted sites",
                    "Weekly Keyword Ranking Reports",
                    "Monthly SEO Performance Reports",
                    "Permanent Traffic, Leads, Income, ROI"
                  ].map((title, i) => (
                    <div key={i} className="flex items-center gap-6 border-b border-slate-100 pb-4 group">
                      <span className="text-xl font-fraunces italic text-[#16a34a] group-hover:scale-110 transition-transform">0{i + 1}</span>
                      <h4 className="text-lg font-light text-slate-800 group-hover:text-[#16a34a] transition-colors">{title}</h4>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2 relative"
              >
                <div className="absolute inset-0 bg-[#f0fdf4] rounded-full blur-3xl opacity-50 -z-10"></div>
                <div
                  className="relative max-w-2xl mx-auto"
                  style={{ perspective: '1200px' }}
                >
                  <div
                    className="relative rounded-3xl transition-transform duration-200 ease-out will-change-transform [transform-style:preserve-3d]"
                    onMouseMove={handleProcessCardMove}
                    onMouseLeave={resetProcessCardTransform}
                    style={{
                      transform: `rotateX(${processCardTransform.rotateX}deg) rotateY(${processCardTransform.rotateY}deg) translateY(${processCardTransform.translateY}px)`
                    }}
                  >
                    {/* Depth shadow */}
                    <div className="absolute -inset-2 rounded-[28px] bg-black/10 blur-2xl translate-y-6 -z-10"></div>

                    {/* Specular highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(255,255,255,0.55),transparent_55%)] mix-blend-soft-light opacity-70"></div>

                    {/* Subtle edge */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/60"></div>

                    <img
                      src="/SEO CAMPAIGN PROCESS.png"
                      alt="SEO Campaign Process"
                      className="w-full h-auto rounded-3xl bg-white shadow-xl"
                      style={{ transform: 'translateZ(24px)' }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Analysis Details - Simple Lines */}
        <section className="py-20 bg-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Mobile Header block */}
            <div className="lg:hidden mb-8">
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 leading-tight">Website & <span className="font-fraunces italic text-[#16a34a]">Competitive Analysis</span></h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:order-1 relative rounded-2xl overflow-hidden bg-white p-4 shadow-xl border border-slate-100 group"
              >
                <img
                  src="/Illustration Final-08.png"
                  alt="Website and Competitive Analysis"
                  className="w-full h-auto rounded-xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:order-2"
              >
                {/* Desktop-only Header block */}
                <h2 className="hidden lg:block text-3xl sm:text-4xl font-light text-slate-900 mb-6">Website & <span className="font-fraunces italic text-[#16a34a]">Competitive Analysis</span></h2>
                <div className="space-y-6">
                  <p className="text-slate-600 font-light leading-relaxed border-l-2 border-[#16a34a] pl-6">We start with a detailed analysis of your website including your Meta tags, Image alt tags, Sitemaps, SEO Friendly URLs, JS Minification Test, Canonicalization and a lot more.</p>
                  <p className="text-slate-600 font-light leading-relaxed border-l-2 border-slate-200 pl-6">It is followed by a thorough research of your potential competitors. We then compare your website performance to those who are already ranking for the same organic keywords as yours.</p>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-medium text-slate-900 mb-6">Competitor Analysis Focus:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {["What your competitors are doing better?", "What backlink strategies are they following?", "How are their traffic patterns?", "Onsite performance and riferring domains"].map((q, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600 font-light text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
                        {q}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white px-10 py-4 font-medium uppercase tracking-wide text-sm transition-all duration-200 shadow-lg active:scale-95"
                    style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
                  >
                    Get Free Audit
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Keyword Research - Simple Lines Layout */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6"><span className="font-fraunces italic text-[#16a34a]">Keyword</span> Research</h2>
                <p className="text-slate-600 font-light text-lg mb-10">The aim is to uncover keywords and actual search phrases that customers enter into search engines.</p>

                <div className="space-y-8">
                  {[
                    { title: "Creating a List of Seed Keywords", desc: "Generic terms people use for searching products to get valuable insight into competitor rankings." },
                    { title: "Generate Keyword Ideas", desc: "Uncovering hundreds of variations using Google's Keyword Planner and Google Trends." },
                    { title: "Niche Down Approach", desc: "Focusing on untapped long tail keywords which usually have higher conversion rates." },
                    { title: "Location Based Keywords", desc: "Providing a list of local keywords containing specific place names for local dominance." }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <h3 className="text-xl font-medium text-slate-900 mb-2 group-hover:text-[#16a34a] transition-colors flex items-center gap-3">
                        <span className="w-6 h-[1px] bg-slate-200 group-hover:bg-[#16a34a] transition-all"></span>
                        {item.title}
                      </h3>
                      <p className="text-slate-600 font-light text-sm pl-9">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img src="/keyword-research.png" alt="Keyword Research Illustration" className="w-full h-auto max-w-lg mx-auto rounded-3xl" />
              </motion.div>
            </div>

            <div className="mt-20 bg-[#001208] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-96 h-96 bg-[#4be277]/10 rounded-full blur-[80px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-light mb-8 max-w-2xl">Ranking for local keywords can be made easy by taking care of <span className="font-fraunces italic text-[#4be277]">3 very important things</span>:</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-fraunces italic text-[#3d4a3d] mb-4">1</div>
                    <p className="text-[#bccbb9] font-light text-sm leading-relaxed">Your website should scream about the location you are serving. Optimize your internal pages and contact page with location details (NAP).</p>
                  </div>
                  <div>
                    <div className="text-4xl font-fraunces italic text-[#3d4a3d] mb-4">2</div>
                    <p className="text-[#bccbb9] font-light text-sm leading-relaxed">Implement relevant schema in your web pages. Helping Google categorize your local business correctly.</p>
                  </div>
                  <div>
                    <div className="text-4xl font-fraunces italic text-[#3d4a3d] mb-4">3</div>
                    <p className="text-[#bccbb9] font-light text-sm leading-relaxed">Your anchor text profile should also have mention of the location while linking to your website.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Recent Results Section */}
        <section id="recent-results" className="py-20 bg-slate-100 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6">Recent Results in Google & AI Search Engines.</h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
                We go beyond words and get the job done. We have generated over 1 million leads and achieved more than 1,000 successes which highlights our success. Since we rank highly for countless keywords, when you work with us, you can expect professional support that will lift your business. Let's make sure we succeed together!
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
              {resultsData.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveResultTab(idx)}
                  className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeResultTab === idx
                    ? 'bg-[#16a34a] text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
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
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative"
                  >
                    {/* Card Header/Badge */}
                    <div className="flex justify-between items-start p-4 sm:p-6">
                      <div className="bg-[#1e73be] text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                        {data.category}
                      </div>
                    </div>

                    <div className="px-4 sm:px-6 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Left Side: Case Study Details */}
                      <div>


                        <div className="space-y-4">
                          <div>
                            <h4 className="text-base font-bold text-slate-900 mb-1">Challenge</h4>
                            <p className="text-slate-600 font-light text-sm">{data.challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-base font-bold text-slate-900 mb-1">Results</h4>
                            <div className="text-4xl font-bold text-[#1e73be] mb-2 flex items-center gap-1.5">
                              {data.resultValue}
                              <TrendingUp className="w-7 h-7 text-[#1e73be]" />
                            </div>
                            <p className="text-slate-800 font-bold text-sm leading-tight">
                              {data.resultDesc}
                            </p>
                          </div>

                          {/* Keywords Table */}
                          <div className="mt-4">
                            <table className="w-full text-left text-sm">
                              <thead>
                                <tr className="border-b border-slate-100">
                                  <th className="pb-2 font-bold text-slate-900">{data.tableTitle}</th>
                                  <th className="pb-2 font-bold text-slate-900 text-right">Value</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-50">
                                {data.tableRows.map((item, i) => (
                                  <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                    <td className="py-2 text-slate-600 font-light">{item.label}</td>
                                    <td className="py-2 text-[#1e73be] font-bold text-right">
                                      <div className="inline-flex items-center justify-end gap-1">
                                        <span className="flex items-center gap-0.5">
                                          {item.value}
                                          {item.value.includes('8.4') && (
                                            <TrendingUp className="w-3.5 h-3.5 text-[#1e73be]" />
                                          )}
                                        </span>
                                        <span className="text-[10px] opacity-70 ml-1 flex items-center gap-0.5">
                                          ({item.growth})
                                          {(item.growth.includes('+') || item.growth.includes('8.4') || item.growth.toLowerCase() === 'growth' || item.growth.toLowerCase() === 'improved') && (
                                            <TrendingUp className="w-3.5 h-3.5 text-[#1e73be]" />
                                          )}
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Analytics & Image */}
                      <div className="flex flex-col">
                        <h4 className="text-base font-bold text-slate-900 mb-3">{data.chartTitle}</h4>
                        <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 flex items-center justify-center overflow-hidden min-h-[280px] max-h-[320px]">
                          {data.image ? (
                            <img src={data.image} alt={data.chartTitle} className="w-full h-auto object-contain rounded-lg" />
                          ) : (
                            <div className="text-slate-300 text-xs italic">Analytics Visual Pending</div>
                          )}
                        </div>

                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white px-10 py-4 font-medium uppercase tracking-wide text-sm transition-all duration-200 shadow-lg active:scale-95"
                style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
              >
                Get Free Audit
              </button>
            </div>
          </div>
        </section>

        {/* Workflow Section with User's Image */}

        <section className="py-20 sm:py-24 bg-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Mobile Header block */}
            <div className="lg:hidden mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 leading-tight">Continuous <span className="font-fraunces italic text-[#16a34a]">Optimization</span></h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                {/* Desktop-only Header block */}
                <h2 className="hidden lg:block text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Continuous <span className="font-fraunces italic text-[#16a34a]">Optimization</span></h2>
                <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 font-light">SEO isn't a one-and-done setup. It's a continuous process of refinement, adaptation to algorithm updates, and compounding growth.</p>

                <div className="space-y-4">
                  {[
                    { step: "01", title: "Comprehensive Website Audit", desc: "Identifying technical roadblocks and foundational issues." },
                    { step: "02", title: "Strategic Keyword Mapping", desc: "Aligning content with high-intent search queries." },
                    { step: "03", title: "On-Page Implementation", desc: "Executing structural and content optimizations." },
                    { step: "04", title: "Authority Building", desc: "Acquiring premium placements and backlinks." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#4be277]/30 transition-all group">
                      <div className="text-3xl font-fraunces italic text-slate-300 group-hover:text-[#16a34a] transition-colors">{item.step}</div>
                      <div>
                        <h4 className="font-light text-slate-900 mb-1">{item.title}</h4>
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
                className="order-1 lg:order-2 relative rounded-2xl overflow-hidden bg-white border border-slate-100 p-4 shadow-xl group flex items-center justify-center min-h-[400px] sm:min-h-[550px]"
              >
                <div className="absolute inset-0 bg-[#f0fdf4]/30 blur-3xl rounded-full"></div>
                <img src="/On page optimization.png" alt="SEO Workflow Diagram" className="relative z-10 w-full h-auto max-w-xl object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials - Dark background */}
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
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                Real results, real testimonials from brands we've helped grow
              </p>
              <div className="w-20 h-1 mx-auto mt-6" style={{ background: '#47BF72' }}></div>
            </motion.div>
            <MarqueeDemo />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 sm:py-24 relative bg-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Frequently Asked <span className="font-fraunces italic text-[#16a34a]">Questions</span></h2>
              <p className="text-base sm:text-lg text-slate-600 font-light">Everything you need to know about our SEO services.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-100 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-light text-slate-900 pr-4 sm:pr-8">{faq.question}</span>
                    <span className={`material-symbols-outlined text-[#16a34a] transition-transform duration-300 shrink-0 ${activeAccordion === i ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === i ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="p-5 sm:p-6 pt-4 text-slate-600 leading-relaxed font-light text-sm sm:text-base border-t border-slate-200 mt-2">
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
                  <span className="text-[#16a34a] text-[10px] sm:text-xs font-bold uppercase tracking-wider">Free SEO Strategy Session</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-6 leading-tight">
                  Ready to dominate your <span className="font-fraunces italic text-[#16a34a]">market?</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 font-light leading-relaxed">
                  Stop losing customers to your competitors. Fill out the form to get a complimentary SEO audit and a custom roadmap to rank #1.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: "check_circle", text: "Free 30-minute Strategy Call" },
                    { icon: "check_circle", text: "Complete Competitor Analysis" },
                    { icon: "check_circle", text: "Custom Keyword Growth Roadmap" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#16a34a]">{item.icon}</span>
                      <span className="text-slate-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(n => (
                      <div key={n} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${n + 10}`} alt="user" />
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
                  <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 text-center">
                    <div className="w-20 h-20 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="material-symbols-outlined text-[#16a34a] text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-medium text-slate-900 mb-2">Audit Request Received!</h3>
                    <p className="text-slate-600 font-light mb-8">Our SEO experts will analyze your website and get back to you within 24 hours.</p>
                    <button
                      onClick={() => setBottomSubmitted(false)}
                      className="text-[#16a34a] font-bold hover:underline"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBottomSubmit} className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-100 space-y-4">
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light"
                        value={bottomData.name}
                        onChange={(e) => setBottomData({ ...bottomData, name: e.target.value })}
                        required
                      />
                      <input
                        type="email"
                        placeholder="Company Email"
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light"
                        value={bottomData.email}
                        onChange={(e) => setBottomData({ ...bottomData, email: e.target.value })}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light"
                        value={bottomData.companyName}
                        onChange={(e) => setBottomData({ ...bottomData, companyName: e.target.value })}
                        required
                      />
                      <input
                        type="url"
                        placeholder="Website URL"
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light"
                        value={bottomData.website}
                        onChange={(e) => setBottomData({ ...bottomData, website: e.target.value })}
                        required
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <select className="sm:col-span-1 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all font-light text-sm">
                          <option>India (+91)</option>
                          <option>US (+1)</option>
                          <option>UK (+44)</option>
                        </select>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="sm:col-span-2 bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light"
                          value={bottomData.phoneNumber}
                          onChange={(e) => setBottomData({ ...bottomData, phoneNumber: e.target.value })}
                          required
                        />
                      </div>
                      <select
                        className="w-full bg-slate-50 border border-slate-200 text-slate-600 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all font-light text-sm"
                        value={bottomData.budgetRange}
                        onChange={(e) => setBottomData({ ...bottomData, budgetRange: e.target.value })}
                        required
                      >
                        <option value="" disabled>Monthly Budget Range</option>
                        <option value="30k-50k">₹30,000 to ₹50,000</option>
                        <option value="50k-1l">₹50,000 to ₹1 Lakh</option>
                        <option value="1l-2.5l">₹1 Lakh to ₹2.5 Lakh</option>
                        <option value="over-2.5l">Over ₹2.5 Lakh</option>
                      </select>
                    </div>

                    <button
                      disabled={bottomSubmitting}
                      className="w-full text-white py-4 font-medium uppercase tracking-wide text-sm transition-all duration-200 shadow-lg mt-4 disabled:opacity-50 active:scale-[0.98] flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                      onMouseEnter={(e) => !bottomSubmitting && (e.target.style.backgroundColor = '#3aa85f')}
                      onMouseLeave={(e) => !bottomSubmitting && (e.target.style.backgroundColor = '#47BF72')}
                    >
                      {bottomSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          Submitting...
                        </>
                      ) : 'Get My Free Audit'}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
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
          <span className="hidden sm:inline">TOP 10 RANKING THIS WEEK</span>
          <span className="sm:hidden">TOP 10</span>
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
            {[...rankingItems, ...rankingItems].map((item, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <img src={`https://flagcdn.com/w40/${item.countryCode}.png`} alt={item.countryCode} className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-sm object-cover border border-slate-200 shadow-sm shrink-0" />
                <span className="text-slate-600 font-medium capitalize">{item.keyword}</span>
                <span className="text-[#16a34a] font-bold shrink-0">🥇 Rank 1</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917901724043?text=Hi%20XD%20Media%2C%20I%20am%20interested%20in%20your%20SEO%20%26%20AI%20SEO%20services.%20I%20would%20like%20to%20get%20an%20SEO%20audit%20report."
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

export default SEOService;
