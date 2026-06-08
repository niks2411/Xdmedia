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


const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

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
            phone: formData.phone,
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
      <section className="relative overflow-hidden min-h-screen w-full flex items-start pt-20 px-4 sm:px-6 lg:px-8" style={{
        backgroundImage: 'url(/bg1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left mt-8 ml-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight mb-6 sm:mb-8 tracking-tight"
              >
                <span className="text-white drop-shadow-2xl font-inter font-semibold block mb-2 whitespace-nowrap" style={{
                  textShadow: '0 0 40px rgba(71, 191, 114, 0.3), 0 4px 20px rgba(0,0,0,0.5)'
                }}>
                  Fancy Marketing Is Easy
                </span>
                <span className="text-white drop-shadow-2xl font-fraunces italic font-light block whitespace-nowrap" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #47BF72 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))'
                }}>
                  Working Marketing Is
                </span>
                <span className="text-white drop-shadow-2xl font-fraunces italic font-light block whitespace-nowrap" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #47BF72 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))'
                }}>
                  Rare.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-base sm:text-lg text-white/95 mb-8 sm:mb-10 leading-relaxed font-inter font-light max-w-xl"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
              >
                Full-stack marketing, technology, and performance execution for scaling brands.
              </motion.p>
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
              className="w-full lg:ml-auto max-w-lg relative z-20 mt-8 lg:mt-0"
            >
              <div className="rounded-3xl p-6 sm:p-8 backdrop-blur-xl border relative shadow-2xl overflow-hidden" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              }}>
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
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-2">Request Received!</h3>
                    <p className="text-gray-400 font-light text-sm">
                      Thank you. Our experts will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-light text-white mb-2 leading-tight font-inter">
                      Request a Free Proposal
                    </h3>
                    <p className="text-gray-400 font-light text-xs sm:text-sm mb-6">
                      Fill out the form below to kickstart your project.
                    </p>

                    {error && (
                      <div className="mb-4 p-3 rounded-lg flex items-center gap-3" style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)'
                      }}>
                        <AlertCircle className="w-4 h-4 text-red-400" />
                        <p className="text-xs text-red-400">{error}</p>
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
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none text-sm placeholder-white/40 disabled:opacity-50"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white'
                          }}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          placeholder="Email Address"
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none text-sm placeholder-white/40 disabled:opacity-50"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white'
                          }}
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          placeholder="Phone Number"
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none text-sm placeholder-white/40 disabled:opacity-50"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white'
                          }}
                        />
                      </div>

                      <div>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none text-sm disabled:opacity-50 appearance-none cursor-pointer"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: formData.service ? 'white' : 'rgba(255, 255, 255, 0.4)'
                          }}
                        >
                          <option value="" disabled style={{ background: '#0f172a', color: 'rgba(255, 255, 255, 0.4)' }}>
                            Select Service Interested In
                          </option>
                          <option value="SEO & Search Growth" style={{ background: '#0f172a', color: 'white' }}>
                            SEO & Search Growth
                          </option>
                          <option value="Website Development" style={{ background: '#0f172a', color: 'white' }}>
                            Website Development
                          </option>
                          <option value="Performance Marketing" style={{ background: '#0f172a', color: 'white' }}>
                            Performance Marketing
                          </option>
                          <option value="Branding & Positioning" style={{ background: '#0f172a', color: 'white' }}>
                            Branding & Positioning
                          </option>
                          <option value="Growth Consulting" style={{ background: '#0f172a', color: 'white' }}>
                            Growth Consulting
                          </option>
                          <option value="White-Label Execution" style={{ background: '#0f172a', color: 'white' }}>
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
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 resize-none outline-none text-sm placeholder-white/40 disabled:opacity-50"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white'
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl font-medium uppercase tracking-wide text-xs sm:text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
                punch: "Rankings that actually drive revenue."
              },
              {
                icon: Code,
                title: "Website Development",
                desc: "Fast, scalable, conversion-focused websites built with modern tech stacks and clean architecture.",
                punch: "Built for speed and high retention."
              },
              {
                icon: BarChart3,
                title: "Performance Marketing",
                desc: "Google & Meta ads built around funnels, tracking, and ROI, Not just clicks and impressions.",
                punch: "Max ROI through data-driven ad spend."
              },
              {
                icon: Users,
                title: "Branding & Positioning",
                desc: "Clear brand messaging, authority positioning, and market differentiation that supports growth.",
                punch: "Differentiation that dominates markets."
              },
              {
                icon: Settings,
                title: "Growth Consulting",
                desc: "Strategy + execution roadmaps for founders and businesses ready to scale digitally.",
                punch: "Blueprints for 10x scalability."
              },
              {
                icon: Globe,
                title: "White-Label Execution",
                desc: "Backend delivery partner for agencies needing reliable SEO, web, and performance execution.",
                punch: "Your scalable backend army."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-500/20 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Icon & Title */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:shadow-green-500/20 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300 tracking-wide">{service.title}</h3>

                  {/* Static Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 transition-opacity duration-300 group-hover:opacity-0">
                    {service.desc}
                  </p>

                  {/* Hover Reveal Punchline */}
                  <div className="absolute top-[104px] left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-green-600 font-bold text-lg leading-tight uppercase tracking-tight">
                      {service.punch}
                    </p>
                  </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors duration-500"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gray-900 font-bold uppercase tracking-widest text-sm hover:text-green-600 transition-colors group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Block: What We Actually Do - Premium Redesign - MOVED AFTER SERVICES */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#06130b' }}>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container-max px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-[0.5em] font-inter">Manifesto</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
                What We <span className="font-fraunces italic text-green-500">Actually Do</span>
              </h2>
            </motion.div>

            {/* Manifesto Board */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 md:p-16 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden"
            >
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-green-500/30 rounded-tl-[2rem]"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-green-500/30 rounded-br-[2rem]"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div className="space-y-6">
                  <div className="text-sm font-bold text-green-500/50 uppercase tracking-widest font-inter">The Mission</div>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight font-light tracking-tight">
                    We help brands grow through <span className="text-green-500 font-medium underline decoration-green-500/20 underline-offset-8">structured digital execution</span>
                  </p>
                  <p className="text-xl text-white/40 font-light italic">
                    Not random marketing activities.
                  </p>
                </div>

                <div className="lg:pl-12 lg:border-l border-white/5 space-y-6">
                  <div className="text-sm font-bold text-green-500/50 uppercase tracking-widest font-inter">The Systems</div>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                    From websites and SEO to performance marketing and brand positioning, we build <span className="text-gray-200">connected growth systems</span> that generate visibility, leads, and revenue.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Verdict Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4"
          >
            <div className="text-xl md:text-2xl text-white/40 font-inter tracking-[0.1em] uppercase">
              Not just strategy. Not just services.
            </div>
            <div className="h-px w-12 bg-white/10 hidden md:block"></div>
            <div className="text-3xl md:text-5xl font-fraunces italic font-light text-green-500 tracking-tighter">
              Execution.
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Section */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: 'rgb(68,16,151)' }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/glass.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 10
          }}
        ></div>

        {/* Vertical Stripes Overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `
              linear-gradient(90deg, 
                rgba(68,16,151,0.8) 0%, 
                rgba(68,16,151,0.6) 8%, 
                rgba(68,16,151,0.8) 16%, 
                rgba(68,16,151,0.5) 24%, 
                rgba(68,16,151,0.7) 32%, 
                rgba(68,16,151,0.6) 40%, 
                rgba(68,16,151,0.8) 48%, 
                rgba(68,16,151,0.5) 56%, 
                rgba(68,16,151,0.7) 64%, 
                rgba(68,16,151,0.6) 72%, 
                rgba(68,16,151,0.8) 80%, 
                rgba(68,16,151,0.5) 88%, 
                rgba(68,16,151,0.8) 100%
              )
            `,
            zIndex: 15
          }}
        ></div>

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/services"
                className="group relative inline-flex items-center justify-center text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #47BF72 0%, #3aa85f 100%)',
                  boxShadow: '0 4px 20px rgba(71, 191, 114, 0.4), 0 0 40px rgba(71, 191, 114, 0.2)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(71, 191, 114, 0.6), 0 0 60px rgba(71, 191, 114, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(71, 191, 114, 0.4), 0 0 40px rgba(71, 191, 114, 0.2)';
                }}
              >
                <span className="relative z-10">Get Listed on ChatGPT</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-0 mt-4">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden h-96 group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
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
                <p className="text-gray-200 text-sm leading-relaxed">
                  Be discoverable where people are searching next. We help list and integrate your business on ChatGPT and AI platforms, making your brand ready for the future of search.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden h-96 group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
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
                <p className="text-gray-200 text-sm leading-relaxed">
                  Dominate local search with Google Business Profile optimization. From keywords to reviews, we make sure your business ranks #1 where it matters most — on Google Maps and local search.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden h-96 group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
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
                  backgroundImage: 'url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-500/5 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-green-400">
                  AI & Automation Tools
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Work smarter, not harder. We set up custom AI and automation solutions to streamline workflows, generate leads, and enhance customer engagement 24/7.
                </p>
              </div>
            </motion.div>
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
                className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-wide"
              >
                Who We Are
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-200 max-w-xl mb-8 text-lg leading-relaxed"
              >
                We've done all the heavy lifting so you don't have to — get all the data you need
                to launch and grow your business faster.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-light text-white" style={{ textShadow: '0 0 20px rgba(71, 191, 114, 0.5)' }}>9+</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/80 mt-2">Average Client NPS</div>
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




      {/* HOW WE WORK (Refinement) */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#06130b' }}>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container-max px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold text-green-500 uppercase tracking-[0.5em] font-inter mb-4 block">Execution Engine</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-wide">How We Build Growth</h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              We fix foundations, connect channels, then scale performance. <br />
              <span className="text-white font-medium italic">Most agencies guess; we engineer.</span>
            </p>
          </motion.div>

          <div className="relative mt-20">
            {/* Animated Connection Line - Moved to align with icons */}
            <div className="absolute top-[3.75rem] left-0 w-full h-[1px] bg-white/5 hidden lg:block">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "Audit", desc: "Performance Review", icon: Search },
                { step: "Structure", desc: "Funnel Base", icon: Layers },
                { step: "Execute", desc: "Live Deployment", icon: Play },
                { step: "Optimize", desc: "Data Refinement", icon: RefreshCw },
                { step: "Scale", desc: "Market Growth", icon: BarChart }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative group pt-4"
                >
                  <div className="p-8 rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-md h-full group-hover:border-green-500/20 group-hover:from-white/[0.06] transition-all duration-500 flex flex-col items-center text-center">

                    {/* Icon Container - Sits on the line */}
                    <div className="w-20 h-20 rounded-[1.5rem] bg-gray-900 border border-white/10 flex items-center justify-center mb-10 relative z-20 group-hover:border-green-500/50 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-black/50">
                      <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 rounded-[1.5rem] transition-opacity duration-500"></div>
                      <item.icon className="w-8 h-8 text-green-500 group-hover:text-white transition-colors relative z-10" />
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-green-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-50">Step 0{i + 1}</span>
                      <h3 className="text-2xl font-inter font-light text-white tracking-widest mb-3 group-hover:text-green-400 transition-colors uppercase">{item.step}</h3>
                      <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors max-w-[140px]">{item.desc}</p>
                    </div>

                    <div className="mt-8 h-1 w-0 group-hover:w-12 bg-green-500 rounded-full transition-all duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-wrap justify-center gap-x-16 gap-y-8 text-center"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-green-500/20"></div>
              <p className="text-gray-400 font-light tracking-widest uppercase text-[10px]">Clear. Efficient.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-green-500/20"></div>
              <p className="text-gray-400 font-light tracking-widest uppercase text-[10px]">Measurable. Scalable.</p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Testimonial Cards Section */}
      <TestimonialCards />


      {/* BLOCK 8 — WHO WE WORK WITH (Bento Redesign) */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#06110a' }}>
        {/* Decorative background aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container-max px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold text-green-500 uppercase tracking-[0.5em] font-inter mb-4 block underline decoration-green-500/30 underline-offset-8">Ideal Partners</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-wide">Built For Performance</h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              We specialize in engineering growth engines for companies where <span className="text-white font-medium italic">execution is the mission critical variable.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* 1. Growing Brands - Wide Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-green-500/30 transition-all duration-700 h-[320px] flex flex-col justify-end"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp className="w-48 h-48 text-green-500 -rotate-12" />
              </div>
              <div className="relative z-10">
                <span className="text-green-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">01 / Enterprise</span>
                <h3 className="text-3xl md:text-4xl font-inter font-light text-white tracking-wide mb-4">Growing Brands</h3>
                <p className="text-gray-400 font-light text-lg max-w-md">Established companies looking to break their next revenue ceiling with data-backed execution.</p>
              </div>
            </motion.div>

            {/* 2. Ecommerce - Tall Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 p-10 rounded-[2.5rem] bg-green-500 relative overflow-hidden group shadow-2xl shadow-green-500/20 h-[320px] md:h-auto flex flex-col justify-between"
            >
              <ShoppingBag className="w-16 h-16 text-white mb-8 group-hover:scale-110 transition-transform duration-500" />
              <div>
                <span className="text-black/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">02 / Retail</span>
                <h3 className="text-3xl font-inter font-light text-white tracking-wide mb-4">Ecommerce</h3>
                <p className="text-white/80 font-light">Scaling acquisition and LTV for high-volume DTC stores.</p>
              </div>
            </motion.div>

            {/* 3. Tech Startups - Square */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-green-500/30 transition-all duration-700 h-[300px] flex flex-col justify-end"
            >
              <Rocket className="w-12 h-12 text-green-500 mb-6 group-hover:-translate-y-2 transition-transform" />
              <h3 className="text-2xl font-inter font-light text-white mb-2">Tech Startups</h3>
              <p className="text-gray-400 font-light text-sm">Rapid testing and market entry for venture-backed firms.</p>
            </motion.div>

            {/* 4. Agencies - Wide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-4 p-10 rounded-[2.5rem] bg-gray-900 border border-white/5 relative overflow-hidden group hover:border-green-500/30 transition-all duration-700 h-[300px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <Briefcase className="w-12 h-12 text-gray-400 group-hover:text-green-500 transition-colors" />
                <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
              <div className="max-w-md">
                <h3 className="text-2xl md:text-3xl font-inter font-light text-white mb-3">Agencies</h3>
                <p className="text-gray-400 font-light">Silent execution power for white-label performance partners.</p>
              </div>
            </motion.div>

            {/* 5. Service Companies - Middle Square */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-3 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-green-500/30 transition-all duration-700 h-[280px] flex flex-col items-center text-center justify-center"
            >
              <Building2 className="w-16 h-16 text-green-500/50 mb-6 group-hover:scale-125 transition-transform" />
              <h3 className="text-2xl font-inter font-light text-white mb-2">Service Companies</h3>
              <p className="text-gray-500 font-light text-sm">Lead-gen systems that convert prospects into high-value clients predictably.</p>
            </motion.div>

            {/* 6. Founders - Middle Square */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-3 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-green-500/30 transition-all duration-700 h-[280px] flex flex-col items-center text-center justify-center"
            >
              <User className="w-16 h-16 text-green-500/50 mb-6 group-hover:scale-125 transition-transform" />
              <h3 className="text-2xl font-inter font-light text-white mb-2">Digital Founders</h3>
              <p className="text-gray-500 font-light text-sm">One-man engines or small teams scaling their digital legacy.</p>
            </motion.div>
          </div>
        </div>
      </section>


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
                  "Rankings",
                  "Lead flow",
                  "Conversion rate",
                  "Funnel performance",
                  "Cost per acquisition",
                  "Digital asset value"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4 group p-6 rounded-2xl bg-gray-50 border border-transparent hover:border-green-500/10 hover:bg-white hover:shadow-xl transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-all duration-500 border border-gray-100">
                      <TrendingUp className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 font-light text-lg leading-tight group-hover:text-gray-900 transition-colors duration-300 tracking-wide text-center">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* BLOCK 7 — SMART EDGE STRIP (Brand Voice) */}
      <section className="bg-black py-24 overflow-hidden relative border-y border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#47BF72_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        <div className="container-max relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full px-4 overflow-visible">
              {/* Left Side: Fancy strategies are everywhere. */}
              <div className="text-lg md:text-xl lg:text-2xl font-inter italic font-light text-gray-500 whitespace-nowrap px-2 overflow-visible">
                Fancy strategies are <span className="text-gray-400 ml-1">everywhere.</span>
              </div>

              {/* Center: Green Divider */}
              <div className="hidden lg:block w-12 h-1 bg-green-500 rounded-full flex-shrink-0"></div>

              {/* Right Side: WORKING EXECUTION IS RARE. */}
              <div className="text-xl md:text-2xl lg:text-3xl font-inter font-bold text-white uppercase tracking-tight whitespace-nowrap px-2 overflow-visible">
                WORKING EXECUTION IS <span className="text-green-500 ml-2 inline-block">RARE.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>




      {/* New Section with sukhi.png background */}
      <section
        className="py-40 flex items-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(/sukhi.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight mb-6 sm:mb-8 tracking-tight"
              >
                <span className="text-white drop-shadow-2xl font-light block mb-2" style={{
                  textShadow: '0 0 40px rgba(71, 191, 114, 0.3), 0 4px 20px rgba(0,0,0,0.5)'
                }}>
                  Let’s Build Your
                </span>
                <span className="text-white drop-shadow-2xl font-fraunces italic font-light block" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #47BF72 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))'
                }}>
                  Growth Engine
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-xl"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                If you want marketing that actually gets implemented — we should talk.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8 flex-wrap lg:flex-nowrap"
              >
                {/* Primary Button - Matches Navbar style */}
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="text-white px-8 py-4 font-medium uppercase tracking-wide text-sm transition-all duration-300 shadow-lg whitespace-nowrap text-center"
                  style={{
                    backgroundColor: '#47BF72',
                    borderRadius: '5px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3aa85f';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#47BF72';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Book Strategy Call
                </button>

                {/* Secondary Button - Ghost style */}
                <Link
                  to="/contact"
                  className="text-white px-8 py-4 font-medium uppercase tracking-wide text-sm transition-all duration-300 border border-[#47BF72] hover:bg-[#47BF72]/10 rounded-[5px] whitespace-nowrap text-center"
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Get Proposal
                </Link>

                {/* Tertiary Button - Sleek Underline */}
                <Link
                  to="/contact"
                  className="group relative text-white/80 hover:text-white px-4 py-4 font-medium uppercase tracking-wide text-sm transition-all duration-300 whitespace-nowrap text-center"
                >
                  <span className="relative z-10">Request Audit</span>
                  <div className="absolute bottom-4 left-4 right-4 h-0.5 bg-[#47BF72]/50 group-hover:bg-[#47BF72] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Empty for now, can add visual elements later */}
            <div className="hidden lg:block">
              {/* Space for future visual elements */}
            </div>
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
