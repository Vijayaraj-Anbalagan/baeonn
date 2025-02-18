import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Store, Globe, Target, Briefcase, Zap, Building, Gamepad
} from 'lucide-react';

const BusinessTypesStrip = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint is typically 1024px
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const businessIcons = [
    { type: "Consumers", icon: <Users className="w-6 h-6" /> },
    { type: "Local Businesses", icon: <Store className="w-6 h-6" /> },
    { type: "Brands", icon: <Briefcase className="w-6 h-6" /> },
    { type: "Digital Platforms", icon: <Globe className="w-6 h-6" /> },
    { type: "Apps and Games", icon: <Gamepad className="w-6 h-6" /> },
    { type: "Advertisers", icon: <Target className="w-6 h-6" /> },
    { type: "Influencers", icon: <Users className="w-6 h-6" /> },
    { type: "Utility Providers", icon: <Zap className="w-6 h-6" /> },
    { type: "Communities", icon: <Building className="w-6 h-6 transform rotate-0" /> },
    { type: "Institutions", icon: <Building className="w-6 h-6 transform rotate-90" /> }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">We Serve Everyone</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Empowering a diverse range of stakeholders across the digital economy
          </p>
        </motion.div>

        <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-2 md:gap-4">
          {businessIcons.map((item, index) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => {
                if (!isLargeScreen) {
                  setHoveredIndex(index === hoveredIndex ? null : index);
                }
              }}
            >
              <div className="flex flex-col items-center justify-center p-3 rounded-xl h-full transition-all duration-300 hover:bg-white hover:shadow-sm">
                <div className="h-10 flex items-center justify-center">
                  {isLargeScreen ? (
                    <motion.div
                      key={`icon-${index}`}
                      animate={{ 
                        scale: hoveredIndex === index ? 1.15 : 1 
                      }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-700"
                    >
                      {item.icon}
                    </motion.div>
                  ) : (
                    <AnimatePresence mode="wait">
                      {hoveredIndex !== index ? (
                        <motion.div
                          key="icon"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-700"
                        >
                          {item.icon}
                        </motion.div>
                      ) : (
                        <motion.h3
                          key="text"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="font-semibold text-xs text-center text-gray-800"
                        >
                          {item.type}
                        </motion.h3>
                      )}
                    </AnimatePresence>
                  )}
                </div>
                <h3 className="font-medium text-xs text-center text-gray-600 mt-2 hidden lg:block">
                  {item.type}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypesStrip;