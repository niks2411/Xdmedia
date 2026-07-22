import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Canonical from '../components/SEO/Canonical';
import { blogPosts } from '../lib/blogData';
import { ArrowRight, BookOpen } from 'lucide-react';
import GmbBadge from '../components/GmbBadge';

const BlogIndex = () => {
  return (
    <>
      <Helmet>
        <title>Blog & Insights - XD MEDIA | Digital Marketing & Web Development</title>
        <meta name="description" content="Read the latest articles, guides, and insights on SEO, YouTube growth, monetization, website design, and workflow automation from the team at XD MEDIA." />
        <meta property="og:title" content="Blog & Insights - XD MEDIA | Digital Marketing & Web Development" />
        <meta property="og:description" content="Read the latest articles, guides, and insights on SEO, YouTube growth, monetization, website design, and workflow automation from the team at XD MEDIA." />
        <meta property="twitter:title" content="Blog & Insights - XD MEDIA | Digital Marketing & Web Development" />
        <meta property="twitter:description" content="Read the latest articles, guides, and insights on SEO, YouTube growth, monetization, website design, and workflow automation from the team at XD MEDIA." />
      </Helmet>
      <Canonical path="/blog" />

      {/* Hero Section */}
      <section className="relative py-20 bg-white text-slate-900 overflow-hidden border-b border-slate-100">
        {/* Subtle grid and gradient overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <GmbBadge variant="light" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-none mb-6 font-normal">
            The XD Media Blog
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Latest insights, guides, and strategies from our digital marketing and web development experts.
          </p>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.filter(post => post.slug === 'seo-guide-for-businesses').map((post) => (
              <article key={post.slug} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                {/* Image & Tag */}
                <Link to={`/blog/${post.slug}`} className="relative block overflow-hidden aspect-video bg-slate-100">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#47BF72] text-white text-[10px] font-bold tracking-widest uppercase shadow-sm">
                    {post.category}
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Meta info */}
                    <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl text-slate-900 font-semibold group-hover:text-[#47BF72] transition-colors duration-200 leading-snug">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#47BF72] font-semibold text-sm hover:text-green-600 transition-colors uppercase tracking-wider"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;
