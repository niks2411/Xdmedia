"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 40, bounce: 0 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 600]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -600]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.3], [10, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.3, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.3], [10, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.3], [-400, 300]), springConfig);
  return (
    <div
      ref={ref}
      className="h-[200vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16 mb-16">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-16 space-x-16">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl leading-tight mb-6 sm:mb-8 tracking-tight">
                  <span className="text-black drop-shadow-lg font-inter font-normal">
                    Get Your UI/UX &
                  </span>
                  <br />
                  <span className="text-black drop-shadow-lg font-fraunces italic">
                    Website Development Started Now   </span>
                </h1>
      <p className="text-base sm:text-lg text-black sm: leading-relaxed font-inter drop-shadow-sm mb-8">
       Your website is the face of your brand. We design and develop modern,<br /> conversion-focused websites with seamless UI/UX that engage and perform.
      </p>
      <div className="hidden lg:block">
        <Link
                       to="/contact"
                       className="text-white px-6 py-3 font-medium uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg"
                       style={{
                         backgroundColor: '#47BF72',
                         borderRadius: '5px'
                         
                       }}
                       onMouseEnter={(e) => e.target.style.backgroundColor = '#3aa85f'}
                       onMouseLeave={(e) => e.target.style.backgroundColor = '#47BF72'}
                     >
                       GET STARTED
                     </Link>
      </div>
    </div>
    
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
      key={product.title}
      className="group/product h-80 w-[25rem] relative shrink-0">
      <a href={product.link} className="block group-hover/product:shadow-xl transition-shadow duration-300">
        <img
          src={product.thumbnail}
          height="400"
          width="400"
          className="object-cover object-left-top absolute h-full w-full inset-0 transition-transform duration-300"
          alt={product.title}
          loading="lazy" />
      </a>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-70 bg-black pointer-events-none transition-opacity duration-300"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};