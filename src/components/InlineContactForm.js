import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, User, Building2, Phone, MessageSquare } from 'lucide-react';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { countries } from '../lib/countries';

const InlineContactForm = ({ servicePage, defaultService }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        countryCode: '+91',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            await addDoc(collection(db, 'contacts'), {
                ...formData,
                phone: `${formData.countryCode} ${formData.phone}`,
                service: defaultService,
                sourcePage: servicePage,
                timestamp: serverTimestamp(),
                status: 'new'
            });

            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    countryCode: '+91',
                    message: ''
                });
            }, 3000);
        } catch (err) {
            console.error('Error submitting form:', err);
            setError('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-0">
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-xl border" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
            }}>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 rounded-lg flex items-center gap-3"
                        style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)'
                        }}
                    >
                        <AlertCircle className="w-5 h-5 text-red-400" />
                        <p className="text-red-400">{error}</p>
                    </motion.div>
                )}

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                            background: 'rgba(71, 191, 114, 0.2)',
                            border: '2px solid #47BF72'
                        }}>
                            <CheckCircle className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Request Received!</h3>
                        <p className="text-gray-400">
                            Thank you for your interest. We'll get back to you within 24 hours.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 sm:py-4 rounded-lg transition-all duration-300 outline-none disabled:opacity-50 text-base"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'white'
                                    }}
                                    placeholder="Your full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 outline-none disabled:opacity-50"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'white'
                                    }}
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                    <Building2 className="w-4 h-4" />
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 outline-none disabled:opacity-50"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'white'
                                    }}
                                    placeholder="Your company name"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    Phone Number
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleInputChange}
                                        disabled={isSubmitting}
                                        className="sm:col-span-1 px-3 py-3 rounded-lg transition-all duration-300 outline-none disabled:opacity-50"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'rgba(255, 255, 255, 0.7)'
                                        }}
                                    >
                                        {countries.map((c, idx) => (
                                            <option key={`${c.name}-${c.code}-${idx}`} value={c.code} style={{ background: '#1a1a2e', color: 'white' }}>
                                                {c.name} ({c.code})
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        disabled={isSubmitting}
                                        className="sm:col-span-2 px-4 py-3 rounded-lg transition-all duration-300 outline-none disabled:opacity-50"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'white'
                                        }}
                                        placeholder="9999XXXXXX"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4" />
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                disabled={isSubmitting}
                                rows={4}
                                className="w-full px-4 py-3 sm:py-4 rounded-lg transition-all duration-300 resize-none outline-none disabled:opacity-50 text-base"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: 'white'
                                }}
                                placeholder="Tell us about your project and goals..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 sm:py-5 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-base sm:text-lg"
                            style={{
                                background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                                boxShadow: '0 10px 40px rgba(71, 191, 114, 0.3)'
                            }}
                        >
                            {isSubmitting ? 'Sending...' : 'Get Started'}
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default InlineContactForm;
