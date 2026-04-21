import React from 'react';
import { motion } from 'framer-motion';

const WhiteLabelMarketing = () => {
  return (
    <div className="bg-[#00180c] text-[#c5ebd3] font-inter selection:bg-[#4be277] selection:text-[#003915]">
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
        }

        .display-lg { font-size: clamp(3rem, 8vw, 4.5rem); font-weight: 800; tracking: -0.04em; }
        .body-lg { font-size: 1.125rem; line-height: 1.7; }
        .label-md { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: #4be277; }

        .hero-glow { background: radial-gradient(circle at 50% 50%, rgba(75, 226, 119, 0.1) 0%, transparent 70%); }
        .glass-card { backdrop-filter: blur(20px); background: rgba(25, 59, 42, 0.4); border: 1px solid rgba(75, 226, 119, 0.1); }
      ` }} />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-glow -z-10"></div>
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <span className="label-md uppercase tracking-[0.2em] text-[#4be277] mb-6 font-bold">Scaling Your Agency Exponentially</span>
            <h1 className="display-lg text-5xl md:text-7xl font-headline font-extrabold text-white leading-tight mb-8 max-w-4xl tracking-tighter">
              Your Complete White Label <span className="text-[#4be277]">Digital Marketing</span> Partner
            </h1>
            <p className="body-lg text-lg md:text-xl text-[#bccbb9] max-w-2xl mb-12 leading-relaxed">
              Offer SEO, PPC, Social Media & more — all under your brand. We do the heavy lifting while you take the credit and the revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <button className="bg-[#22c55e] text-[#004b1e] px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(75,226,119,0.3)] transition-all">Get Started</button>
              <button className="border border-[#3d4a3d] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#193b2a] transition-all">View Our Services</button>
            </div>
            {/* Dashboard Visual */}
            <div className="relative w-full max-w-6xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-[#3d4a3d]/20 bg-[#002112] group">
              <img 
                src="/images/stitch/white-label-marketing-hero.png" 
                alt="Marketing Dashboard" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00180c] via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-[#001208]">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-6xl font-black text-white mb-2 group-hover:text-[#4be277] transition-colors">1M+</div>
              <div className="label-md uppercase tracking-widest text-[#4be277]/70">Leads Generated</div>
            </div>
            <div className="group border-y md:border-y-0 md:border-x border-[#3d4a3d]/30 py-12 md:py-0">
              <div className="text-6xl font-black text-white mb-2 group-hover:text-[#4be277] transition-colors">5M+</div>
              <div className="label-md uppercase tracking-widest text-[#4be277]/70">Keywords Ranked</div>
            </div>
            <div className="group">
              <div className="text-6xl font-black text-white mb-2 group-hover:text-[#4be277] transition-colors">1000+</div>
              <div className="label-md uppercase tracking-widest text-[#4be277]/70">Campaigns Managed</div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6">Expert Solutions Under <span className="text-[#4be277]">Your Brand</span></h2>
                <p className="text-[#bccbb9] text-lg">Deploy high-performance marketing strategies without the overhead of an in-house fulfillment team.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingServices.map((service, i) => (
                <div key={i} className="group bg-[#022516] p-10 rounded-xl hover:bg-[#193b2a] hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#4be277]/10 flex items-center justify-center mb-8 group-hover:bg-[#4be277] transition-colors">
                    <span className="material-symbols-outlined text-[#4be277] group-hover:text-[#003915] text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-[#bccbb9] leading-relaxed mb-6">{service.description}</p>
                  <a className="text-[#4be277] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                    Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 px-8 bg-[#002112]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#4be277]/10 rounded-full blur-3xl"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf2jg0Ha7kOZ8iSXoc1wS3KPPllA4feF2J_vc7kKbj4AnJBzk2gs9C6_M2iOgjEMZlBJnIOwF1h4Zt3Je9NLy2dIHijhlW8AmO41bforMNfT_YUhi5V96pSCY8WIKRLnV_AVkQr678m_GxUPP6FlOteAF-eUeBHzcueETXz70h0ySaj549AKGmBxiqAEY881UWBolxAciDLHl8gHZmpGyXZBYV0QTkRbVNyIAkTwGq3ud1Je_9L-XAEIqJjEV_2klmrurB9T6qjw" 
                alt="Team Collaboration" 
                className="rounded-xl shadow-2xl relative z-10 w-full" 
              />
              <div className="absolute -bottom-6 -right-6 bg-[#4be277] p-8 rounded-xl z-20 shadow-xl hidden md:block">
                <span className="text-[#003915] font-black text-4xl">10+</span>
                <p className="text-[#003915] font-bold text-sm uppercase tracking-tighter">Years Expertise</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-10 leading-tight">Your Success is Our <span className="text-[#4be277]">Only</span> Metric</h2>
              <ul className="space-y-8">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#193b2a] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#4be277]">{reason.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                      <p className="text-[#bccbb9]">{reason.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6">Our Seamless <span className="text-[#4be277]">Workflow</span></h2>
            <p className="text-[#bccbb9] max-w-2xl mx-auto">From onboarding to results, our process is engineered for transparency and speed.</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {workflow.map((item, i) => (
              <div key={i} className="group bg-[#022516] p-8 rounded-xl border-t-4 border-[#4be277]/20 hover:border-[#4be277] transition-all">
                <span className="text-[#4be277]/30 font-black text-6xl block mb-6 group-hover:text-[#4be277] transition-colors">{item.number}</span>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-[#bccbb9]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-32 px-8 bg-[#001208]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white text-center mb-20">Specialized In <span className="text-[#4be277]">Your Vertical</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((ind, i) => (
                <div key={i} className="flex flex-col items-center p-8 bg-[#0d3020] rounded-xl hover:scale-105 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-[#4be277] text-4xl mb-4">{ind.icon}</span>
                  <span className="font-bold text-white">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 px-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-96 bg-[#4be277]/5 blur-[120px] -z-10"></div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-headline font-extrabold text-white mb-4">Trusted by 200+ Agencies</h2>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[#4be277]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="glass-card p-10 rounded-xl">
                  <p className="text-[#c5ebd3] italic mb-8">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={t.avatar} alt={t.name} />
                    </div>
                    <div>
                      <h5 className="text-white font-bold">{t.name}</h5>
                      <p className="text-[#4be277] text-xs uppercase font-bold tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-8">
          <div className="max-w-5xl mx-auto bg-[#22c55e] rounded-xl p-16 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-[#004b1e] mb-8 leading-tight">Grow Faster Without Growing Your Team</h2>
            <p className="text-[#004b1e]/80 text-xl mb-12 max-w-2xl mx-auto">Join hundreds of agencies who have unlocked their true scaling potential with our white-label solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-[#00180c] text-[#4be277] px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">Get Started Now</button>
              <button className="bg-transparent border-2 border-[#004b1e] text-[#004b1e] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#004b1e]/10 transition-all">Contact Us</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const marketingServices = [
  { icon: "search", title: "SEO", description: "Dominate search rankings with data-driven keyword strategies and technical optimization." },
  { icon: "ads_click", title: "PPC Ads", description: "High-intent traffic acquisition via Google, Bing, and Social Media advertising channels." },
  { icon: "share", title: "Social Media", description: "Build authoritative brand presence through strategic organic and paid social campaigns." },
  { icon: "article", title: "Content Marketing", description: "Compelling narratives that engage audiences and drive consistent brand loyalty." },
  { icon: "mail", title: "Email Marketing", description: "Automated funnel optimization and lifecycle messaging for maximum retention." },
  { icon: "psychology", title: "AI Marketing", description: "Next-gen automation and predictive analytics to stay ahead of the curve." }
];

const reasons = [
  { icon: "payments", title: "Cost Effective", description: "Slash your operational costs by up to 60% compared to hiring full-time staff." },
  { icon: "trending_up", title: "Scalable", description: "Add new services or increase volume instantly without worrying about capacity." },
  { icon: "support_agent", title: "Dedicated Support", description: "A personal account manager for your agency to ensure seamless delivery." },
  { icon: "verified", title: "Full Branding Control", description: "Every report, email, and dashboard is 100% white-labeled with your logo." }
];

const workflow = [
  { number: "01", title: "Discovery", description: "Analyzing your client's goals and current digital footprint." },
  { number: "02", title: "Strategy", description: "Building a custom roadmap focused on ROI and growth." },
  { number: "03", title: "Execution", description: "Deployment of campaigns by our specialist teams." },
  { number: "04", title: "Optimization", description: "Continuous refinement based on real-time data performance." },
  { number: "05", title: "Reporting", description: "Monthly white-labeled deep dives into metrics and wins." }
];

const industries = [
  { icon: "shopping_bag", name: "E-commerce" },
  { icon: "medical_services", name: "Healthcare" },
  { icon: "home_work", name: "Real Estate" },
  { icon: "cloud_done", name: "SaaS" },
  { icon: "gavel", name: "Legal" },
  { icon: "flight_takeoff", name: "Travel" }
];

const testimonials = [
  { quote: "XD Media transformed our agency capacity overnight. We scaled from 10 to 50 clients in six months without hiring a single new manager.", name: "Marcus Chen", role: "CEO, Zenith Digital", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiAFGPsxQqXWc9Tj_6e-gGfl18IIw86Az7IUXXXb0507A1ukKjbmOYgHFZFAaq2XVbdncdjW9b7BIYrKSpWNxqvjkuG8sQvtvkEL9qiBMu5U2b1OC0VtqDU0AJMeTBOpOhS2Cc5nSePP0euTYTOvrufKSmGTOazEfPzt3RIh__bpMSz5ACQxNRFLlkCraXbyCiZY1acKgxlFhFEwUKJJVi0G_Al3yZwOz0Epu4gq1mf8PsSN0FfiIasy_Ra9cVP1lSBHBFXBuJGg" },
  { quote: "The quality of their SEO work is better than what we were doing in-house. Our clients are thrilled, and our margins have never been better.", name: "Sarah Williams", role: "Director, Sky High Ads", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFVlgzdyuYrWPHZ47DjWSbIGPZl1wb7J25Qc4xsnPQP2loah4g3TH5GxtZtWKh1AM5wyot2fhrwCQ-2qPiV1k5k1sqcLRPHl-NyUH8hnqznAUr7_hbhTdOU4IEWtuRnW2J6vY2_A5fpvFMmaNzgUIfP278kk0MyT4rMM-ofaL5kjY_Pc-Dp-TkMHVrOXV0P0eMJrAZ1WPXBt0-2WVRwCZxeeJIhMd-XQVX8BKBgPUGSda3_5fVaoegeqRHs42FNEcI73MVh4mULQ" },
  { quote: "Completely invisible fulfillment. My clients think I have a team of 30 people working in the back room. The dashboard is stunning.", name: "David Miller", role: "Founder, Miller & Co", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6-tlV-uFrZTqWwlwQvRGnaf5E4KiNP-Dei6qX04VNReepYLnRb739vpdiL5OKj7EOkd3mExHMTMvGTaMFQSAeCAr1SYqkUM7gyvRhhzMT6Q0P9Zld1dld8xVDiUYZy96MeRoJhGiZ87cYmF33e69JT2DEeMzrOnH8I2RBJpBeDUifRhkr0wo9yiqX_222N-FErYu0z9KelyKFSLlY0B6FTdjkbqYe5sjxIGqVsF0VYEP04ysV98s82_yA7pCMrbsrculeyXEL5Q" }
];

export default WhiteLabelMarketing;
