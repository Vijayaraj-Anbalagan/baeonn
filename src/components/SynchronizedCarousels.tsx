import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  // Business types with images for carousel
  const businessTypes = [
    {
      title: "Consumers",
      desc: "Individuals seeking personalized shopping experiences",
      img: "/images/15.png"
    },
    {
      title: "Digital Platforms",
      desc: "Online marketplaces and digital service providers",
      img: "/images/16.png"
    },
    {
      title: "Local Businesses",
      desc: "Small and medium-sized enterprises in local communities",
      img: "/images/17.png"
    },
  ];

  // Text carousel state and data
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = useMemo(
    () => ["Smarter Shopping", "Powerful Marketing", "Monetizing Networks"],
    []
  );

  // Synchronize both carousels
  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (titleIndex + 1) % titles.length;
      setTitleIndex(nextIndex);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [titleIndex, titles]);

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              AI Powered
            </h1>
            <div className="h-16 md:h-20 flex items-center mb-6 overflow-hidden relative">
              <AnimatePresence mode="wait">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className={`absolute w-full text-4xl md:text-5xl font-semibold text-orange-500 ${
                      titleIndex === index ? "block" : "hidden"
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      titleIndex === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleIndex > index ? -50 : 50, opacity: 0 }
                    }
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: "spring", stiffness: 50 }}
                  >
                    {title}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
            <p className="text-gray-700 text-lg mb-8">
              Transform your business with our advanced AI solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center md:justify-start gap-4">
              <a
                href="https://bae.baeonn.com"
                className="group w-full sm:w-auto bg-bay-of-many-800 text-white px-8 py-3 rounded-full hover:bg-bay-of-many-900 transition-colors flex items-center justify-center gap-2"
              >
                Shop Smartly <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://dashboard.baeonn.com"
                className="w-full sm:w-auto border-2 border-bay-of-many-800 text-bay-of-many-800 px-8 py-3 rounded-full hover:bg-bay-of-many-900 hover:text-white transition-colors"
              >
                Grow with Bae
              </a>
            </div>
          </motion.div>
        </div>

        {/* Carousel Section - Synchronized with text */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 10 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.25 }}
              className="relative w-[80%] h-[300px] sm:h-[400px]"
            >
              <img
                src={businessTypes[titleIndex].img}
                alt={businessTypes[titleIndex].title}
                className="w-full h-full object-cover mix-blend-soft-light"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute inset-0"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;