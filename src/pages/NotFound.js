import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Globe, Code, Sparkles, Phone } from 'lucide-react';
import Canonical from '../components/SEO/Canonical';

const NotFound = () => {
  const quickLinks = [
    {
      title: "SEO Services",
      desc: "Drive organic traffic and rank #1",
      path: "/seo-service",
      icon: Sparkles,
      color: "from-green-500/10 to-emerald-500/10 text-emerald-600"
    },
    {
      title: "Web Development",
      desc: "Custom, scalable digital solutions",
      path: "/web-development-services",
      icon: Code,
      color: "from-blue-500/10 to-indigo-500/10 text-indigo-600"
    },
    {
      title: "Performance Marketing",
      desc: "Data-driven marketing campaigns",
      path: "/performance-marketing",
      icon: Globe,
      color: "from-amber-500/10 to-orange-500/10 text-amber-600"
    },
    {
      title: "Get in Touch",
      desc: "Let's discuss your next project",
      path: "/contact",
      icon: Phone,
      color: "from-purple-500/10 to-violet-500/10 text-purple-600"
    }
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden py-16 px-4">
      <Canonical path="/404" />
      
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-3xl w-full text-center relative z-10">
        
        {/* Animated 404 text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-[#47BF72] to-teal-500 leading-none select-none tracking-tighter">
            404
          </h1>
        </motion.div>

        {/* Text descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-slate-800 tracking-tight mb-4">
            Oops! This page has <span className="font-fraunces italic text-[#16a34a]">drifted off course</span>
          </h2>
          <p className="text-slate-600 font-light text-lg max-w-xl mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-white px-8 py-4 font-medium uppercase tracking-wide text-sm transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
              style={{ backgroundColor: '#47BF72', borderRadius: '5px' }}
            >
              <Home size={18} />
              Back to Home
            </motion.button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#16a34a] border border-slate-200 hover:border-[#16a34a]/30 bg-white hover:bg-slate-50 px-8 py-4 font-medium uppercase tracking-wide text-sm transition-all rounded-[5px]"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>

        {/* Helpful Shortcuts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-left"
        >
          <div className="border-t border-slate-200/60 pt-10">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center mb-8">
              Or explore our key solutions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickLinks.map((link, idx) => {
                const IconComponent = link.icon;
                return (
                  <Link 
                    key={idx} 
                    to={link.path}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-emerald-500/20 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 group-hover:text-[#16a34a] transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-sm text-slate-500 mt-1 font-light">
                        {link.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;
