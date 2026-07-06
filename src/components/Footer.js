import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import BookingModal from './BookingModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about-us' },
    { name: 'SEO Services', path: '/affordable-seo-services-in-india' },

    { name: 'Website Design & Development', path: '/website-design' },
    { name: 'Performance Marketing', path: '/performance-marketing' },
    { name: 'Contact Us', path: '/contact' }
  ];


  return (
    <>
      {/* CTA Banner — Let's Build Your Growth Engine */}
      <section
        className="py-28 md:py-40 flex items-center relative overflow-hidden"
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
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6 sm:mb-8 tracking-tight w-full">
                <span className="text-white drop-shadow-2xl block mb-2" style={{
                  textShadow: '0 0 40px rgba(71, 191, 114, 0.3), 0 4px 20px rgba(0,0,0,0.5)'
                }}>
                  Let's Build Your
                </span>
                <span className="text-white drop-shadow-2xl italic block" style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  background: 'linear-gradient(135deg, #ffffff 0%, #47BF72 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))'
                }}>
                  Growth Engine
                </span>
              </h2>
              <p
                className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                If you want marketing that actually gets implemented, we should talk.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8 flex-wrap lg:flex-nowrap w-full lg:w-auto">
                {/* Primary Button */}
                <button
                  onClick={() => setIsBookingOpen(true)}
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

              </div>
            </div>

            {/* Right Side - Empty for background image to show */}
            <div className="hidden lg:block">
              {/* Space intentionally left for the background image visual */}
            </div>
          </div>
        </div>
      </section>

      <footer
        className="text-white relative"
        style={{
          width: '100%',
          backgroundImage: 'url(/bg1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Logo Column - Left Side */}
            <div className="lg:w-1/3 flex justify-center lg:justify-start w-full relative z-20 mt-2 lg:mt-4 lg:pl-8">
              <img
                src="/logo2.png"
                alt="360 Logo"
                className="w-full max-w-[290px] md:max-w-[350px] lg:max-w-[390px] object-contain"
              />
            </div>

            {/* Content Columns - Right Side */}
            <div className="lg:w-2/3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Company Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Our Company</h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    Comprehensive digital solutions for SEO, marketing, and analytics.
                    We Build Brands with Tech, Media & Marketing.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">connect@xdmedia.in</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+91 7901724043</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">SCO-40, HLP Galleria, SAS Nagar Mohali, 160062, Chandigarh</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                  <ul className="space-y-2">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="text-gray-300 hover:text-white transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-dark-700 mt-2 pt-2 w-full" style={{ width: '100%' }}>
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <p className="text-gray-400 text-sm">
                © {currentYear} XD MEDIA. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Footer;
