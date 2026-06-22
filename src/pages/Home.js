import React, { useState } from 'react';
import Canonical from '../components/SEO/Canonical';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import PartnerLogos from '../components/PartnerLogos';
import { FocusCardsDemo } from '../components/FocusCardsDemo';


import { Marquee } from '../components/magicui/marquee';
import TestimonialCards from '../components/TestimonialCards';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessWorkflow from '../components/ProcessWorkflow';
import CredibilityBacking from '../components/CredibilityBacking';
import BookingModal from '../components/BookingModal';
import { TrendingUp, Target, Zap, ShieldCheck, Search, Code, BarChart3, Users, Settings, Globe, ArrowRight, Layers, Play, RefreshCw, BarChart, Activity, ShoppingBag, Building2, Rocket, Briefcase, User, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { countries } from '../lib/countries';


const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  const [activeStep, setActiveStep] = useState(0);
  const [visiblePaths, setVisiblePaths] = useState([]);

  const startSequence = () => {
    setVisiblePaths([]);
    setActiveStep(0);

    // Step 1 to 2
    setTimeout(() => {
      setVisiblePaths(prev => [...prev, 0]);
    }, 300);
    setTimeout(() => {
      setActiveStep(1);
    }, 650);

    // Step 2 to 3
    setTimeout(() => {
      setVisiblePaths(prev => [...prev, 1]);
    }, 950);
    setTimeout(() => {
      setActiveStep(2);
    }, 1300);

    // Step 3 to 4
    setTimeout(() => {
      setVisiblePaths(prev => [...prev, 2]);
    }, 1600);
    setTimeout(() => {
      setActiveStep(3);
    }, 1950);

    // Step 4 to 5
    setTimeout(() => {
      setVisiblePaths(prev => [...prev, 3]);
    }, 2250);
    setTimeout(() => {
      setActiveStep(4);
    }, 2600);

    // Step 5 back to 1 (completes the ring)
    setTimeout(() => {
      setVisiblePaths(prev => [...prev, 4]);
    }, 2900);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'new',
        sourcePage: 'Home Page Hero'
      });

      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            service: formData.service,
            message: formData.message
          })
        });
      } catch (emailErr) {
        console.error('Email notification failed:', emailErr);
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          countryCode: '+91',
          service: '',
          message: ''
        });
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const stats = [
    { number: '10K+', label: 'Websites Optimized' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
  ];


  return (
    <div className="min-h-screen relative">
      <Canonical path="/" />
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px] lg:min-h-[600px] w-full flex items-start pt-16 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/premium_photo-1661696348133-653cb6cc037c.avif"
            className="w-full h-full object-cover opacity-50"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left ml-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] tracking-tight mb-6 sm:mb-8"
              >
                1 SEO Strategy = <br className="hidden lg:block" />
                <span className="font-fraunces italic text-[#16a34a]">3X Your Organic Traffic</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed font-inter font-light max-w-xl"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
              >
                Your competitors are ranking. Your customers are searching. Let's make sure they find you first.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-3 mb-8 text-white/90 text-sm sm:text-base font-inter font-light max-w-xl"
              >
                {[
                  { title: "Transparent reporting", desc: "you see everything, always" },
                  { title: "Global clients", desc: "proven results across industries" },
                  { title: "No long-term lock-ins", desc: "we earn your trust every month" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mt-0.5 text-emerald-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>
                      <strong className="text-white font-medium">{item.title}</strong>
                      <span className="text-white/60">- {item.desc}</span>
                    </span>
                  </li>
                ))}
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="hidden lg:block"
              >
                <Link
                  to="/contact"
                  className="text-white px-6 py-3 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg"
                  style={{
                    backgroundColor: '#47a858',
                    borderRadius: '5px'

                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#47BF72'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#47a858'}
                >
                  CONNECT NOW
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side Lead Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:ml-auto max-w-md relative z-20 mt-8 lg:mt-0"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 relative shadow-2xl overflow-hidden">
                {/* Accent glow inside card */}
                <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-green-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 relative z-10"
                  >
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                      background: 'rgba(71, 191, 114, 0.2)',
                      border: '2px solid #47BF72'
                    }}>
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-light text-slate-900 mb-2">Request Received!</h3>
                    <p className="text-slate-500 font-light text-sm">
                      Thank you. Our experts will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-8 text-center leading-tight font-inter">
                      Get A Free <span className="font-fraunces italic text-[#16a34a]">Growth Proposal</span> & Estimate
                    </h3>

                    {error && (
                      <div className="mb-4 p-3 rounded-lg flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-600 text-xs">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <p>{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          placeholder="Your Full Name"
                          className="w-full px-4 py-3.5 rounded-xl transition-all duration-300 outline-none text-sm placeholder-slate-400 disabled:opacity-50 bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#47BF72] focus:bg-white"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          placeholder="Email Address"
                          className="w-full px-4 py-3.5 rounded-xl transition-all duration-300 outline-none text-sm placeholder-slate-400 disabled:opacity-50 bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#47BF72] focus:bg-white"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="sm:col-span-1 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-3.5 rounded-xl focus:border-[#47BF72] focus:bg-white outline-none transition-all font-light text-sm"
                        >
                          {countries.map((c, idx) => (
                            <option key={`${c.name}-${c.code}-${idx}`} value={c.code}>
                              {c.name} ({c.code})
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          placeholder="Phone Number (optional)"
                          className="sm:col-span-2 px-4 py-3.5 rounded-xl transition-all duration-300 outline-none text-sm placeholder-slate-400 disabled:opacity-50 bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#47BF72] focus:bg-white"
                        />
                      </div>

                      <div>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3.5 rounded-xl transition-all duration-300 outline-none text-sm disabled:opacity-50 appearance-none cursor-pointer bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#47BF72] focus:bg-white"
                          style={{
                            color: formData.service ? '#0f172a' : 'rgba(15, 23, 42, 0.4)'
                          }}
                        >
                          <option value="" disabled style={{ background: 'white', color: 'rgba(15, 23, 42, 0.4)' }}>
                            Select Service Interested In
                          </option>
                          <option value="SEO & Search Growth" style={{ background: 'white', color: '#0f172a' }}>
                            SEO & Search Growth
                          </option>
                          <option value="Website Development" style={{ background: 'white', color: '#0f172a' }}>
                            Website Development
                          </option>
                          <option value="Performance Marketing" style={{ background: 'white', color: '#0f172a' }}>
                            Performance Marketing
                          </option>
                          <option value="Branding & Positioning" style={{ background: 'white', color: '#0f172a' }}>
                            Branding & Positioning
                          </option>
                          <option value="Growth Consulting" style={{ background: 'white', color: '#0f172a' }}>
                            Growth Consulting
                          </option>
                          <option value="White-Label Execution" style={{ background: 'white', color: '#0f172a' }}>
                            White-Label Execution
                          </option>
                        </select>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          placeholder="Tell us about your project (optional)"
                          rows={3}
                          className="w-full px-4 py-3.5 rounded-xl transition-all duration-300 resize-none outline-none text-sm placeholder-slate-400 disabled:opacity-50 bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#47BF72] focus:bg-white"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl font-medium uppercase tracking-wide text-xs sm:text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        style={{
                          background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                          boxShadow: '0 8px 30px rgba(71, 191, 114, 0.2)'
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Get My Free Proposal'}
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <PartnerLogos />




      {/* Services Section (Recommended) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold text-green-600 uppercase tracking-[0.3em] font-inter mb-4 block">Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-wide">Our Core Growth Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              We provide execution-first digital services designed to work together, <span className="text-gray-900 font-medium">Not in silos.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "SEO & Search Growth",
                desc: "Technical, content, local, ecommerce, and global SEO focused on rankings that convert, Not vanity traffic.",
                punch: "Rankings that actually drive revenue.",
                path: "/seo-service"
              },
              {
                icon: Code,
                title: "Website Development",
                desc: "Fast, scalable, conversion-focused websites built with modern tech stacks and clean architecture.",
                punch: "Built for speed and high retention.",
                path: "/web-development-services"
              },
              {
                icon: BarChart3,
                title: "Performance Marketing",
                desc: "Google & Meta ads built around funnels, tracking, and ROI, Not just clicks and impressions.",
                punch: "Max ROI through data-driven ad spend.",
                path: "/performance-marketing"
              },
              {
                icon: ShieldCheck,
                title: "White Label SEO",
                desc: "Deliver top-tier organic search rankings under your own agency brand. We handle technical execution anonymously.",
                punch: "Rankings that build your agency authority.",
                path: "/white-label-seo"
              },
              {
                icon: Globe,
                title: "White Label Marketing",
                desc: "Scale your agency with complete white-label PPC, social, and automation funnels running invisibly behind you.",
                punch: "Invisible marketing fulfillment.",
                path: "/white-label-digital-marketing"
              }
            ].map((service, i) => (
              <Link to={service.path} key={i} className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-500/20 transition-all duration-500 cursor-pointer overflow-hidden h-full"
                >
                  {/* Icon & Title */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:shadow-green-500/20 transition-all duration-500">
                      <service.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-light text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300 tracking-wide">{service.title}</h3>

                    {/* Static Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.desc}
                    </p>
                  </div>

                  {/* Decorative background element */}
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors duration-500"></div>
                </motion.div>
              </Link>
            ))}
          </div>


        </div>
      </section>


      {/* New Section */}
      <section
        className="py-24 relative bg-slate-900"
      >
        {/* Content */}
        <div className="container-max relative" style={{ zIndex: 20 }}>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-wide"
            >
              <span className="text-white drop-shadow-2xl font-light" style={{
                textShadow: '0 0 40px rgba(255, 255, 255, 0.2), 0 4px 20px rgba(0,0,0,0.5)'
              }}>
                Next-Gen Technology for{' '}
              </span>
              <span className="text-white drop-shadow-2xl font-fraunces italic font-light" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #47BF72 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))'
              }}>
                Your Brand
              </span>
            </motion.h2>

          </motion.div>
 
           {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-6 md:px-0 mt-4">
             {/* Card 1 */}
             <Link to="/list-your-business-on-chatgpt" className="block group">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.1 }}
                 viewport={{ once: true }}
                 className="relative rounded-2xl overflow-hidden h-[420px] cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
                 style={{
                   boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), 0 0 60px rgba(71, 191, 114, 0.3)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
                 }}
               >
                 <div
                   className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                   style={{
                     backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop)'
                   }}
                 ></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
                 <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-500/5 transition-all duration-500"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                   <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-green-400">
                     List Your Business on ChatGPT
                   </h3>
                   <p className="text-gray-200 text-sm leading-relaxed mb-6">
                     Be discoverable where people are searching next. We help list and integrate your business on ChatGPT and AI platforms, making your brand ready for the future of search.
                   </p>
                   <div
                     className="inline-flex items-center justify-center text-white px-5 py-2.5 rounded font-semibold text-xs transition-all duration-300"
                     style={{
                       background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                       boxShadow: '0 4px 15px rgba(71, 191, 114, 0.2)'
                     }}
                   >
                     Get Listed on ChatGPT
                   </div>
                 </div>
               </motion.div>
             </Link>
 
             {/* Card 2 */}
             <Link to="/gmb-optimization" className="block group">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
                 className="relative rounded-2xl overflow-hidden h-[420px] cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
                 style={{
                   boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), 0 0 60px rgba(71, 191, 114, 0.3)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
                 }}
               >
                 <div
                   className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                   style={{
                     backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop)'
                   }}
                 ></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
                 <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-500/5 transition-all duration-500"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                   <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-green-400">
                     GMB #1 Optimization
                   </h3>
                   <p className="text-gray-200 text-sm leading-relaxed mb-6">
                     Dominate local search with Google Business Profile optimization. From keywords to reviews, we make sure your business ranks #1 where it matters most — on Google Maps and local search.
                   </p>
                   <div
                     className="inline-flex items-center justify-center text-white px-5 py-2.5 rounded font-semibold text-xs transition-all duration-300"
                     style={{
                       background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                       boxShadow: '0 4px 15px rgba(71, 191, 114, 0.2)'
                     }}
                   >
                     Optimize My GMB
                   </div>
                 </div>
               </motion.div>
             </Link>

           </div>
        </div>
      </section>

      {/* Who We Are + Team strip section (replicated) */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl p-8 sm:p-10 pb-8 md:pb-48 shadow-2xl"
              style={{
                background: 'radial-gradient(120% 120% at 0% 0%, rgba(34,197,94,0.25) 0%, rgba(16,185,129,0.15) 30%, rgba(12,33,21,1) 100%)',
                backgroundColor: 'rgb(12,33,21)',
                border: '1px solid rgba(71, 191, 114, 0.2)'
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-wide text-center lg:text-left"
              >
                Who We Are
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-200 max-w-xl mb-8 text-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0"
              >
                We've done all the heavy lifting so you don't have to.get all the data you need
                to launch and grow your business faster.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <Link
                  to="/about"
                  className="group relative inline-flex items-center justify-center text-white px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 overflow-hidden"
                  style={{
                    backgroundColor: '#47BF72',
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 4px 20px rgba(71, 191, 114, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(71, 191, 114, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(71, 191, 114, 0.4)';
                  }}
                >
                  <span className="relative z-10">LEARN MORE</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                </Link>
              </motion.div>
              {/* Stats pinned to bottom */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-8 mt-8 md:mt-0 md:absolute md:left-8 md:right-8 md:bottom-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-light text-white" style={{ textShadow: '0 0 20px rgba(71, 191, 114, 0.5)' }}>22,000+</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/80 mt-2">Projects Delivered</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-light text-white" style={{ textShadow: '0 0 20px rgba(71, 191, 114, 0.5)' }}>8,000+</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/80 mt-2">Clients Served</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-light text-white" style={{ textShadow: '0 0 20px rgba(71, 191, 114, 0.5)' }}>23+</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/80 mt-2">Countries Served</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right column: image + small team strip */}
            <div className="flex flex-col gap-6">
              <div className="rounded-lg overflow-hidden">
                <img src="/ba.png" alt="Team at work" className="w-full h-[260px] md:h-[340px] object-cover" />
              </div>
              <div className="relative rounded-lg bg-white p-8 overflow-hidden" style={{ background: '#f8fafc' }}>
                <div className="text-center mb-4">
                  <div className="text-lg font-light font-inter text-gray-800">We are Certified partners</div>
                  {/* <div className="text-sm text-gray-600">Our partners</div> */}
                </div>
                <div className="relative overflow-hidden h-28 flex items-center">
                  <Marquee pauseOnHover className="[--duration:18s] w-full">
                    {['/1.png', '/2.png', '/3.png', '/1.png', '/2.png', '/3.png'].map((src, i) => (
                      <div key={i} className="px-4">
                        <img src={src} alt={`logo-${i}`} className="h-32 w-28 object-contain" />
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK — Zig-Zag Flow */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#06130b' }}>
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-green-500/3 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container-max px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onViewportEnter={startSequence}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold text-green-500 uppercase tracking-[0.5em] font-inter mb-4 block">Execution Engine</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-wide">How We Build Growth</h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              We fix foundations, connect channels, then scale performance. <br />
              <span className="text-white font-medium italic">Most agencies guess; we engineer.</span>
            </p>
          </motion.div>


          {/* Desktop Zig-Zag Layout */}
          <div className="hidden lg:block max-w-6xl mx-auto relative">
            {/* Hidden SVG Defs */}
            <svg className="absolute w-0 h-0" aria-hidden="true">
              <defs>
                <linearGradient id="zzGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="zzGradRev" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0.6" />
                </linearGradient>
                <filter id="zzGlow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <marker id="zzArrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                  <path d="M 0 0 L 12 6 L 0 12 z" fill="#4ade80" />
                </marker>
              </defs>
            </svg>

            {[
              { step: "Audit", desc: "Performance review of database query latencies, API payloads, and response metrics.", icon: Search },
              { step: "Structure", desc: "Design robust React.js & Next.js architectures with database APIs configured for scale.", icon: Layers },
              { step: "Execute", desc: "Deploy the optimized stack on cloud infrastructure with zero downtime and QA alignment.", icon: Play },
              { step: "Optimize", desc: "Continuous page-speed optimization, database index tuning, and security audits.", icon: RefreshCw },
              { step: "Scale", desc: "Scale server resources and content authority to support rapid traffic and market growth.", icon: BarChart }
            ].map((item, i) => {
              const isLeft = i % 2 === 0;
              const isActive = activeStep === i;

              return (
                <React.Fragment key={i}>
                  {/* Step Card */}
                  <motion.div
                    className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                  >
                    <div
                      className="w-[52%] rounded-2xl p-1 cursor-pointer transition-all duration-500"
                      style={{
                        background: isActive 
                          ? 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(22,163,74,0.1), rgba(34,197,94,0.15))'
                          : 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                      }}
                      onClick={() => setActiveStep(i)}
                      onMouseEnter={() => setActiveStep(i)}
                    >
                      <div 
                        className="rounded-[14px] p-7 h-full transition-all duration-500"
                        style={{ 
                          backgroundColor: 'rgba(6, 19, 11, 0.92)',
                          backdropFilter: 'blur(12px)',
                          boxShadow: isActive 
                            ? '0 0 40px rgba(34,197,94,0.12), inset 0 1px 0 rgba(255,255,255,0.05)' 
                            : 'inset 0 1px 0 rgba(255,255,255,0.03)'
                        }}
                      >
                        <div className="flex items-start gap-6">
                          {/* Step Number + Icon */}
                          <div className="flex-shrink-0 relative">
                            {/* Icon container */}
                            <div 
                              className="relative w-16 h-16 rounded-xl flex items-center justify-center mt-2 transition-all duration-500"
                              style={{
                                background: isActive 
                                  ? 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(22,163,74,0.1) 100%)'
                                  : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                border: isActive 
                                  ? '1px solid rgba(74,222,128,0.3)' 
                                  : '1px solid rgba(255,255,255,0.06)',
                                boxShadow: isActive ? '0 0 25px rgba(34,197,94,0.15)' : 'none'
                              }}
                            >
                              <item.icon className={`w-7 h-7 transition-all duration-500 ${isActive ? 'text-green-400' : 'text-white/60'}`} />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 pt-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span 
                                className="text-[10px] font-bold uppercase tracking-[0.25em] transition-colors duration-500"
                                style={{ color: isActive ? '#4ade80' : '#a3a3a3' }}
                              >
                                Step 0{i + 1}
                              </span>
                              {isActive && (
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: 32 }}
                                  className="h-[1px] rounded-full"
                                  style={{ background: 'linear-gradient(90deg, #4ade80, transparent)' }}
                                />
                              )}
                            </div>
                            <h3 className="text-xl font-bold mb-2 transition-colors duration-500 text-white">
                              {item.step}
                            </h3>
                            <p className={`text-sm font-light leading-relaxed transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/70'}`}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Zig-Zag Connector Arrow */}
                  {i < 4 && (
                    <div className="relative h-24 my-2">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 96" preserveAspectRatio="xMidYMid meet">
                        {/* Glow trail behind the arrow */}
                        <motion.path
                          d={isLeft 
                            ? "M 300 8 C 480 8, 520 88, 700 88"
                            : "M 700 8 C 520 8, 480 88, 300 88"
                          }
                          fill="none"
                          stroke="rgba(34,197,94,0.08)"
                          strokeWidth="20"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: visiblePaths.includes(i) ? 1 : 0 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        {/* Main animated path */}
                        <motion.path
                          d={isLeft 
                            ? "M 300 8 C 480 8, 520 88, 700 88"
                            : "M 700 8 C 520 8, 480 88, 300 88"
                          }
                          fill="none"
                          stroke={isLeft ? "url(#zzGrad)" : "url(#zzGradRev)"}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          filter="url(#zzGlow)"
                          markerEnd="url(#zzArrow)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: visiblePaths.includes(i) ? 1 : 0 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        {/* Animated traveling dot */}
                        {visiblePaths.includes(i) && (
                          <circle r="4" fill="#4ade80" filter="url(#zzGlow)">
                            <animateMotion
                              dur="3s"
                              repeatCount="indefinite"
                              path={isLeft 
                                ? "M 300 8 C 480 8, 520 88, 700 88"
                                : "M 700 8 C 520 8, 480 88, 300 88"
                              }
                            />
                          </circle>
                        )}
                        {/* Faint dashed guide path */}
                        <path
                          d={isLeft 
                            ? "M 300 8 C 480 8, 520 88, 700 88"
                            : "M 700 8 C 520 8, 480 88, 300 88"
                          }
                          fill="none"
                          stroke="rgba(255,255,255,0.03)"
                          strokeWidth="1"
                          strokeDasharray="6,8"
                        />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile Layout (Vertical Timeline) */}
          <div className="lg:hidden max-w-lg mx-auto relative mt-12 px-4">
            <div className="absolute left-6 top-8 bottom-8 w-[1px] bg-white/5">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-green-500/50 to-transparent origin-top"
              />
            </div>
            
            <div className="space-y-12 relative">
              {[
                { step: "Audit", desc: "Performance review of database query latencies, API payloads, and response metrics.", icon: Search },
                { step: "Structure", desc: "Design robust React.js & Next.js architectures with database APIs configured for scale.", icon: Layers },
                { step: "Execute", desc: "Deploy the optimized stack on cloud infrastructure with zero downtime and QA alignment.", icon: Play },
                { step: "Optimize", desc: "Continuous page-speed optimization, database index tuning, and security audits.", icon: RefreshCw },
                { step: "Scale", desc: "Scale server resources and content authority to support rapid traffic and market growth.", icon: BarChart }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 z-10 relative"
                    style={{
                      background: 'linear-gradient(135deg, rgba(9,13,22,0.95) 0%, rgba(6,19,11,0.95) 100%)',
                      border: '1px solid rgba(74,222,128,0.15)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                    }}
                  >
                    <item.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <span className="text-green-500 text-[10px] font-bold uppercase tracking-wider block mb-1">Step 0{i + 1}</span>
                    <h3 className="text-lg font-bold text-white mb-2">{item.step}</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Testimonial Cards Section */}
      <TestimonialCards />

      {/* Credibility & Backing Section */}
      <CredibilityBacking />


      {/* Block 9: Outcome Focus */}
      <section className="py-24 bg-white overflow-hidden relative">
        {/* Background Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#47BF72_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="container-max px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4 block underline decoration-green-500/30 underline-offset-8 font-inter">Outcome Focus</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12 leading-tight tracking-wide">What Our Work Improves</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Rankings", icon: TrendingUp },
                  { title: "Lead flow", icon: Users },
                  { title: "Conversion rate", icon: Target },
                  { title: "Funnel performance", icon: Layers },
                  { title: "Cost per acquisition", icon: BarChart3 },
                  { title: "Digital asset value", icon: ShieldCheck }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-4 group p-6 rounded-2xl bg-gray-50 border border-transparent hover:border-green-500/10 hover:bg-white hover:shadow-xl transition-all duration-500"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-all duration-500 border border-gray-100">
                        <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 font-light text-lg leading-tight group-hover:text-gray-900 transition-colors duration-300 tracking-wide text-center">{item.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Progressive Blur Effect - Only after hero section */}

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default Home;
