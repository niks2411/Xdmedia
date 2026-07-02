import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../lib/blogData';
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, Link2, Sparkles } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [activeSection, setActiveSection] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!post) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for navbar
      let currentSectionId = '';

      for (const section of post.sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSectionId = section.id;
            break;
          }
        }
      }

      // Fallback to first section if at the very top of the page
      if (window.scrollY < 300 && post.sections.length > 0) {
        currentSectionId = post.sections[0].id;
      }

      if (currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check with delay to let layout render
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center py-20 px-4">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Article Not Found</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">The blog article you are looking for might have been moved or removed.</p>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120, // Offset for sticky navbar
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - XD MEDIA Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Main Content wrapper */}
      <article className="min-h-screen bg-[#FDFDFD] pb-24 font-sans">
        
        {/* Navigation & Header */}
        <header className="pt-10 pb-6 px-4 sm:px-6 lg:px-8 border-b border-gray-100 max-w-7xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#47BF72] hover:text-green-600 transition-colors text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>
          
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium uppercase tracking-wider mb-4">
            <span className="text-[#47BF72] font-semibold">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-bold tracking-tight leading-tight max-w-4xl font-sans">
            {post.title}
          </h1>
        </header>

        {/* Hero image */}
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 mt-8">
          <div className="aspect-[21/9] overflow-hidden sm:rounded-2xl shadow-sm border border-slate-100 bg-slate-50">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3-Column Page Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-12 items-start">
            
            {/* 1. Left Sticky Column - Table of Contents */}
            <aside className="hidden lg:block sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                Table of Contents
              </h4>
              <nav className="space-y-1">
                {post.sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left py-2.5 text-sm transition-all text-ellipsis overflow-hidden focus:outline-none ${
                        isActive
                          ? 'text-[#47BF72] font-semibold border-l-2 border-[#47BF72] pl-3 -ml-0.5'
                          : 'text-gray-500 hover:text-slate-900 pl-3 border-l border-gray-100'
                      }`}
                    >
                      {section.title.replace(/^\d+\.\s*/, '')} {/* Strip number prefix if present for cleaner menu */}
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* 2. Center Column - Main Article Content */}
            <main className="w-full max-w-3xl mx-auto prose prose-slate prose-green">
              {post.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-12 sm:mb-16 scroll-mt-28"
                >
                  <h2 className="text-2xl sm:text-3xl text-slate-900 font-bold mb-6 tracking-tight font-sans">
                    {section.title}
                  </h2>
                  <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-6 whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
            </main>

            {/* 3. Right Sticky Column - Call to Action and Share */}
            <aside className="w-full lg:max-w-[300px] sticky top-28 space-y-8">
              
              {/* Promotion / CTA widget (Theme: Green/Dark Slate) */}
              <div className="bg-slate-950 border border-white/5 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#47BF72]/10 rounded-full blur-2xl"></div>
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-1 bg-[#47BF72]/15 text-[#47BF72] text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase">
                    <Sparkles className="w-3 h-3" /> Growth Campaign
                  </div>
                  <h4 className="text-lg font-semibold leading-snug">
                    Ready to grow your channel?
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Start your YouTube promotion today and reach millions of targeted viewers. We scale subscribers, watch hours, and sales.
                  </p>
                  <Link
                    to="/contact"
                    className="block text-center text-white bg-[#47BF72] hover:bg-[#3aa85f] font-semibold text-xs py-3.5 px-6 rounded-lg uppercase tracking-wider transition-colors duration-200 shadow-md shadow-[#47BF72]/10 active:scale-[0.98]"
                  >
                    Promote Now
                  </Link>
                </div>
              </div>

              {/* Social Share Widget */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Share2 className="w-3.5 h-3.5" /> Share this article
                </h4>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:text-sky-500 hover:bg-sky-50 transition-colors"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 fill-current" />
                  </a>
                  <button
                    onClick={copyToClipboard}
                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#47BF72] hover:bg-green-50 transition-colors"
                    title="Copy Link"
                  >
                    <Link2 className="w-4 h-4" />
                  </button>
                </div>
                {copied && (
                  <p className="text-xs text-[#47BF72] font-semibold animate-fade-in">
                    Link copied to clipboard!
                  </p>
                )}
              </div>

            </aside>

          </div>
        </div>

      </article>
    </>
  );
};

export default BlogDetail;
