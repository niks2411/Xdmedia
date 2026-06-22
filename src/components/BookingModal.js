import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle, Loader2 } from 'lucide-react';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { countries } from '../lib/countries';

const BookingModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+91',
        bookingDate: '',
        timeSlot: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    // Generate available time slots (10 AM to 6 PM, 30-min intervals)
    const timeSlots = [
        '10:00 AM - 10:30 AM',
        '10:30 AM - 11:00 AM',
        '11:00 AM - 11:30 AM',
        '11:30 AM - 12:00 PM',
        '12:00 PM - 12:30 PM',
        '12:30 PM - 01:00 PM',
        '02:00 PM - 02:30 PM',
        '02:30 PM - 03:00 PM',
        '03:00 PM - 03:30 PM',
        '03:30 PM - 04:00 PM',
        '04:00 PM - 04:30 PM',
        '04:30 PM - 05:00 PM',
        '05:00 PM - 05:30 PM',
        '05:30 PM - 06:00 PM'
    ];

    // Get minimum date (tomorrow)
    const getMinDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };

    // Get maximum date (30 days from now)
    const getMaxDate = () => {
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 30);
        return maxDate.toISOString().split('T')[0];
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleTimeSlotSelect = (slot) => {
        setFormData(prev => ({ ...prev, timeSlot: slot }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.bookingDate || !formData.timeSlot) {
            setError('Please fill in all fields and select a time slot');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            await addDoc(collection(db, 'bookings'), {
                name: formData.name,
                email: formData.email,
                phone: `${formData.countryCode} ${formData.phone}`,
                bookingDate: formData.bookingDate,
                timeSlot: formData.timeSlot,
                status: 'pending',
                createdAt: Timestamp.now(),
                notes: ''
            });

            // Send booking confirmation email via API
            try {
                await fetch('/api/booking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: `${formData.countryCode} ${formData.phone}`,
                        bookingDate: formData.bookingDate,
                        timeSlot: formData.timeSlot
                    })
                });
            } catch (emailErr) {
                console.error('Email notification failed:', emailErr);
                // Don't fail the booking if email fails
            }

            setIsSuccess(true);

            // Reset form after 3 seconds and close modal
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', countryCode: '+91', bookingDate: '', timeSlot: '' });
                setIsSuccess(false);
                onClose();
            }, 3000);
        } catch (err) {
            setError('Failed to book slot. Please try again.');
            console.error('Booking error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl pointer-events-auto"
                            style={{
                                background: 'linear-gradient(135deg, rgba(12, 33, 21, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%)',
                                border: '1px solid rgba(71, 191, 114, 0.3)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(71, 191, 114, 0.1)'
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:bg-white/10 z-10"
                            >
                                <X className="w-5 h-5 text-gray-400 hover:text-white" />
                            </button>

                            {/* Success State */}
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-12 text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', delay: 0.2 }}
                                        className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                                        style={{ background: 'rgba(71, 191, 114, 0.2)' }}
                                    >
                                        <CheckCircle className="w-10 h-10 text-green-400" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Booking Confirmed!</h3>
                                    <p className="text-gray-400 mb-2">Your consultation slot has been booked.</p>
                                    <p className="text-green-400 font-medium">{formatDate(formData.bookingDate)}</p>
                                    <p className="text-green-400">{formData.timeSlot}</p>
                                    <p className="text-gray-500 text-sm mt-4">We'll send you a confirmation email shortly.</p>
                                </motion.div>
                            ) : (
                                <div className="p-6 md:p-8">
                                    {/* Header */}
                                    <div className="mb-8 text-center">
                                        <div
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                                            style={{
                                                background: 'rgba(71, 191, 114, 0.1)',
                                                border: '1px solid rgba(71, 191, 114, 0.3)'
                                            }}
                                        >
                                            <Calendar className="w-4 h-4 text-green-400" />
                                            <span className="text-sm font-medium text-green-400">30-Minute Consultation</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                            Book Your Free Slot
                                        </h2>
                                        <p className="text-gray-400">
                                            Schedule a call with our team to discuss your project
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Personal Info */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    <User className="w-4 h-4 inline-block mr-2" />
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="John Doe"
                                                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all"
                                                    style={{
                                                        background: 'rgba(255, 255, 255, 0.05)',
                                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    <Phone className="w-4 h-4 inline-block mr-2" />
                                                    Phone Number
                                                </label>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                    <select
                                                        name="countryCode"
                                                        value={formData.countryCode}
                                                        onChange={handleInputChange}
                                                        disabled={isSubmitting}
                                                        className="sm:col-span-1 px-3 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all text-sm"
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
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        placeholder="+91 98765 43210"
                                                        className="sm:col-span-2 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all text-sm"
                                                        style={{
                                                            background: 'rgba(255, 255, 255, 0.05)',
                                                            border: '1px solid rgba(255, 255, 255, 0.1)'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                <Mail className="w-4 h-4 inline-block mr-2" />
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all"
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                                }}
                                            />
                                        </div>

                                        {/* Date Selection */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                <Calendar className="w-4 h-4 inline-block mr-2" />
                                                Select Date
                                            </label>
                                            <input
                                                type="date"
                                                name="bookingDate"
                                                value={formData.bookingDate}
                                                onChange={handleInputChange}
                                                min={getMinDate()}
                                                max={getMaxDate()}
                                                className="w-full px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all cursor-pointer"
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    colorScheme: 'dark'
                                                }}
                                            />
                                            {formData.bookingDate && (
                                                <p className="text-green-400 text-sm mt-2">{formatDate(formData.bookingDate)}</p>
                                            )}
                                        </div>

                                        {/* Time Slot Selection */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-3">
                                                <Clock className="w-4 h-4 inline-block mr-2" />
                                                Select Time Slot
                                            </label>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                                {timeSlots.map((slot) => (
                                                    <button
                                                        key={slot}
                                                        type="button"
                                                        onClick={() => handleTimeSlotSelect(slot)}
                                                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${formData.timeSlot === slot
                                                            ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                                                            : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                                                            }`}
                                                    >
                                                        {slot.split(' - ')[0]}
                                                    </button>
                                                ))}
                                            </div>
                                            {formData.timeSlot && (
                                                <p className="text-green-400 text-sm mt-3">
                                                    Selected: {formData.timeSlot}
                                                </p>
                                            )}
                                        </div>

                                        {/* Error Message */}
                                        {error && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-sm text-center"
                                            >
                                                {error}
                                            </motion.p>
                                        )}

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            style={{
                                                background: 'linear-gradient(135deg, #47BF72 0%, #3aa85f 100%)',
                                                boxShadow: '0 10px 30px rgba(71, 191, 114, 0.3)'
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Booking...
                                                </>
                                            ) : (
                                                <>
                                                    <Calendar className="w-5 h-5" />
                                                    Confirm Booking
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
