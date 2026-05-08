import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  BarChart3,
  Mail,
  Users,
  Settings,
  ChevronDown,
  Menu,
  X,
  Code,
  Monitor,
  Cpu,
  Smartphone,
  Globe,
  Calendar,
  Target
} from 'lucide-react';
import BookingModal from './BookingModal';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: null,
      preview: null,
      description: null
    },
    {
      name: 'Our Story',
      path: '/about-us',
      icon: null,
      preview: null,
      description: null
    },
    {
      name: 'Services',
      path: '/services',
      icon: null,
      preview: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      description: 'Comprehensive digital solutions',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'SEO & Organic Growth Tools',
          path: '/seo-tools',
          icon: Cpu,
          description: 'Technical SEO, Keyword Research, Ecommerce & SaaS SEO, Authority Building',
          image: '/images/seo.webp',
          features: ['Technical SEO & Site Architecture', 'Ecommerce & SaaS SEO', 'Authority & Backlink Building'],
          price: 'Core Expertise ⭐'
        },
        {
          name: 'Website Design & Development',
          path: '/website-design',
          icon: Mail,
          description: 'React.js, Next.js, WordPress, Shopify, WooCommerce, Speed Optimization',
          image: '/images/web.webp?v=1',
          features: ['Custom UI/UX & Development', 'Ecommerce Solutions', 'Speed & CRO Optimization'],
          price: 'Core Expertise ⭐'
        },
        {
          name: 'Performance Marketing',
          path: '/performance-marketing',
          icon: BarChart3,
          description: 'Google Ads, Meta Ads, Social Media Marketing, Funnel Optimization',
          image: '/images/market.webp?v=1',
          features: ['Google & Meta Ads', 'Social Media Marketing', 'Funnel & Retargeting'],
          price: 'Brand Growth'
        },
        {
          name: 'White Label SEO',
          path: '/white-label-seo',
          icon: Search,
          description: 'Agency-grade SEO fulfillment under your own brand.',
          image: '/images/stitch/white-label-seo-hero.png',
          features: ['Technical SEO fulfillment', 'Branded Reporting', 'Authority Building'],
          price: 'Partner Plan'
        },
        {
          name: 'White Label Marketing',
          path: '/white-label-digital-marketing',
          icon: Globe,
          description: 'Full-stack marketing solutions for agency partners.',
          image: '/images/stitch/white-label-marketing-hero.png',
          features: ['Google & Meta Ads', 'Social Media Strategy', '100% White Label'],
          price: 'Partner Plan'
        }
      ]
    },
    {
      name: 'Contact Us',
      path: '/contact',
      icon: null,
      preview: null,
      description: null
    }
  ];

  const isActive = (path) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.services-dropdown')) {
        setIsDropdownOpen(false);
        setActiveDropdown(null);
        setHoveredService(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Find the Services item
  const servicesItem = navigationItems.find(item => item.name === 'Services');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgb(12,33,20)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center group -ml-10 sm:-ml-12 lg:-ml-16">
              <img
                src="/logo.png"
                alt="360 Logo"
                className="h-48 w-48 sm:h-60 sm:w-60 lg:h-72 lg:w-72"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className={`relative ${item.name === 'Services' ? 'services-dropdown' : ''}`}
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      setIsDropdownOpen(true);
                      setActiveDropdown(item.name);
                    }
                  }}
                  onMouseLeave={() => {
                    // Don't close on mouse leave - keep it open until user clicks elsewhere
                  }}
                >
                  <Link
                    to={item.path}
                    className={`relative flex items-center space-x-2 px-4 py-3 transition-all duration-300 group ${isActive(item.path)
                      ? 'text-white font-light'
                      : 'text-white hover:text-green-200'
                      }`}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setIsDropdownOpen(!isDropdownOpen);
                        setActiveDropdown(item.name);
                      }
                    }}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="uppercase tracking-wide text-sm font-light">{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-3 h-3 text-white" />}

                    {/* Animated Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="flex items-center gap-2 text-white px-4 py-3 font-medium uppercase tracking-wide text-sm transition-colors duration-200 border border-green-500 hover:bg-green-500/20 rounded"
              >
                <Calendar className="w-4 h-4" />
                Book a Slot
              </button>
              <Link
                to="/contact"
                className="text-white px-6 py-3 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg"
                style={{
                  backgroundColor: '#47BF72',
                  borderRadius: '5px'

                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
              >
                GET STARTED
              </Link>
            </div>

            {/* Mobile Menu Button & Action */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="flex items-center gap-2 text-white px-3 py-2 text-[10px] font-medium uppercase tracking-wider border border-green-500 rounded hover:bg-green-500/10 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book
              </button>
              <button
                className="p-1.5 rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Dropdown */}
        <AnimatePresence>
          {isDropdownOpen && activeDropdown === 'Services' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 rounded-xl mt-3 w-[640px] z-50 services-dropdown shadow-xl border border-white/10"
              style={{ backgroundColor: '#0d3020' }}
              onMouseEnter={() => {
                setIsDropdownOpen(true);
                setActiveDropdown('Services');
              }}
              onMouseLeave={() => {
                // Don't close on mouse leave - keep it open until user clicks elsewhere
              }}
            >
              <div className="p-4">
                <div className="flex gap-4">
                  {/* Service Links - Left */}
                  <div className="flex-1">
                    {servicesItem?.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block p-3 hover:bg-[#193b2a] transition-colors duration-200 rounded-lg mb-2"
                        onMouseEnter={() => setHoveredService(dropdownItem)}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setHoveredService(null);
                        }}
                      >
                        <div className="flex items-start space-x-3">
                          {dropdownItem.icon && <dropdownItem.icon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />}
                          <div className="flex-1">
                            <h3 className="text-white font-medium text-sm mb-1 leading-tight">{dropdownItem.name}</h3>
                            <span className="inline-block text-xs font-medium text-green-400">{dropdownItem.price}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Image Preview - Right */}
                  <div className="w-72 flex-shrink-0">
                    {hoveredService ? (
                      <motion.div
                        key={hoveredService.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-800 rounded-lg overflow-hidden h-full"
                      >
                        <img
                          src={hoveredService.image}
                          alt={hoveredService.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ) : (
                      <div className="bg-gray-800 rounded-lg overflow-hidden h-full">
                        <img
                          src="/images/web.webp?v=1"
                          alt="Website Design & Development"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-green-700" style={{ backgroundColor: 'rgb(12,33,20)' }}
            >
              <div className="px-4 py-6 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive(item.path)
                        ? 'bg-green-600/20 text-green-400 font-semibold border border-green-600/30'
                        : 'text-gray-100 hover:bg-white/5 hover:text-white'
                        }`}
                      onClick={() => {
                        if (!item.hasDropdown) {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.name}</span>
                    </Link>
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="ml-8 space-y-1 mt-2 border-l border-white/10 pl-4">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors text-sm ${isActive(dropdownItem.path)
                              ? 'text-green-400 font-medium bg-green-600/10'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                              }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <dropdownItem.icon className="w-4 h-4" />
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => {
                      setIsBookingModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 text-white px-4 py-3 font-medium uppercase tracking-wide text-sm transition-colors duration-200 border border-green-500 hover:bg-green-500/20 rounded"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Slot
                  </button>
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center text-white px-6 py-3 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg"
                    style={{
                      backgroundColor: '#47BF72',
                      borderRadius: '5px'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    GET STARTED
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Navbar;