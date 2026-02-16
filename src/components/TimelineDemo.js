import React from "react";
import { Timeline } from "./ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "The Beginning",
      content: (
        <div className="max-w-4xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-8 rounded-2xl shadow-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">01</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Foundation</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">Where It All Started</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                XD MEDIA was created with a simple belief — <span className="font-semibold text-gray-900 dark:text-white">marketing should drive real business growth, not just impressions and reports.</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                While XD MEDIA is our newest venture, the experience behind it comes from years of building and scaling successful digital businesses. Our foundation is backed by <span className="font-semibold text-green-600">KIXTIX MEDIA Pvt. Ltd.</span>, a media-tech company that has generated ₹35+ crore in revenue and worked with some of the biggest names in the entertainment and digital ecosystem.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-3">Our Track Record</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  2.5 Billion+ Views Delivered
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  ₹35+ Crore Revenue Generated
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Millions in Client Business
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "The Demand",
      content: (
        <div className="max-w-4xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-8 rounded-2xl shadow-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">02</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Growing Trust</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">Brands Started Believing</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Over time, brands and agencies both in <span className="font-semibold text-gray-900 dark:text-white">India and South Africa</span>  began trusting us as their growth and execution partner.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                They started outsourcing critical functions like SEO, performance marketing, website development, and digital strategy. That trust and demand led to the birth of XD MEDIA.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Services Outsourced
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    SEO & Performance
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Website Development
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Digital Strategy
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Global Reach
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">India</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">South Africa</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">International</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "XD MEDIA Born",
      content: (
        <div className="max-w-4xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-8 rounded-2xl shadow-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">03</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">A Dedicated Agency</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">Strategy + Creativity + Performance</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                XD MEDIA was built as a <span className="font-semibold text-gray-900 dark:text-white">dedicated creative and digital marketing company</span>, focused on combining strategy, creativity, and performance.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We help brands grow through proven, data-driven solutions that deliver measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Our Services
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Search Engine Optimization (SEO)
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Performance Marketing (Google & Meta)
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Website & Ecommerce Development
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Social Media Marketing
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Growth Consulting & Automation
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Official Partners
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Google Premium</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Meta Partner</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Shopify Partner</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">WooCommerce</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-3">Our Approach</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  No Shortcuts
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Data-Driven Process
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Long-Term Partnerships
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Currently",
      content: (
        <div className="max-w-4xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-8 rounded-2xl shadow-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">04</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Building Growth Engines</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">Where We Are Today</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
              <p className="text-lg text-gray-900 dark:text-white font-semibold mb-4">
                We don't just market brands — we build scalable digital growth engines.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At XD MEDIA, we don't believe in shortcuts or one-size-fits-all solutions. We believe in <span className="font-semibold text-gray-900 dark:text-white">process, data, and long-term partnerships.</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Working with global standards, advanced tools, and proven frameworks, we help brands achieve sustainable growth through strategic digital marketing and technology.
              </p>
            </div>



            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-3">What Sets Us Apart</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Backed by proven ventures
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Global partner certifications
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Data-driven strategies
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Scalable growth systems
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};
