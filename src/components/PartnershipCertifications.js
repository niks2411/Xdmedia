import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const PartnershipCertifications = () => {
    const certifications = [
        {
            name: "Google Premium Partner",
            year: "2025",
            description: "Priority support, beta tools access, and higher optimization standards",
            color: "#4285F4",
            badge: "🏆"
        },
        {
            name: "Meta Business Partner",
            year: "Certified",
            description: "Official Meta advertising and marketing partnership",
            color: "#0668E1",
            badge: "✓"
        },
        {
            name: "Shopify Partner",
            year: "Certified",
            description: "E-commerce development and optimization expertise",
            color: "#96BF48",
            badge: "🛍️"
        },
        {
            name: "WooCommerce Partner",
            year: "Certified",
            description: "WordPress e-commerce solutions and integrations",
            color: "#96588A",
            badge: "🔌"
        }
    ];

    return (
        <section className="py-16 relative overflow-hidden" style={{ backgroundColor: 'rgb(12,32,21)' }}>
            {/* Subtle background glow */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container-max relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-green-400" />
                        <span className="text-sm font-medium uppercase tracking-wider text-green-400">
                            Official Partnerships & Certifications
                        </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-inter">
                        Trusted by Industry Leaders
                    </h3>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div
                                className="relative overflow-hidden rounded-xl p-6 h-full backdrop-blur-sm border transition-all duration-300"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderColor: 'rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                {/* Badge Icon */}
                                <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                                    {cert.badge}
                                </div>

                                {/* Name & Year */}
                                <h4 className="text-lg font-bold text-white mb-1 font-inter">
                                    {cert.name}
                                </h4>
                                <div
                                    className="text-sm font-semibold mb-3"
                                    style={{ color: cert.color }}
                                >
                                    {cert.year}
                                </div>

                                {/* Description */}
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* Bottom accent */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                    style={{ background: cert.color }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{
                            background: 'rgba(71, 191, 114, 0.1)',
                            border: '1px solid rgba(71, 191, 114, 0.3)'
                        }}>
                        <CheckCircle className="w-4 h-4" style={{ color: '#47BF72' }} />
                        <span className="text-sm text-gray-300">
                            Verified & Certified by Leading Platforms
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnershipCertifications;
