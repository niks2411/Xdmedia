import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Canonical from '../components/SEO/Canonical';
import { blogPosts } from '../lib/blogData';
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, Link2, Sparkles, ChevronDown } from 'lucide-react';
import GmbBadge from '../components/GmbBadge';

const parseInlineMarkdown = (text) => {
  if (!text) return '';

  const parts = [];
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    const matchStr = match[0];

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    if (matchStr.startsWith('**') && matchStr.endsWith('**')) {
      const boldText = matchStr.slice(2, -2);
      parts.push(<strong key={matchIndex} className="font-semibold text-slate-900">{boldText}</strong>);
    } else if (matchStr.startsWith('[') && matchStr.includes('](')) {
      const closeBracketIdx = matchStr.indexOf(']');
      const linkText = matchStr.slice(1, closeBracketIdx);
      const url = matchStr.slice(closeBracketIdx + 2, -1);
      parts.push(
        <a key={matchIndex} href={url} target={url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-[#47BF72] hover:underline font-medium">
          {linkText}
        </a>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const renderFormattedContent = (content) => {
  if (!content) return null;

  const paragraphs = content.split('\n\n');

  return paragraphs.map((para, paraIdx) => {
    const trimmedPara = para.trim();
    if (!trimmedPara) return null;

    // Check if it's a table
    if (trimmedPara.startsWith('|') && trimmedPara.includes('\n|')) {
      const lines = trimmedPara.split('\n');
      const rows = lines.map(line => {
        return line.split('|')
          .map(cell => cell.trim())
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      }).filter(row => row.length > 0);

      const hasHeader = rows.length > 1 && rows[1].every(cell => cell.startsWith('-') || cell.startsWith(':'));
      const headerRow = hasHeader ? rows[0] : null;
      const bodyRows = hasHeader ? rows.slice(2) : rows;

      return (
        <div key={paraIdx} className="overflow-x-auto my-6 border border-slate-100 rounded-xl">
          <table className="min-w-full divide-y divide-slate-200">
            {headerRow && (
              <thead className="bg-slate-50">
                <tr>
                  {headerRow.map((cell, idx) => (
                    <th key={idx} className="px-6 py-3.5 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      {parseInlineMarkdown(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-slate-100 bg-white">
              {bodyRows.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-slate-50/50 transition-colors">
                  {row.map((cell, idx) => (
                    <td key={idx} className="px-6 py-4 text-sm text-slate-600 leading-relaxed">
                      {parseInlineMarkdown(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // Parse lines to extract lists that may be inside a paragraph
    const lines = trimmedPara.split('\n');
    const elements = [];
    let currentList = null;

    const flushList = (key) => {
      if (!currentList) return;
      const ListTag = currentList.type;
      const listClass = currentList.type === 'ol' ? 'list-decimal list-outside' : 'list-disc list-outside';
      elements.push(
        <ListTag key={key} className={`${listClass} pl-6 my-4 space-y-2 text-base sm:text-lg`} style={{ listStylePosition: 'outside', listStyleType: currentList.type === 'ol' ? 'decimal' : 'disc' }}>
          {currentList.items.map((item, itemIdx) => (
            <li key={itemIdx} className="text-slate-600 my-1 ml-4 pl-1" style={{ listStylePosition: 'outside' }}>
              {parseInlineMarkdown(item)}
            </li>
          ))}
        </ListTag>
      );
      currentList = null;
    };

    lines.forEach((line, lineIdx) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      const isBullet = trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ');
      const isNumbered = /^\d+\.\s/.test(trimmedLine);

      if (isBullet) {
        if (currentList && currentList.type !== 'ul') {
          flushList(`list-${paraIdx}-${lineIdx}-prev`);
        }
        if (!currentList) {
          currentList = { type: 'ul', items: [] };
        }
        currentList.items.push(trimmedLine.replace(/^(\*\s|-\s)/, '').trim());
      } else if (isNumbered) {
        if (currentList && currentList.type !== 'ol') {
          flushList(`list-${paraIdx}-${lineIdx}-prev`);
        }
        if (!currentList) {
          currentList = { type: 'ol', items: [] };
        }
        currentList.items.push(trimmedLine.replace(/^\d+\.\s/, '').trim());
      } else {
        flushList(`list-${paraIdx}-${lineIdx}`);
        elements.push(
          <p key={`p-${paraIdx}-${lineIdx}`} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            {parseInlineMarkdown(trimmedLine)}
          </p>
        );
      }
    });

    flushList(`list-${paraIdx}-end`);

    return <div key={paraIdx}>{elements}</div>;
  });
};

const parseFAQs = (content) => {
  if (!content) return [];
  const blocks = content.split('\n\n');
  const faqs = [];
  
  blocks.forEach(block => {
    const trimmed = block.trim();
    if (!trimmed) return;
    
    const lines = trimmed.split('\n');
    if (lines.length >= 2) {
      const question = lines[0].replace(/^\d+\.\s*/, '').trim();
      const answer = lines.slice(1).join('\n').trim();
      if (question && answer) {
        faqs.push({ question, answer });
      }
    }
  });
  
  return faqs;
};

const BlogDetail = ({ slug: propSlug }) => {
  const { slug: urlSlug } = useParams();
  const slug = propSlug || urlSlug;
  const post = blogPosts.find((p) => p.slug === slug);
  const [activeSection, setActiveSection] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveFaq(null);
  }, [slug]);

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

  useEffect(() => {
    if (!activeSection) return;
    const activeEl = document.getElementById(`toc-link-${activeSection}`);
    const container = activeEl?.closest('aside');
    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();

      if (elRect.top < containerRect.top) {
        container.scrollTo({
          top: container.scrollTop + (elRect.top - containerRect.top) - 20,
          behavior: 'smooth'
        });
      } else if (elRect.bottom > containerRect.bottom) {
        container.scrollTo({
          top: container.scrollTop + (elRect.bottom - containerRect.bottom) + 20,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSection]);

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
        <title>{post.metaTitle || `${post.title} - XD MEDIA Blog`}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.metaDescription || post.excerpt} />
        <meta property="og:url" content={`https://www.xdmedia.in/blog/${post.slug || slug}`} />
        <meta property="twitter:title" content={post.metaTitle || post.title} />
        <meta property="twitter:description" content={post.metaDescription || post.excerpt} />
        {post.schema && (
          <script type="application/ld+json">
            {typeof post.schema === 'string' ? post.schema : JSON.stringify(post.schema)}
          </script>
        )}
      </Helmet>
      <Canonical path={`/blog/${post.slug || slug}`} />

      {/* Main Content wrapper */}
      <article className="min-h-screen bg-[#FDFDFD] pb-24 font-sans">
        
        {/* Navigation & Header */}
        <header className="pt-10 pb-6 px-4 sm:px-6 lg:px-8 border-b border-gray-100 max-w-7xl mx-auto mb-10">
          <div className="text-left mb-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#47BF72] hover:text-green-600 transition-colors text-xs font-semibold uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </Link>
          </div>
          
          <div className="flex items-center justify-center flex-wrap gap-2 text-xs text-gray-500 font-medium uppercase tracking-wider mb-4">
            <span className="font-semibold text-slate-700">Ritik Rozra</span>
            <span>•</span>
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="mb-6 flex justify-center">
            <GmbBadge variant="light" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-bold tracking-tight leading-tight max-w-6xl mx-auto font-sans text-center">
            {post.title}
          </h1>
        </header>

        {/* 3-Column Page Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      id={`toc-link-${section.id}`}
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
            <div className="w-full max-w-3xl mx-auto">
              {/* Hero Image */}
              <div className="aspect-[21/9] overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-slate-50 mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main content sections */}
              <main className="prose prose-slate prose-green max-w-none">
                {post.sections.map((section) => {
                  const isFaq = section.id === 'frequently-asked-questions';
                  const sectionEl = (
                    <section
                      key={section.id}
                      id={section.id}
                      className="mb-8 sm:mb-10 scroll-mt-28"
                    >
                      <h2 className="text-2xl sm:text-3xl text-slate-900 font-bold mt-0 mb-4 tracking-tight font-sans">
                        {section.title}
                      </h2>
                      {isFaq ? (
                        <div className="space-y-4 not-prose mt-6">
                          {parseFAQs(section.content).map((faq, faqIdx) => {
                            const isOpen = activeFaq === faqIdx;
                            return (
                              <div
                                key={faqIdx}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                              >
                                <button
                                  onClick={() => setActiveFaq(isOpen ? null : faqIdx)}
                                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50/20 transition-colors focus:outline-none"
                                >
                                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4 sm:pr-8">
                                    {faq.question}
                                  </span>
                                  <span className="text-2xl font-light text-slate-500 w-6 h-6 flex items-center justify-center shrink-0 leading-none">
                                    {isOpen ? '−' : '+'}
                                  </span>
                                </button>
                                <div
                                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                    isOpen ? 'max-h-[500px]' : 'max-h-0'
                                  }`}
                                >
                                  <div className="mx-5 sm:mx-6 border-t border-slate-100 pt-4 pb-5 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                                    {parseInlineMarkdown(faq.answer)}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-6">
                          {renderFormattedContent(section.content)}
                        </div>
                      )}
                    </section>
                  );

                  if (section.id === 'introduction') {
                    return (
                      <React.Fragment key={section.id}>
                        {sectionEl}
                        
                        {/* Mobile Table of Contents - Hidden on Desktop */}
                        <div className="lg:hidden bg-slate-50 border border-slate-200/60 rounded-2xl p-5 mb-8 mt-4 not-prose">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                            Table of Contents
                          </h4>
                          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            {post.sections.map((sec) => {
                              const isActive = activeSection === sec.id;
                              return (
                                <button
                                  key={sec.id}
                                  onClick={() => scrollToSection(sec.id)}
                                  className={`text-left py-1 text-sm transition-all focus:outline-none ${
                                    isActive
                                      ? 'text-[#47BF72] font-semibold'
                                      : 'text-gray-600 hover:text-slate-900'
                                  }`}
                                >
                                  {sec.title.replace(/^\d+\.\s*/, '')}
                                </button>
                              );
                            })}
                          </nav>
                        </div>
                      </React.Fragment>
                    );
                  }

                  return sectionEl;
                })}
              </main>
            </div>

            {/* 3. Right Sticky Column - Call to Action and Share */}
            <aside className="w-full lg:max-w-[300px] sticky top-28 space-y-8">
              
              {/* Promotion / CTA widget (Theme: Green/Dark Slate) */}
              <div className="hidden lg:block bg-slate-950 border border-white/5 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
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

        {/* Latest Articles Section */}
        {blogPosts.filter((p) => p.slug !== slug).length > 0 && (
          <section className="bg-slate-50 border-t border-slate-100 py-16 sm:py-20 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl sm:text-3xl text-slate-900 font-bold mb-10 tracking-tight font-sans text-center lg:text-left">
                Latest Articles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts
                  .filter((p) => p.slug !== slug)
                  .slice(0, 3)
                  .map((latestPost) => (
                    <article key={latestPost.slug} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
                      <Link to={`/blog/${latestPost.slug}`} className="relative block overflow-hidden aspect-video bg-slate-100">
                        <div className="absolute top-4 left-4 z-10 px-2.5 py-0.5 rounded bg-[#47BF72] text-white text-[9px] font-bold tracking-wider uppercase">
                          {latestPost.category}
                        </div>
                        <img
                          src={latestPost.image}
                          alt={latestPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </Link>
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="text-[11px] text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <span>{latestPost.date}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                            <span>{latestPost.readTime}</span>
                          </div>
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-[#47BF72] transition-colors line-clamp-2 leading-snug">
                            <Link to={`/blog/${latestPost.slug}`}>{latestPost.title}</Link>
                          </h4>
                          <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                            {latestPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </section>
        )}

      </article>
    </>
  );
};

export default BlogDetail;
