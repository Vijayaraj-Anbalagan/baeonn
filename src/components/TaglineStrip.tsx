import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const TaglineStrip = () => {
  const words = ["AI-Commerce", "Enabler"];
  
  return (
    <section className="bg-bay-of-many-800 py-8 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3"
        >
          {words.map((word, index) => (
            <motion.div
              key={word}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeOut"
              }}
              className="flex items-center gap-2"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                {word}
              </h2>
             
            </motion.div>
          ))}
           <Sparkles className="w-6 h-6 text-orange-400" />
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
    </section>
  );
};

export default TaglineStrip;