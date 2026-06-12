import React from 'react';
import Canonical from '../components/SEO/Canonical';
import { motion } from 'framer-motion';
import { TimelineDemo } from '../components/TimelineDemo';
import { MarqueeDemo } from '../components/MarqueeDemo';

const AboutUs = () => {
  const stats = [
    { value: "112.5B+", label: "YouTube Views Delivered" },
    { value: "₹35+ Cr", label: "Group Annual Revenue" },
    { value: "1M+", label: "Combined Subscribers" },
    { value: "100+", label: "Brand Partnerships" }
  ];


  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Canonical path="/about-us" />
      {/* Hero Section - Dark Green Theme matching homepage */}
      <section
        className="py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgb(12,33,21) 0%, rgb(20,50,35) 100%)'
        }}
      >
        {/* Subtle animated background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-8"
              style={{
                background: 'rgba(71, 191, 114, 0.2)',
                border: '1px solid rgba(71, 191, 114, 0.4)',
                color: '#47BF72'
              }}
            >
              About XD MEDIA
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-8 tracking-tight">
              <span className="text-white font-inter font-normal block mb-2">
                Creating Buzz.
              </span>
              <span className="text-white font-fraunces italic font-light">
                Building Brands.
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed font-inter font-light max-w-3xl mx-auto">
              A full-stack marketing, branding & technology agency backed by proven industry leaders.
              We deliver end-to-end solutions that drive real, measurable growth.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Mission & Vision - Dark gradient like homepage */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
        }}
      >
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-inter">
              Our Purpose
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ background: '#47BF72' }}></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-3xl p-10 h-full transition-all duration-300 hover:shadow-2xl backdrop-blur-xl border"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#47BF72' }}>
                    Mission
                  </h3>
                  <div className="w-12 h-1" style={{ background: '#47BF72' }}></div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To help brands grow <span className="font-semibold text-white">smarter, faster, and stronger</span> through innovation, creativity, and technology. We believe in delivering measurable results that transform businesses.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-3xl p-10 h-full transition-all duration-300 hover:shadow-2xl backdrop-blur-xl border"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#47BF72' }}>
                    Vision
                  </h3>
                  <div className="w-12 h-1" style={{ background: '#47BF72' }}></div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To become the <span className="font-semibold text-white">most trusted marketing & tech partner worldwide</span>, where creativity meets performance and innovation drives success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are - Premium Card with dark theme */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl p-12 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgb(12,33,21) 0%, rgb(20,50,35) 100%)'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-6 font-inter">
                    Who We Are
                  </h3>
                  <p className="text-xl text-gray-200 leading-relaxed mb-8 font-light">
                    Backed by established ventures with ₹35+ crore annual revenue, 112.5+ billion YouTube views delivered, and 1M+ combined subscribers. This is the powerhouse behind XD MEDIA.
                  </p>
                  <button
                    className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                    style={{
                      background: '#47BF72',
                      boxShadow: '0 10px 30px rgba(71, 191, 114, 0.3)'
                    }}
                  >
                    Learn More About Us
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-300 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co-Founder Section - Premium Showcase */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, rgb(12,33,21) 50%, #0a0a0a 100%)'
        }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(71, 191, 114, 0.1)' }}></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(71, 191, 114, 0.08)' }}></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6"
              style={{
                background: 'rgba(71, 191, 114, 0.2)',
                border: '1px solid rgba(71, 191, 114, 0.4)',
                color: '#47BF72'
              }}
            >
              Leadership
            </span>
            <h2 className="text-4xl sm:text-5xl text-white mb-4 font-light">
              Meet the Founder
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ background: '#47BF72' }}></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Card Container */}
              <div
                className="relative overflow-hidden rounded-3xl backdrop-blur-xl border"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                      className="relative h-[500px] lg:h-full min-h-[400px]"
                    >
                      <img
                        src="/images/cofounder.jpeg"
                        alt="Co-Founder of XD MEDIA"
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: 'center top'
                        }}
                      />
                      {/* Gradient overlay for text readability on mobile */}
                      <div
                        className="absolute inset-0 lg:hidden"
                        style={{
                          background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)'
                        }}
                      ></div>
                      {/* Side gradient for desktop */}
                      <div
                        className="absolute inset-0 hidden lg:block"
                        style={{
                          background: 'linear-gradient(to right, transparent 0%, transparent 60%, rgba(10,10,10,0.95) 100%)'
                        }}
                      ></div>
                    </motion.div>

                    {/* Decorative accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 lg:hidden"
                      style={{ background: 'linear-gradient(90deg, #47BF72 0%, transparent 100%)' }}
                    ></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-10 lg:p-12 flex flex-col justify-center relative">
                    {/* Decorative quote mark */}
                    <div
                      className="absolute top-6 right-8 text-9xl font-serif opacity-5 select-none"
                      style={{ color: '#47BF72' }}
                    >
                      "
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="w-16 h-1 mb-8"
                        style={{ background: '#47BF72' }}
                      ></div>

                      <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 font-light italic">
                        "I build brands people remember. Not the 'we also do digital marketing' kind."
                      </p>

                      <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        We help brands stop blending in and start <span className="text-white font-medium">standing out</span>. At XD MEDIA, strategy meets creativity and marketing finally makes sense.
                      </p>

                      <div className="flex items-center gap-4 mb-8">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ background: 'rgba(71, 191, 114, 0.2)' }}
                        >
                          <svg className="w-6 h-6" style={{ color: '#47BF72' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-lg">Founder</div>
                          <div className="text-gray-400 text-sm">XD MEDIA</div>
                        </div>
                      </div>

                      {/* Quick highlights */}
                      <div className="grid grid-cols-2 gap-4 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                        <div>
                          <div className="text-2xl font-bold" style={{ color: '#47BF72' }}>100+</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">Brands Transformed</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold" style={{ color: '#47BF72' }}>5+ Years</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">Industry Experience</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                style={{
                  background: 'linear-gradient(135deg, #47BF72 0%, #3aa85f 100%)',
                  opacity: 0.3
                }}
              ></div>
              <div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-xl -z-10"
                style={{
                  background: 'linear-gradient(135deg, #47BF72 0%, #3aa85f 100%)',
                  opacity: 0.2
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline - Dark gradient */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
        }}
      >
        <TimelineDemo />
      </section>

      {/* Testimonials - Dark background */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="container-max">
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
    </div>
  );
};

export default AboutUs;
