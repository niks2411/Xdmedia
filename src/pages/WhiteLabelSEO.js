import React from 'react';
import { motion } from 'framer-motion';

const WhiteLabelSEO = () => {
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

        .hero-glow {
            background: radial-gradient(circle at 50% 50%, rgba(75, 226, 119, 0.15) 0%, transparent 70%);
        }
        .glass-card {
            background: rgba(25, 59, 42, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(134, 149, 133, 0.1);
        }
        .bento-glow {
            box-shadow: 0 0 40px rgba(75, 226, 119, 0.05);
        }
      ` }} />

      <main>
        {/* Hero Section */}
        <header className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-glow -z-10"></div>
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d3020] border border-[#3d4a3d]/30 text-[#4be277] text-xs font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4be277] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4be277]"></span>
                </span>
                Official White Label Partner
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                White Label SEO That Works — <span className="text-[#4be277]">Under Your Brand</span>
              </h1>
              <p className="text-[#bccbb9] text-xl leading-relaxed max-w-xl">
                Deliver powerful SEO results to your clients without building an in-house team. We handle the heavy lifting while you take all the credit.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#22c55e] text-[#004b1e] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all">
                  Get Started
                </button>
                <button className="border border-[#3d4a3d] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#193b2a] transition-all">
                  Book a Call
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 glass-card p-4 rounded-xl rotate-3 translate-x-4 shadow-2xl">
                <img 
                  alt="Futuristic SEO dashboard with glowing green line graphs, neon keyword performance metrics, and sleek dark user interface elements" 
                  className="rounded-lg w-full h-auto grayscale-[0.5] hover:grayscale-0 transition-all duration-700" 
                  src="/images/stitch/white-label-seo-hero.png" 
                />
              </div>
              <div className="absolute -top-12 -left-12 glass-card p-6 rounded-lg -rotate-6 z-20 hidden lg:block">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#4be277] text-4xl">trending_up</span>
                  <div>
                    <p className="text-xs text-[#bccbb9] uppercase tracking-widest">Growth</p>
                    <p className="text-xl font-bold text-white">+245% Traffic</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-4 glass-card p-6 rounded-lg rotate-2 z-20 hidden lg:block">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#4be277] text-4xl">key</span>
                  <div>
                    <p className="text-xs text-[#bccbb9] uppercase tracking-widest">Keywords</p>
                    <p className="text-xl font-bold text-white">#1 Rank Reached</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Trust Section */}
        <section className="py-24 bg-[#001208]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-black text-[#4be277] tracking-tighter">10,000+</div>
                <div className="text-[#bccbb9] font-medium tracking-wide uppercase text-sm">Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-black text-[#4be277] tracking-tighter">200%</div>
                <div className="text-[#bccbb9] font-medium tracking-wide uppercase text-sm">Average ROI</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-black text-[#4be277] tracking-tighter">100+</div>
                <div className="text-[#bccbb9] font-medium tracking-wide uppercase text-sm">Agency Partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">Why Agencies Partner With Us</h2>
              <p className="text-[#bccbb9] text-lg max-w-2xl">Elevate your agency's capabilities with our seamless white label integration.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="glass-card p-10 rounded-xl group hover:scale-[1.02] hover:bg-[#0d3020] transition-all duration-300">
                  <div className="w-14 h-14 bg-[#193b2a] flex items-center justify-center rounded-xl mb-8 group-hover:bg-[#4be277] transition-colors">
                    <span className={`material-symbols-outlined text-[#4be277] group-hover:text-[#003915] text-3xl`}>{benefit.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-[#bccbb9] leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-[#002112]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">Full-Spectrum SEO Services</h2>
              <p className="text-[#bccbb9] text-lg">Everything you need to deliver 5-star SEO results.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="overflow-hidden rounded-xl bg-[#00180c] group">
                  <div className="h-64 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                    <p className="text-[#bccbb9] text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-24 text-center">How It Works</h2>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#4be277]/30 to-transparent -translate-y-1/2 hidden md:block"></div>
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-[#0d3020] border-2 border-[#4be277] flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(75,226,119,0.5)] transition-all">
                    <span className="text-2xl font-black text-[#4be277]">{step.number}</span>
                  </div>
                  <h5 className="text-xl font-bold text-white mb-3">{step.title}</h5>
                  <p className="text-[#bccbb9] text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 bg-[#00180c]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">Partner Pricing Plans</h2>
              <p className="text-[#bccbb9]">Scalable wholesale rates for agencies of all sizes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="glass-card p-10 rounded-xl space-y-8">
                <div className="space-y-2">
                  <h6 className="text-white font-bold text-xl uppercase tracking-widest">Local</h6>
                  <div className="text-4xl font-black text-white">$499<span className="text-lg font-normal text-[#bccbb9]">/mo</span></div>
                </div>
                <ul className="space-y-4 text-[#bccbb9]">
                  {["5 Keywords Target", "On-page Optimization", "Local Citation Building", "Standard Reporting"].map((f, i) => (
                    <li key={i} className="flex items-center gap-3"><span className="material-symbols-outlined text-[#4be277] text-sm">check_circle</span> {f}</li>
                  ))}
                </ul>
                <button className="w-full py-4 border border-[#3d4a3d] rounded-xl text-white font-bold hover:bg-[#193b2a] transition-all">Select Plan</button>
              </div>

              <div className="relative bg-[#0d3020] p-12 rounded-xl space-y-8 border-2 border-[#4be277] shadow-[0_0_50px_rgba(75,226,119,0.15)] scale-105 z-10">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#4be277] text-[#003915] px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
                <div className="space-y-2">
                  <h6 className="text-white font-bold text-xl uppercase tracking-widest">Global</h6>
                  <div className="text-5xl font-black text-white">$1,299<span className="text-lg font-normal text-[#bccbb9]">/mo</span></div>
                </div>
                <ul className="space-y-4 text-[#bccbb9]">
                  {["20 Keywords Target", "Technical SEO Audit", "4 High-Authority Backlinks", "Custom White Label Dashboard", "Priority Support"].map((f, i) => (
                    <li key={i} className="flex items-center gap-3"><span className="material-symbols-outlined text-[#4be277] text-sm">check_circle</span> {f}</li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-[#4be277] text-[#003915] rounded-xl font-bold hover:shadow-[0_0_30px_rgba(75,226,119,0.4)] transition-all">Select Plan</button>
              </div>

              <div className="glass-card p-10 rounded-xl space-y-8">
                <div className="space-y-2">
                  <h6 className="text-white font-bold text-xl uppercase tracking-widest">E-commerce</h6>
                  <div className="text-4xl font-black text-white">$2,499<span className="text-lg font-normal text-[#bccbb9]">/mo</span></div>
                </div>
                <ul className="space-y-4 text-[#bccbb9]">
                  {["Unlimited Keywords", "Full Catalog Optimization", "Advanced Schema Markup", "Content Velocity Program"].map((f, i) => (
                    <li key={i} className="flex items-center gap-3"><span className="material-symbols-outlined text-[#4be277] text-sm">check_circle</span> {f}</li>
                  ))}
                </ul>
                <button className="w-full py-4 border border-[#3d4a3d] rounded-xl text-white font-bold hover:bg-[#193b2a] transition-all">Select Plan</button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] via-[#22c55e] to-[#065f46] opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 px-12 py-24 text-center space-y-8">
              <h2 className="font-headline text-4xl md:text-6xl font-black text-[#004b1e] tracking-tight max-w-4xl mx-auto">
                Scale Your Agency Without Hiring
              </h2>
              <p className="text-[#004b1e]/80 text-xl font-medium max-w-2xl mx-auto">
                Ready to deliver world-class SEO results under your own brand name? Let's build your agency's future today.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-[#00180c] text-[#4be277] px-10 py-5 rounded-xl font-black text-lg hover:scale-105 transition-all">
                  Start Growing Now
                </button>
                <button className="bg-transparent border-2 border-[#004b1e] text-[#004b1e] px-10 py-5 rounded-xl font-black text-lg hover:bg-[#004b1e] hover:text-[#22c55e] transition-all">
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const benefits = [
  { icon: "add_business", title: "Expand Services", description: "Instantly add world-class SEO to your service portfolio without hiring single employee." },
  { icon: "rocket_launch", title: "Focus on Growth", description: "Spend more time on sales and client relationships while we handle technical execution." },
  { icon: "trending_up", title: "Scalable Solutions", description: "From 1 client to 1,000, our infrastructure scales effortlessly with your agency's demand." },
  { icon: "payments", title: "Cost Efficient", description: "Lower your overhead and increase margins with wholesale SEO pricing for partners." },
  { icon: "groups", title: "Expert Team", description: "Gain access to a dedicated team of specialists who live and breathe search algorithms." },
  { icon: "article", title: "White Label Reporting", description: "Branded dashboards and PDF reports featuring your logo and agency colors." }
];

const services = [
  { title: "SEO Audit", description: "Deep technical analysis to identify every growth bottleneck.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsPkGL5GxFgZ315PGSKK46BiXfgq8VWXtQGklc3EOYUj55STlcP5_k9ZXObib-CiKcki3JFkaZKlHORsuEzagryytywS19ioaelqpWulIlGhbYcFJW43Bi0ejEotI-rDPg-ofbLs5qsNvWXz5a1uFtwkQQvECsxNFTeBDWP88AQE4z0vcH62TTx72yD5geOSTWdR_P6HpAnwXtu3YrpQbh3rWbjd5s1nioYtEH-EIYZ6bmL1O9JgRrF6jKAKDp8aU2Zg2On-uKEg" },
  { title: "Keyword Research", description: "Targeting high-intent terms that drive actual conversions.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAokh75uuT1MnhNwf8cIddgE7eRnLoxm26OGrYa92173-8oRddjnn38fFJIOlecvZhFLM3sN3mSWisSCw1JgO5_ufRS3YHLvB11OqsDr_dN8urE1S3Pca4I9wHakCWAYePnmmt1NSqyqy1HIkL3V6iuxSmE76UPprZAUyo8woIvpdMknA_FAYKDeSwMMHBNgPJZ-J9F4VSaGTuWKgmKc28iHDUHkVJuzfEjyYGu3plDYMkEhKChbauyohROyHuKJrOpYhkpY-l-OA" },
  { title: "On-page SEO", description: "Semantic optimization and content structure refinement.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTwV6E-L-dKgSTKg2vvx9z2VRTkn-Vry9ZNP5XBypojDnoXEEuAfaErbRF4CnOLjr1odYiq3Z0o0g2EferzRNTgTi9x4OAjQWrHkE2DYLbB1qtdBa_3K0BODhZxpZe8uQ7NqcI_AsbXzgQhREswqaCDAqhdNr73z8af1ChE0BUl20DnD1xW2HVOkGlfXEa-OSrhgCIyGaTzOKyQyO0osLRS2KtMo7hUEQI8PpSlhyHcjZ4_HXhz8pvZJkk-pfzR3WxH80jHZOqGA" },
  { title: "Technical SEO", description: "Schema, site speed, and architectural improvements.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBok8ufhJWF6R59ZelvBJUaZyhx4fRtbGOpFEVsFMY8G0UrbaWqvxil36rYFene8Wwy6kHClS4EP78Dhl1BYKIhP3FdxgfbWchQThFQiqrg8q3cC6KbY5Q_JFZq0UjzGA3FXsgY0VTgnoX6C38OYm5IDPlOR4rA3MzBoxO42MxhO8TWRwU4cQIK6UdagXGz05pe9R1vRD_kqAPs8s17Cv2vR9TNhcVG1G9pk7HxvhYDHmIHEC0HZysfuEZungyWnL5cOgkS5uY6Q" },
  { title: "Link Building", description: "High-authority placements to build trust and power.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs3LmgcFUqU1kHBMEGWdwJo44XIapVungb_9D6RTmdEVhGY8o1ojindVrk6sS3_oIPjQvZEJr8G9JPtIv8SvbRcKMknFozKHNQQhJRlFGHeqjlBPw7NT-Ah3rQgzlC2uJRD7giR8xRAHSbAhqH8cDOu7cy09wD5xemsYmxh7QjNLP4-Do7Bs5pFSqNlekCuJnpwGhCgZ_Teok_oxLTFPSZq-VMnZUmIx3tmzQtt34lJQfulRRuhpm_irVjwl7zK8dw-Z1ypXssXQ" },
  { title: "Content Creation", description: "Editorial-grade articles designed to rank and engage.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn_CEBEWjn1ASIXsSopjv76-uHDkxzUx5Zq4bTcRzc8uDAFgcmriQkzcy-wP4_Xqh5LSu57-wD4pt6nJus800VtjTpPBaz-pyB4yUDkPuSAo0o6E1Gyyf5qg3smMSfAo5N1PizYPKMNR1qUMpTomtYX09dp_X4_XwCYPYPpYs-JxNdNYNhWQsI9CuF64d5vvVvHXyjnSU4-aJhtZ_KLEHJU-3vtIDmtMXJ9tvjAYmKD9kFU8yVpYo34rNx8YVoLR0YKgL2GA3gTg" }
];

const steps = [
  { number: "01", title: "Onboarding", description: "Integration with your agency systems and client handoff." },
  { number: "02", title: "Strategy", description: "Custom roadmap development based on client KPIs." },
  { number: "03", title: "Execution", description: "Our specialists perform technical and content work." },
  { number: "04", title: "Reporting", description: "Branded white label reports delivered to your inbox." }
];

export default WhiteLabelSEO;
