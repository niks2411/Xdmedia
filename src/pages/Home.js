import React from 'react';
import Canonical from '../components/SEO/Canonical';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';
import PartnerLogos from '../components/PartnerLogos';
import { FocusCardsDemo } from '../components/FocusCardsDemo';


import { Marquee } from '../components/magicui/marquee';
import TestimonialCards from '../components/TestimonialCards';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessWorkflow from '../components/ProcessWorkflow';
import CredibilityBacking from '../components/CredibilityBacking';


const Home = () => {


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
                <span className="text-white drop-shadow-2xl font-inter font-semibold block mb-2" style={{
                  textShadow: '0 0 40px rgba(71, 191, 114, 0.3), 0 4px 20px rgba(0,0,0,0.5)'
                }}>
                  Creating Buzz.
                </span>
                <span className="text-white drop-shadow-2xl font-fraunces italic font-light block" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #47BF72 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))'
                }}>
                  Building Brands.
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
                Full-stack marketing, branding & technology agency. From powerful websites and performance marketing to creative media that inspires, we deliver end-to-end solutions that drive measurable growth.
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
                  GET STARTED
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side Background Image */}
            <div className="block relative mt-8 lg:mt-0">
              <img
                src="/bgright.png"
                alt="Background Right"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <PartnerLogos />

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #47BF72 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="text-sm font-semibold text-green-500 uppercase tracking-widest mb-4 block px-4 py-2 rounded-full inline-block" style={{
                background: 'linear-gradient(135deg, rgba(71, 191, 114, 0.1) 0%, rgba(71, 191, 114, 0.05) 100%)',
                border: '1px solid rgba(71, 191, 114, 0.2)'
              }}>
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight mb-6 sm:mb-8 tracking-tight">
                <span className="text-gray-900 font-inter font-semibold">
                  Our Core{' '}
                </span>
                <span className="text-gray-900 font-fraunces italic font-light" style={{
                  background: 'linear-gradient(135deg, #1f2937 0%, #47BF72 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Expertise
                </span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-inter font-light"
            >
              Comprehensive solutions designed to elevate your digital presence and drive measurable results
            </motion.p>
          </motion.div>
          <FocusCardsDemo />
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight mb-8 sm:mb-10 tracking-tight"
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


      {/* Testimonial Cards Section */}
      <TestimonialCards />

      {/* Process Workflow Section */}
      <ProcessWorkflow />

      {/* Credibility & Backing Section */}
      <CredibilityBacking />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

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
                  Your 360°
                </span>
                <span className="text-white drop-shadow-2xl font-fraunces italic font-light block" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #47BF72 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))'
                }}>
                  Marketing Partner
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
                From technology and creative media to performance-driven marketing, we deliver complete 360° solutions that build, scale, and sustain your brand in the digital era.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #47BF72 0%, #3aa85f 100%)',
                    boxShadow: '0 4px 20px rgba(71, 191, 114, 0.5), 0 0 40px rgba(71, 191, 114, 0.3)',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(71, 191, 114, 0.7), 0 0 60px rgba(71, 191, 114, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(71, 191, 114, 0.5), 0 0 40px rgba(71, 191, 114, 0.3)';
                  }}
                >
                  <span className="relative z-10">GET STARTED</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
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

    </div>
  );
};

export default Home;
