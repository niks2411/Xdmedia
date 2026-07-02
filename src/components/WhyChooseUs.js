import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
    const navigate = useNavigate();
    const features = [
        {
            title: "All-in-One Solution",
            subtitle: "Strategy, Tech & Marketing under one roof",
            description: "No more juggling multiple agencies. From UX research and wireframes to custom development and performance marketing, our cross-functional teams work seamlessly together. We handle everything—branding, web development, SEO, paid ads, and content creation—so you can focus on running your business.",
            color: "#47BF72"
        },
        {
            title: "Result-Oriented Approach",
            subtitle: "We focus on performance, not vanity metrics",
            description: "Every decision is backed by conversion data, heatmaps, and user insights. We obsess over KPIs that move revenue—not just pretty mockups. Our data-driven strategies ensure measurable ROI, with transparent reporting that shows exactly how your investment translates into growth.",
            color: "#8B5CF6"
        },
        {
            title: "Creative Excellence",
            subtitle: "Bold ideas that make brands stand out",
            description: "Award-ready art direction, purposeful motion design, and storytelling that keeps visitors scrolling. We don't do cookie-cutter templates. Every brand gets custom creative that captures attention, builds emotional connections, and makes your business impossible to forget in a crowded market.",
            color: "#F59E0B"
        },
        {
            title: "Dedicated Support",
            subtitle: "Personalized attention and fast turnaround",
            description: "You get a seasoned team of strategists, designers, and engineers with direct communication channels. Weekly progress demos, <48h response times, and proactive problem-solving mean you're never left in the dark. We're an extension of your team, invested in your success.",
            color: "#3B82F6"
        },
        {
            title: "Affordable & Scalable",
            subtitle: "Solutions for startups to enterprises",
            description: "Flexible engagement models and transparent pricing mean you can start lean and scale without friction. Whether you're a startup validating your MVP or an enterprise launching new products, our modular approach adapts to your budget and growth trajectory without compromising quality.",
            color: "#EC4899"
        }
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6"
                        style={{
                            background: 'rgba(71, 191, 114, 0.1)',
                            border: '1px solid rgba(71, 191, 114, 0.3)',
                            color: '#47BF72'
                        }}>
                        Why Choose XDMEDIA
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 tracking-tight">
                        <span className="text-white">
                            Built for
                        </span>
                        <br />
                        <span className="text-white font-fraunces italic">
                            Excellence & Growth
                        </span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-inter">
                        We don't just deliver services—we craft experiences that transform businesses and drive measurable success.
                    </p>
                </motion.div>

                {/* Features Grid - 3 cards in first row, 2 in second */}
                <div className="max-w-7xl mx-auto mb-24">
                    {/* First Row - 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {features.slice(0, 3).map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                {/* Glassmorphism card */}
                                <div
                                    className="relative overflow-hidden rounded-2xl p-8 h-full backdrop-blur-xl border transition-all duration-300"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        borderColor: 'rgba(255, 255, 255, 0.1)',
                                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                                    }}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at top left, ${feature.color}15, transparent 70%)`
                                        }}
                                    ></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Title */}
                                        <h3 className="text-2xl text-white mb-2 font-inter">
                                            {feature.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-base font-medium mb-4 font-inter" style={{ color: feature.color }}>
                                            {feature.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-400 leading-relaxed font-inter text-sm">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                        style={{ background: feature.color }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Second Row - 2 Cards Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {features.slice(3, 5).map((feature, index) => (
                            <motion.div
                                key={index + 3}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                {/* Glassmorphism card */}
                                <div
                                    className="relative overflow-hidden rounded-2xl p-8 h-full backdrop-blur-xl border transition-all duration-300"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        borderColor: 'rgba(255, 255, 255, 0.1)',
                                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                                    }}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at top left, ${feature.color}15, transparent 70%)`
                                        }}
                                    ></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-2 font-inter">
                                            {feature.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-base font-medium mb-4 font-inter" style={{ color: feature.color }}>
                                            {feature.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-400 leading-relaxed font-inter text-sm">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                        style={{ background: feature.color }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Our Mission - Premium Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Glowing border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>

                    <div
                        className="relative overflow-hidden rounded-3xl backdrop-blur-xl border"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                            borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
                            <div className="max-w-4xl mx-auto">
                                {/* Badge */}
                                <div className="flex items-center justify-center mb-8">
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full"
                                        style={{
                                            background: 'rgba(71, 191, 114, 0.1)',
                                            border: '1px solid rgba(71, 191, 114, 0.3)'
                                        }}>
                                        <Rocket className="w-4 h-4" style={{ color: '#47BF72' }} />
                                        <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#47BF72' }}>
                                            Our Mission
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-center">
                                    <span className="font-inter font-normal">Empowering Brands to </span>
                                    <span className="font-fraunces italic bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                        Thrive in the Digital Age
                                    </span>
                                </h2>

                                <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center">
                                    At XDMEDIA, we believe every business deserves a powerful digital presence. Our mission is to democratize access to world-class technology, creative media, and performance marketing—helping brands of all sizes compete, grow, and succeed in an increasingly digital world.
                                </p>

                                <p className="text-base text-gray-400 leading-relaxed text-center">
                                    We're not just service providers; we're your growth partners. From the first strategy session to ongoing optimization, we're committed to delivering measurable results that drive real business impact. <span className="text-white font-medium">Your success story is our greatest achievement.</span>
                                </p>

                                {/* CTA Button */}
                                <div className="flex justify-center mt-10">
                                    <button
                                        onClick={() => navigate('/contact')}
                                        className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                                            boxShadow: '0 10px 40px rgba(71, 191, 114, 0.3)'
                                        }}
                                    >
                                        Start Your Journey
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
