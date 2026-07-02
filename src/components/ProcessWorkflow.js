import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProcessWorkflow = () => {
    const navigate = useNavigate();
    const steps = [
        {
            number: "01",
            icon: <Search className="w-8 h-8" />,
            title: "Understand",
            subtitle: "Deep Research & Discovery",
            description: "We dive deep into your business goals, target audience, and brand story. Through comprehensive research and stakeholder interviews, we uncover insights that drive strategy.",
            color: "#47BF72",
            features: ["Market Analysis", "Competitor Research", "Audience Insights", "Brand Audit"]
        },
        {
            number: "02",
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Strategize",
            subtitle: "Data-Driven Planning",
            description: "Every decision is backed by data. We create actionable strategies aligned with your business objectives, ensuring measurable outcomes and sustainable growth.",
            color: "#8B5CF6",
            features: ["Strategic Planning", "KPI Definition", "Channel Selection", "Budget Optimization"]
        },
        {
            number: "03",
            icon: <Rocket className="w-8 h-8" />,
            title: "Execute",
            subtitle: "Precision Implementation",
            description: "Our cross-functional teams bring strategies to life with pixel-perfect design, clean code, and compelling content. Fast execution without compromising quality.",
            color: "#F59E0B",
            features: ["Design & Development", "Content Creation", "Campaign Launch", "Quality Assurance"]
        },
        {
            number: "04",
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Optimize",
            subtitle: "Continuous Improvement",
            description: "We track, analyze, and optimize continuously. Real-time monitoring, A/B testing, and data-driven refinements ensure sustained growth and maximum ROI.",
            color: "#3B82F6",
            features: ["Performance Tracking", "A/B Testing", "Analytics Review", "Strategy Refinement"]
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
                <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container-max relative z-10">
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
                        How We Do It
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 tracking-tight">
                        <span className="text-white">
                            Our Proven
                        </span>
                        <br />
                        <span className="text-white font-fraunces italic">
                            Process Workflow
                        </span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-inter">
                        From discovery to optimization, our systematic approach ensures every project delivers exceptional results.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="max-w-7xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-12 last:mb-0"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                {/* Number - Left side on even, right side on odd */}
                                <div className={`lg:col-span-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-3'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="text-8xl font-bold text-center lg:text-left"
                                        style={{
                                            background: `linear-gradient(135deg, ${step.color}40, ${step.color}20)`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}
                                    >
                                        {step.number}
                                    </motion.div>
                                </div>

                                {/* Content Card - Center */}
                                <div className={`lg:col-span-8 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-2'}`}>
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative group"
                                    >
                                        {/* Glassmorphism card */}
                                        <div
                                            className="relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl border transition-all duration-300"
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
                                                    background: `radial-gradient(circle at top left, ${step.color}15, transparent 70%)`
                                                }}
                                            ></div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <div className="flex items-start gap-6 mb-6">
                                                    {/* Icon */}
                                                    <div
                                                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${step.color}30, ${step.color}15)`,
                                                            border: `1px solid ${step.color}40`,
                                                            color: step.color
                                                        }}
                                                    >
                                                        {step.icon}
                                                    </div>

                                                    {/* Title & Subtitle */}
                                                    <div className="flex-1">
                                                        <h3 className="text-3xl text-white mb-2 font-inter">
                                                            {step.title}
                                                        </h3>
                                                        <p className="text-lg font-medium font-inter" style={{ color: step.color }}>
                                                            {step.subtitle}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-400 leading-relaxed font-inter mb-6">
                                                    {step.description}
                                                </p>

                                                {/* Features */}
                                                <div className="grid grid-cols-2 gap-3">
                                                    {step.features.map((feature, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex items-center gap-2 text-sm text-gray-300"
                                                        >
                                                            <div
                                                                className="w-1.5 h-1.5 rounded-full"
                                                                style={{ background: step.color }}
                                                            ></div>
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Bottom accent line */}
                                            <div
                                                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                                style={{ background: step.color }}
                                            ></div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Icon placeholder for spacing on opposite side */}
                                <div className={`lg:col-span-2 hidden lg:block ${index % 2 === 0 ? 'lg:order-3' : 'lg:order-1'}`}>
                                </div>
                            </div>

                            {/* Connecting line (except for last item) */}
                            {index < steps.length - 1 && (
                                <div className="flex justify-center my-8">
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                        viewport={{ once: true }}
                                        className="w-0.5 h-16 origin-top"
                                        style={{
                                            background: `linear-gradient(180deg, ${step.color}80, ${steps[index + 1].color}80)`
                                        }}
                                    ></motion.div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 mb-6 text-lg">
                        Ready to transform your digital presence?
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        style={{
                            background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                            boxShadow: '0 10px 40px rgba(71, 191, 114, 0.3)'
                        }}
                    >
                        Start Your Project
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessWorkflow;
