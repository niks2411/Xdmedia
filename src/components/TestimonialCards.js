import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      company: "Shiprocket",
      testimonial: "XD MEDIA executed our digital marketing campaign for Shiprocket SHIVIR'24 seamlessly, ensuring smooth delivery with live tracking and competitive pricing. Their efficiency and ability to manage complex campaigns within tight timelines were truly impressive. Highly recommend for businesses looking for reliable execution!",
      reviewer: {
        name: "Muskaan Tandon",
        title: "Senior Director - Marketing, Shiprocket",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format"
      }
    },
    {
      id: 2,
      company: "TechVenture",
      testimonial: "XD MEDIA transformed our digital presence completely. Their comprehensive approach to SEO and web development helped us achieve 300% growth in organic traffic within just 6 months. The team's expertise in modern frameworks and dedication to quality are unmatched.",
      reviewer: {
        name: "Rahul Sharma",
        title: "Founder, TechVenture",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format"
      }
    },
    {
      id: 3,
      company: "GrowthLabs",
      testimonial: "Working with XD MEDIA has been a game-changer for our business. Their performance marketing strategies and analytics insights helped us optimize our conversion rates by 250%. The team is professional, responsive, and delivers exceptional results every time.",
      reviewer: {
        name: "Priya Mehta",
        title: "Marketing Director, GrowthLabs",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face&auto=format"
      }
    },
    {
      id: 4,
      company: "StartupNest",
      testimonial: "The website design and development team at XD MEDIA delivered beyond our expectations. From stunning UI/UX to blazing-fast performance, they built us a website that truly represents our brand and converts visitors into customers. Highly recommend their services!",
      reviewer: {
        name: "Amit Patel",
        title: "CEO, StartupNest",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&auto=format"
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'rgb(12,33,21)' }}>
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2347BF72' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Title and Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-light text-white mb-6 leading-tight tracking-wide">
              The Impact We Deliver
            </h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Our clients don't just work with us, they win with us.
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          {/* Right Column - Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl"
              >
                {/* Company Name */}
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">
                    {currentTestimonial.company}
                  </span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-white text-lg leading-relaxed mb-8">
                  {currentTestimonial.testimonial}
                </blockquote>

                {/* Reviewer Profile */}
                <div className="flex items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-6 border-3 border-green-400 shadow-lg">
                    <img
                      src={currentTestimonial.reviewer.avatar}
                      alt={currentTestimonial.reviewer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xl">
                      {currentTestimonial.reviewer.name}
                    </h4>
                    <p className="text-gray-300 text-base">
                      {currentTestimonial.reviewer.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-green-600 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Black Horizontal Line Separator */}
      {/* <div className="w-full h-px bg-black"></div> */}
    </section>
  );
};

export default TestimonialCards;
