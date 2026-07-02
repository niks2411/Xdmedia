import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Award } from 'lucide-react';

const CredibilityBacking = () => {
    const parentCompanies = [
        {
            name: "KIXTIX MEDIA Pvt Ltd",
            icon: <Building2 className="w-8 h-8" />,
            revenue: "₹35+ Crore",
            description: "Annual Revenue",
            details: "Major entertainment brand partnerships with massive-scale YouTube marketing & content distribution",
            color: "#47BF72",
            stats: [
                { label: "Annual Revenue", value: "₹35+ Cr" },
                { label: "Brand Partnerships", value: "100+" }
            ]
        },
        {
            name: "Vidflyy Promotion LLP",
            icon: <TrendingUp className="w-8 h-8" />,
            revenue: "YouTube Specialist",
            description: "Video Marketing Platform",
            details: "Specialized YouTube & video marketing platform with organic growth and watch-time optimization expertise",
            color: "#8B5CF6",
            stats: [
                { label: "Video Campaigns", value: "5000+" },
                { label: "Watch Hours", value: "10M+" }
            ]
        },
        {
            name: "Music Labels",
            icon: <Users className="w-8 h-8" />,
            revenue: "1M+ Subscribers",
            description: "Combined Reach",
            details: "Lokgeet Punjabi & Lokgeet Haryanvi with massive regional audience and content expertise",
            color: "#F59E0B",
            stats: [
                { label: "Total Subscribers", value: "1M+" },
                { label: "Monthly Views", value: "50M+" }
            ]
        }
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #0a0a0a 0%, #16213e 50%, #0a0a0a 100%)'
            }}
        >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full"
                            style={{
                                background: 'rgba(71, 191, 114, 0.1)',
                                border: '1px solid rgba(71, 191, 114, 0.3)'
                            }}>
                            <Award className="w-4 h-4" style={{ color: '#47BF72' }} />
                            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#47BF72' }}>
                                Backed by Excellence
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight">
                        <span className="text-white font-normal">
                            Powered by
                        </span>
                        <br />
                        <span className="text-white font-fraunces italic">
                            Proven Industry Leaders
                        </span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-inter">
                        XD MEDIA is backed by established ventures with proven track records in entertainment, technology, and digital marketing.
                    </p>
                </motion.div>

                {/* Parent Companies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {parentCompanies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* Glowing border effect */}
                            <div
                                className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"
                                style={{ background: `linear-gradient(135deg, ${company.color}, ${company.color}80)` }}
                            ></div>

                            {/* Card */}
                            <div
                                className="relative overflow-hidden rounded-2xl p-8 h-full backdrop-blur-xl border transition-all duration-300"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderColor: 'rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${company.color}30, ${company.color}15)`,
                                        border: `1px solid ${company.color}40`,
                                        color: company.color
                                    }}
                                >
                                    {company.icon}
                                </div>

                                {/* Company Name */}
                                <h3 className="text-2xl text-white mb-2 font-inter">
                                    {company.name}
                                </h3>

                                {/* Revenue/Description */}
                                <div className="mb-4">
                                    <div className="text-3xl mb-1" style={{ color: company.color }}>
                                        {company.revenue}
                                    </div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                                        {company.description}
                                    </div>
                                </div>

                                {/* Details */}
                                <p className="text-gray-400 leading-relaxed font-inter text-sm mb-6">
                                    {company.details}
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                                    {company.stats.map((stat, idx) => (
                                        <div key={idx}>
                                            <div className="text-xl font-bold text-white">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom accent */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                    style={{ background: company.color }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Group Strength Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div
                        className="relative overflow-hidden rounded-3xl p-12 backdrop-blur-xl border text-center"
                        style={{
                            background: 'linear-gradient(135deg, rgba(71, 191, 114, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                            borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-4xl text-white mb-4 font-inter">
                                Combined Group Strength
                            </h3>
                            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                                Backed by ventures with <span className="font-bold text-white">₹35+ crore annual revenue</span>,
                                <span className="font-bold text-white"> 112.5+ billion YouTube views delivered</span>, and
                                <span className="font-bold text-white"> 1M+ combined subscribers</span>.
                                This is the powerhouse behind XD MEDIA.
                            </p>

                            {/* Group Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                                {[
                                    { value: "112.5B+", label: "YouTube Views" },
                                    { value: "₹35+ Cr", label: "Group Revenue" },
                                    { value: "1M+", label: "Subscribers" },
                                    { value: "100+", label: "Brand Partners" }
                                ].map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CredibilityBacking;
