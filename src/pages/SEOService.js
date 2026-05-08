import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Canonical from '../components/SEO/Canonical';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SEOService = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  
  // Hero Form State
  const [heroData, setHeroData] = useState({
    name: '',
    email: '',
    website: ''
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

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    setHeroSubmitting(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        ...heroData,
        sourcePage: 'SEO Service',
        formType: 'Hero Proposal',
        status: 'new',
        timestamp: serverTimestamp()
      });
      setHeroSubmitted(true);
      setHeroData({ name: '', email: '', website: '' });
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

  return (
    <div className="bg-white text-slate-800 font-inter selection:bg-[#4be277] selection:text-[#003915] min-h-screen">
      <Canonical path="/seo-service" />
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
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
      ` }} />

      <main className="pb-16 sm:pb-0"> {/* Padding bottom for mobile marquee */}
        {/* Hero Section */}
        <header className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-glow -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left lg:mt-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0fdf4] border border-[#dcfce7] text-[#166534] text-xs font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
                </span>
                Elite SEO Services
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-[1.1] tracking-tight mx-auto lg:mx-0 max-w-2xl">
                Dominate Search. <br className="hidden sm:block"/>
                <span className="font-fraunces italic text-[#16a34a] mt-2 sm:mt-0 inline-block">Scale Revenue.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-light mx-auto lg:mx-0">
                We don't just chase rankings; we build scalable organic growth engines. Outrank competitors and capture high-intent traffic with our proven SEO strategies.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white px-8 py-3 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg w-full sm:w-auto"
                  style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
                >
                  Get Free Audit
                </button>
                <button 
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white border border-slate-300 text-slate-900 px-8 py-3 rounded-[5px] font-medium uppercase tracking-wide text-sm hover:bg-slate-50 transition-all w-full sm:w-auto shadow-sm"
                >
                  View Case Studies
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="pt-8 hidden sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border-t border-slate-200 justify-center lg:justify-start">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-[#22c55e] mb-1">
                    {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm">star</span>)}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-light">Trusted by 100+ Businesses</p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Lead Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 w-full max-w-md mx-auto lg:max-w-none relative"
            >
              <div className="absolute inset-0 bg-[#4be277]/10 rounded-2xl blur-xl"></div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl relative z-10 shadow-xl border border-slate-100">
                {heroSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-[#16a34a] text-2xl">check_circle</span>
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 mb-2">Request Sent!</h3>
                    <p className="text-slate-500 text-sm mb-6">We'll be in touch with your custom SEO proposal shortly.</p>
                    <button onClick={() => setHeroSubmitted(false)} className="text-[#16a34a] text-sm font-bold hover:underline">Send another</button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-2">Request an SEO Proposal</h3>
                    <p className="text-slate-500 text-sm mb-6 font-light">Discover untapped growth opportunities. No obligations.</p>
                    
                    <form onSubmit={handleHeroSubmit} className="space-y-4">
                      <div>
                        <input 
                          type="text" 
                          required
                          value={heroData.name}
                          onChange={(e) => setHeroData({...heroData, name: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light" 
                          placeholder="Full Name" 
                        />
                      </div>
                      <div>
                        <input 
                          type="url" 
                          required
                          value={heroData.website}
                          onChange={(e) => setHeroData({...heroData, website: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light" 
                          placeholder="Website URL" 
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          required
                          value={heroData.email}
                          onChange={(e) => setHeroData({...heroData, email: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:border-[#4be277] focus:bg-white outline-none transition-all placeholder-slate-400 font-light" 
                          placeholder="Work Email" 
                        />
                      </div>
                      <button 
                        disabled={heroSubmitting}
                        className="w-full text-white py-4 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg mt-4 disabled:opacity-50 flex items-center justify-center gap-2"
                        style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                        onMouseEnter={(e) => !heroSubmitting && (e.target.style.backgroundColor = '#3aa85f')}
                        onMouseLeave={(e) => !heroSubmitting && (e.target.style.backgroundColor = '#47BF72')}
                      >
                        {heroSubmitting ? 'Analyzing...' : 'Analyze My Website'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-12 border-y border-slate-200 bg-slate-50/50 relative z-10">
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
        <section className="py-20 sm:py-24 relative overflow-hidden bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="mb-12 sm:mb-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Complete SEO Solutions</h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">Everything you need to capture market share and drive qualified leads.</p>
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
          </div>
        </section>

        {/* Data-Driven Section with User's Image */}
        <section className="py-20 sm:py-24 relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden bg-slate-50 p-4 shadow-xl border border-slate-100 group"
              >
                <img src="/seo-analysis.png" alt="Data-Driven SEO" className="w-full h-auto rounded-xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#dcfce7] mb-6">
                  <span className="material-symbols-outlined text-[#16a34a] text-sm">monitoring</span>
                  <span className="text-[#16a34a] text-[10px] sm:text-xs font-bold uppercase tracking-wider">Advanced Analytics</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Data-Driven Approach to <span className="font-fraunces italic text-[#16a34a]">Growth</span></h2>
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
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-8 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6">Shape your business with the <span className="font-fraunces italic text-[#16a34a]">Leading SEO Company</span> in India!</h2>
            <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">If you are looking for an SEO company to rank your website on #1 page of Google, you have come to the right place! XD Media, the leading SEO company in India, follows an integrated approach to mark your presence in the worldwide online market.</p>
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white px-10 py-4 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg active:scale-95"
                style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
              >
                Get My Free SEO Audit
              </button>
              <a href="#case-studies" className="inline-flex items-center gap-2 text-[#16a34a] hover:text-[#15803d] font-medium transition-colors">
                If you want to skip to our Case Studies you can do so by clicking here
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* 8 Step Process - Simple Lines Layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">XD Media SEO Campaign <span className="font-fraunces italic text-[#16a34a]">Process</span></h2>
                <p className="text-slate-600 font-light mb-10 max-w-xl">In the competitive world of internet marketing, strategy should never be an afterthought. Our process is broadly divided into eight logical steps:</p>
                
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
                      <span className="text-xl font-fraunces italic text-[#16a34a] group-hover:scale-110 transition-transform">0{i+1}</span>
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
                className="relative"
              >
                <div className="absolute inset-0 bg-[#f0fdf4] rounded-full blur-3xl opacity-50 -z-10"></div>
                <img src="/Illustration-02.png" alt="SEO Analysis Illustration" className="w-full h-auto max-w-lg mx-auto rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Analysis Details - Simple Lines */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <h3 className="text-2xl font-light text-slate-900 mb-4">Complimentary Analysis Report</h3>
                  <p className="text-slate-600 text-sm font-light mb-8">We present all this to you within 48 hours from the start of your project campaign. Download some sample reports below:</p>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map((num) => (
                      <a key={num} href="#" className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-[#16a34a] hover:bg-[#f0fdf4] transition-all group">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-400 group-hover:text-[#16a34a]">picture_as_pdf</span>
                          <span className="font-medium text-slate-700 group-hover:text-slate-900">Sample Analysis Report {num}</span>
                        </div>
                        <span className="text-sm font-bold text-[#16a34a]">Download</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">Website & <span className="font-fraunces italic text-[#16a34a]">Competitive Analysis</span></h2>
                <div className="space-y-6">
                  <p className="text-slate-600 font-light leading-relaxed border-l-2 border-[#16a34a] pl-6">We start with a detailed analysis of your website including your Meta tags, Image alt tags, Sitemaps, SEO Friendly URLs, JS Minification Test, Canonicalization and a lot more.</p>
                  <p className="text-slate-600 font-light leading-relaxed border-l-2 border-slate-200 pl-6">It is followed by a thorough research of your potential competitors. We then compare your website performance to those who are already ranking for the same organic keywords as yours.</p>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-lg font-medium text-slate-900 mb-6">Competitor Analysis Focus:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["What your competitors are doing better?", "What backlink strategies are they following?", "How are their traffic patterns?", "Onsite performance and riferring domains"].map((q, i) => (
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

        {/* Keyword Research - Simple Lines Layout */}
        <section className="py-20 bg-white">
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
        </section>

        {/* Recent Results Section */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6">Recent Results in Google & AI Search Engines.</h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
                We go beyond words and get the job done. We have generated over 1 million leads and achieved more than 1,000 successes which highlights our success. Since we rank highly for countless keywords, when you work with us, you can expect professional support that will lift your business. Let's make sure we succeed together!
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative max-w-6xl mx-auto">
              {/* Card Header/Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-start p-4 sm:p-6"
              >
                <div className="bg-[#1e73be] text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                  E-Commerce
                </div>
                <img src="https://flagcdn.com/w80/in.png" alt="India Flag" className="w-10 sm:w-12 shadow-sm rounded-sm" />
              </motion.div>

              <div className="px-4 sm:px-6 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side: Case Study Details */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block bg-pink-50 text-slate-800 px-3 py-1 rounded-md text-xs mb-4 border border-pink-100">
                    <span className="font-bold">Project :</span> www.excellentpublicity.com
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Challenge</h4>
                      <p className="text-slate-600 font-light text-sm">Ranking in all over India for very competitive keywords</p>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Results</h4>
                      <div className="text-4xl font-bold text-[#1e73be] mb-2">14.9M</div>
                      <p className="text-slate-800 font-bold text-sm leading-tight">
                        Gained 14.9M Impressions and 101k Clicks and Ranked 100+ Keywords Representing a Significant Improvement.
                      </p>
                    </div>

                    {/* Keywords Table */}
                    <div className="mt-4">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-slate-100">
                            <th className="pb-2 font-bold text-slate-900">Keyword</th>
                            <th className="pb-2 font-bold text-slate-900 text-right">Ranking</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {[
                            { kw: "Railway Station Advertising", rank: "1" },
                            { kw: "Train Station Advertising", rank: "1" },
                            { kw: "Railway Advertising", rank: "1" }
                          ].map((item, i) => (
                            <tr key={i} className="group hover:bg-slate-50 transition-colors">
                              <td className="py-2 text-slate-600 font-light">{item.kw}</td>
                              <td className="py-2 text-[#1e73be] font-bold text-right">{item.rank}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side: Analytics & Image */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col"
                >
                  <h4 className="text-base font-bold text-slate-900 mb-3">Google Analytic</h4>
                  <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 flex items-center justify-center overflow-hidden max-h-[320px]">
                    <img src="/seo-chart.png" alt="Google Analytics Report" className="w-full h-full object-contain rounded-lg" />
                  </div>
                  <div className="mt-4">
                    <a href="#" className="inline-flex items-center gap-2 text-[#1e73be] hover:text-[#165a94] font-bold text-sm transition-all border-b border-[#1e73be] pb-0.5">
                      View Case Study
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section with User's Image */}

        <section className="py-20 sm:py-24 bg-slate-50">
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
                className="order-1 lg:order-2 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-4 shadow-2xl group flex items-center justify-center min-h-[300px] sm:min-h-[400px]"
              >
                <div className="absolute inset-0 bg-[#4be277]/10 blur-3xl rounded-full"></div>
                <img src="/Untitled-1-03.png" alt="SEO Workflow Diagram" className="relative z-10 w-full h-auto max-w-md object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 sm:py-24 relative bg-white">
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
                  className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-300"
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
                    <div className="p-5 sm:p-6 pt-0 text-slate-600 leading-relaxed font-light text-sm sm:text-base border-t border-slate-200 mt-2 pt-4">
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
                    {[1,2,3,4].map(n => (
                      <div key={n} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${n+10}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1,2,3,4,5].map(n => (
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
                  <form onSubmit={handleBottomSubmit} className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={bottomData.name}
                          onChange={(e) => setBottomData({...bottomData, name: e.target.value})}
                          placeholder="John Doe" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 transition-all outline-none" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={bottomData.email}
                          onChange={(e) => setBottomData({...bottomData, email: e.target.value})}
                          placeholder="john@company.com" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 transition-all outline-none" 
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Website URL</label>
                      <input 
                        type="url" 
                        required
                        value={bottomData.website}
                        onChange={(e) => setBottomData({...bottomData, website: e.target.value})}
                        placeholder="https://yourwebsite.com" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 transition-all outline-none" 
                      />
                    </div>
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                      <textarea 
                        rows="4" 
                        value={bottomData.message}
                        onChange={(e) => setBottomData({...bottomData, message: e.target.value})}
                        placeholder="Tell us about your SEO goals..." 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 transition-all outline-none resize-none"
                      ></textarea>
                    </div>
                    <button 
                      disabled={bottomSubmitting}
                      className="w-full text-white py-4 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
                      onMouseEnter={(e) => !bottomSubmitting && (e.target.style.backgroundColor = '#3aa85f')}
                      onMouseLeave={(e) => !bottomSubmitting && (e.target.style.backgroundColor = '#47BF72')}
                    >
                      {bottomSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          Sending...
                        </>
                      ) : 'Send My Free Audit'}
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
    </div>
  );
};

export default SEOService;
