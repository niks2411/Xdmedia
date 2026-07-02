import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Briefcase
} from 'lucide-react';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { countries } from '../lib/countries';
import Canonical from '../components/SEO/Canonical';

// Time slots: 10 AM – 6 PM, 30-min intervals
const TIME_SLOTS = [
  '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM',
  '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM',
];

const SERVICES = [
  'SEO & Search Growth',
  'Website Development',
  'Performance Marketing',
  'Branding & Positioning',
  'White-Label SEO',
  'White-Label Marketing',
  'AI & Automation Tools',
  'Growth Consulting',
];

const getMinDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

const getMaxDate = () => {
  const max = new Date();
  max.setDate(max.getDate() + 30);
  return max.toISOString().split('T')[0];
};

const formatDateNice = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const BookSlot = () => {
  const [step, setStep] = useState(1); // 1 = info, 2 = date/time, 3 = confirm
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    service: '',
    message: '',
    bookingDate: '',
    timeSlot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleTimeSlot = (slot) => {
    setFormData((prev) => ({ ...prev, timeSlot: slot }));
    setError('');
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) return 'Please enter your full name.';
    if (!formData.email.trim()) return 'Please enter your email address.';
    if (!formData.phone.trim()) return 'Please enter your phone number.';
    if (!formData.service) return 'Please select a service.';
    return '';
  };

  const validateStep2 = () => {
    if (!formData.bookingDate) return 'Please select a date.';
    if (!formData.timeSlot) return 'Please select a time slot.';
    return '';
  };

  const nextStep = () => {
    if (step === 1) {
      const err = validateStep1();
      if (err) { setError(err); return; }
    }
    if (step === 2) {
      const err = validateStep2();
      if (err) { setError(err); return; }
    }
    setError('');
    setStep((s) => s + 1);
  };

  const prevStep = () => { setError(''); setStep((s) => s - 1); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'bookings'), {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        service: formData.service,
        message: formData.message,
        bookingDate: formData.bookingDate,
        timeSlot: formData.timeSlot,
        status: 'pending',
        createdAt: Timestamp.now(),
        sourcePage: 'Book a Slot Page',
      });

      try {
        await fetch('/api/booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            service: formData.service,
            bookingDate: formData.bookingDate,
            timeSlot: formData.timeSlot,
          }),
        });
      } catch (emailErr) {
        console.error('Email notification failed:', emailErr);
      }

      setIsSuccess(true);
    } catch (err) {
      console.error('Booking error:', err);
      setError('Failed to confirm your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all text-sm';
  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
  };

  const stepLabels = ['Your Info', 'Pick a Slot', 'Confirm'];

  return (
    <div className="min-h-screen" style={{ background: '#080e0a' }}>
      <Helmet>
        <title>Book a Free Consultation Slot | XD MEDIA</title>
        <meta
          name="description"
          content="Schedule a free 30-minute strategy call with the XD MEDIA team. Choose your preferred date and time slot and let's discuss how to grow your brand."
        />
      </Helmet>
      <Canonical path="/book-a-slot" />

      {/* ── Background glows ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(71,191,114,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 px-4 pt-6 pb-8">
        <div className="max-w-2xl mx-auto">

          {/* ── Compact Page Header ── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5"
          >
            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-1.5"
                style={{ background: 'rgba(71,191,114,0.12)', color: '#47BF72', border: '1px solid rgba(71,191,114,0.25)' }}
              >
                <Sparkles className="w-3 h-3" />
                Free 30-Min Strategy Call
              </span>
              <h1 className="text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                Book Your Free Strategy Session
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                No fluff, no pressure — just a focused conversation on growing your brand.
              </p>
            </div>
          </motion.div>

          <div className="max-w-2xl mx-auto">

            {/* ── Booking Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(12,33,21,0.95) 0%, rgba(10,10,10,0.98) 100%)',
                  border: '1px solid rgba(71,191,114,0.2)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.4), 0 0 50px rgba(71,191,114,0.05)',
                }}
              >
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    /* ── Success ── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(71,191,114,0.15)', border: '2px solid rgba(71,191,114,0.5)' }}
                      >
                        <CheckCircle className="w-12 h-12 text-green-400" />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-white mb-3">You're Booked! 🎉</h2>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        Your consultation slot has been confirmed. We'll send a calendar invite and confirmation to <span className="text-green-400">{formData.email}</span>.
                      </p>
                      <div
                        className="inline-block rounded-2xl p-5 text-left"
                        style={{ background: 'rgba(71,191,114,0.08)', border: '1px solid rgba(71,191,114,0.2)' }}
                      >
                        <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                          <Calendar className="w-4 h-4" /> {formatDateNice(formData.bookingDate)}
                        </div>
                        <div className="flex items-center gap-2 text-green-400 font-semibold">
                          <Clock className="w-4 h-4" /> {formData.timeSlot}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-6">We look forward to speaking with you!</p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {/* ── Step Indicator ── */}
                      <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                        <div className="flex items-center justify-between">
                          {stepLabels.map((label, i) => {
                            const stepNum = i + 1;
                            const isActive = step === stepNum;
                            const isDone = step > stepNum;
                            return (
                              <div key={i} className="flex items-center gap-2 flex-1">
                                <div className="flex items-center gap-2">
                                  <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                                    style={{
                                      background: isDone
                                        ? '#47BF72'
                                        : isActive
                                        ? 'rgba(71,191,114,0.2)'
                                        : 'rgba(255,255,255,0.05)',
                                      border: isActive
                                        ? '2px solid #47BF72'
                                        : isDone
                                        ? '2px solid #47BF72'
                                        : '2px solid rgba(255,255,255,0.1)',
                                      color: isDone ? 'white' : isActive ? '#47BF72' : '#555',
                                    }}
                                  >
                                    {isDone ? '✓' : stepNum}
                                  </div>
                                  <span
                                    className="text-xs font-medium hidden sm:block"
                                    style={{ color: isActive ? '#47BF72' : isDone ? '#6ee7b7' : '#555' }}
                                  >
                                    {label}
                                  </span>
                                </div>
                                {i < stepLabels.length - 1 && (
                                  <div
                                    className="flex-1 h-px mx-2 transition-all duration-500"
                                    style={{ background: isDone ? '#47BF72' : 'rgba(255,255,255,0.08)' }}
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* ── Form Body ── */}
                      <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                          {/* Step 1: Personal Info */}
                          {step === 1 && (
                            <motion.div
                              key="step1"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="p-8 space-y-5"
                            >
                              <div>
                                <h3 className="text-white text-xl font-semibold mb-1">Tell us about yourself</h3>
                                <p className="text-gray-500 text-sm">We'll use this to prepare your consultation.</p>
                              </div>

                              {/* Name */}
                              <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2 flex items-center gap-1.5">
                                  <User className="w-3.5 h-3.5" /> Full Name *
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder="John Doe"
                                  className={inputClass}
                                  style={inputStyle}
                                />
                              </div>

                              {/* Email */}
                              <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2 flex items-center gap-1.5">
                                  <Mail className="w-3.5 h-3.5" /> Email Address *
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="john@company.com"
                                  className={inputClass}
                                  style={inputStyle}
                                />
                              </div>

                              {/* Phone */}
                              <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2 flex items-center gap-1.5">
                                  <Phone className="w-3.5 h-3.5" /> Phone Number *
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                  <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className="col-span-1 px-3 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all"
                                    style={{ ...inputStyle, color: 'rgba(255,255,255,0.7)' }}
                                  >
                                    {countries.map((c, idx) => (
                                      <option key={`${c.name}-${idx}`} value={c.code} style={{ background: '#0d1f12', color: 'white' }}>
                                        {c.name} ({c.code})
                                      </option>
                                    ))}
                                  </select>
                                  <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="98765 43210"
                                    className={`col-span-2 ${inputClass}`}
                                    style={inputStyle}
                                  />
                                </div>
                              </div>

                              {/* Service */}
                              <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2 flex items-center gap-1.5">
                                  <Briefcase className="w-3.5 h-3.5" /> Service Interested In *
                                </label>
                                <select
                                  name="service"
                                  value={formData.service}
                                  onChange={handleChange}
                                  className={inputClass}
                                  style={{ ...inputStyle, color: formData.service ? 'white' : 'rgba(255,255,255,0.3)' }}
                                >
                                  <option value="" disabled style={{ background: '#0d1f12', color: '#888' }}>Select a service…</option>
                                  {SERVICES.map((s) => (
                                    <option key={s} value={s} style={{ background: '#0d1f12', color: 'white' }}>{s}</option>
                                  ))}
                                </select>
                              </div>

                              {/* Message */}
                              <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2 flex items-center gap-1.5">
                                  <MessageSquare className="w-3.5 h-3.5" /> Tell us about your project <span className="text-gray-600">(optional)</span>
                                </label>
                                <textarea
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  placeholder="What are your current challenges and goals?"
                                  rows={3}
                                  className={`${inputClass} resize-none`}
                                  style={inputStyle}
                                />
                              </div>
                            </motion.div>
                          )}

                          {/* Step 2: Date & Time */}
                          {step === 2 && (
                            <motion.div
                              key="step2"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="p-8 space-y-6"
                            >
                              <div>
                                <h3 className="text-white text-xl font-semibold mb-1">Pick a date & time</h3>
                                <p className="text-gray-500 text-sm">Slots are available Mon–Sat, 10 AM – 6 PM IST.</p>
                              </div>

                              {/* Date Picker */}
                              <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2 flex items-center gap-1.5">
                                  <Calendar className="w-3.5 h-3.5" /> Select Date *
                                </label>
                                <input
                                  type="date"
                                  name="bookingDate"
                                  value={formData.bookingDate}
                                  onChange={handleChange}
                                  min={getMinDate()}
                                  max={getMaxDate()}
                                  className={inputClass}
                                  style={{ ...inputStyle, colorScheme: 'dark' }}
                                />
                                {formData.bookingDate && (
                                  <p className="text-green-400 text-xs mt-2 flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" /> {formatDateNice(formData.bookingDate)}
                                  </p>
                                )}
                              </div>

                              {/* Time Slots Grid */}
                              <div>
                                <label className="block text-xs font-medium text-gray-400 mb-3 flex items-center gap-1.5">
                                  <Clock className="w-3.5 h-3.5" /> Select Time Slot *
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                  {TIME_SLOTS.map((slot) => {
                                    const isSelected = formData.timeSlot === slot;
                                    return (
                                      <button
                                        key={slot}
                                        type="button"
                                        onClick={() => handleTimeSlot(slot)}
                                        className="px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200"
                                        style={{
                                          background: isSelected
                                            ? 'linear-gradient(135deg, #47BF72, #3aa85f)'
                                            : 'rgba(255,255,255,0.04)',
                                          border: isSelected
                                            ? '1px solid #47BF72'
                                            : '1px solid rgba(255,255,255,0.08)',
                                          color: isSelected ? 'white' : '#9ca3af',
                                          boxShadow: isSelected ? '0 4px 15px rgba(71,191,114,0.25)' : 'none',
                                          transform: isSelected ? 'scale(1.04)' : 'scale(1)',
                                        }}
                                      >
                                        {slot}
                                      </button>
                                    );
                                  })}
                                </div>
                                {formData.timeSlot && (
                                  <p className="text-green-400 text-xs mt-3 flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" /> Selected: {formData.timeSlot}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          )}

                          {/* Step 3: Confirm */}
                          {step === 3 && (
                            <motion.div
                              key="step3"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="p-8 space-y-6"
                            >
                              <div>
                                <h3 className="text-white text-xl font-semibold mb-1">Review & Confirm</h3>
                                <p className="text-gray-500 text-sm">Double-check your details before confirming.</p>
                              </div>

                              {/* Summary Card */}
                              <div
                                className="rounded-2xl p-6 space-y-4"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                              >
                                {[
                                  { icon: User, label: 'Name', value: formData.name },
                                  { icon: Mail, label: 'Email', value: formData.email },
                                  { icon: Phone, label: 'Phone', value: `${formData.countryCode} ${formData.phone}` },
                                  { icon: Briefcase, label: 'Service', value: formData.service },
                                  { icon: Calendar, label: 'Date', value: formatDateNice(formData.bookingDate) },
                                  { icon: Clock, label: 'Time', value: formData.timeSlot },
                                ].map(({ icon: Icon, label, value }) => (
                                  <div key={label} className="flex items-start gap-3">
                                    <div
                                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                      style={{ background: 'rgba(71,191,114,0.12)' }}
                                    >
                                      <Icon className="w-4 h-4 text-green-400" />
                                    </div>
                                    <div>
                                      <div className="text-gray-500 text-xs">{label}</div>
                                      <div className="text-white text-sm font-medium">{value}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {formData.message && (
                                <div
                                  className="rounded-xl p-4"
                                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                                >
                                  <p className="text-gray-500 text-xs mb-1">Your message</p>
                                  <p className="text-gray-300 text-sm leading-relaxed">{formData.message}</p>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* ── Error ── */}
                        {error && (
                          <motion.p
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="px-8 text-red-400 text-sm text-center"
                          >
                            {error}
                          </motion.p>
                        )}

                        {/* ── Navigation Buttons ── */}
                        <div className="px-8 pb-8 pt-4 flex gap-3">
                          {step > 1 && (
                            <button
                              type="button"
                              onClick={prevStep}
                              className="flex-1 py-4 rounded-xl font-medium text-gray-400 transition-all duration-300 hover:text-white text-sm"
                              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                              Back
                            </button>
                          )}

                          {step < 3 ? (
                            <button
                              type="button"
                              onClick={nextStep}
                              className="flex-1 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm"
                              style={{
                                background: 'linear-gradient(135deg, #47BF72 0%, #3aa85f 100%)',
                                boxShadow: '0 10px 30px rgba(71,191,114,0.3)',
                              }}
                            >
                              Continue <ArrowRight className="w-4 h-4" />
                            </button>
                          ) : (
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-1 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                              style={{
                                background: 'linear-gradient(135deg, #47BF72 0%, #3aa85f 100%)',
                                boxShadow: '0 10px 30px rgba(71,191,114,0.3)',
                              }}
                            >
                              {isSubmitting ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> Confirming…</>
                              ) : (
                                <><Calendar className="w-5 h-5" /> Confirm Booking</>
                              )}
                            </button>
                          )}
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
