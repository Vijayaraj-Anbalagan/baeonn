import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Gift, 
  MapPin, 
  Rocket, 
  PenTool, 
  LineChart,
  ChevronRight
} from 'lucide-react';

const HowItWorksSection = () => {
  const flowSteps = {
    shoppers: [
      {
        icon: Search,
        title: "Browse AI-Curated Deals",
        description: "Discover personalized recommendations and exclusive offers"
      },
      {
        icon: Gift,
        title: "Earn & Redeem Rewards",
        description: "Collect points on your favorite brands"
      },
      {
        icon: MapPin,
        title: "Location-Based Perks",
        description: "Experience gamified shopping with local rewards"
      }
    ],
    businesses: [
      {
        icon: Rocket,
        title: "Launch AI Campaigns",
        description: "Create targeted customer acquisition campaigns"
      },
      {
        icon: PenTool,
        title: "Digital Promotions",
        description: "Set up promotional campaigns effortlessly"
      },
      {
        icon: LineChart,
        title: "Track Performance",
        description: "Monitor and optimize with real-time insights"
      }
    ]
  };

  const StepConnector = () => (
    <div className="hidden md:block absolute h-0.5 bg-bay-of-many-100 w-full top-8 left-0 -z-10" />
  );

  return (
    <section id='howit'  className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-bay-of-many-100 text-bay-of-many-800 rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined experience for both shoppers and businesses
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Shoppers Flow */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-bay-of-many-800 mb-12 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-bay-of-many-800 rounded-full"></span>
              For Shoppers
            </h3>
            <div className="relative grid md:grid-cols-3 gap-8">
              <StepConnector />
              {flowSteps.shoppers.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-bay-of-many-800 flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-center">{step.title}</h4>
                    <p className="text-gray-600 text-center">{step.description}</p>
                    {index < 2 && (
                      <ChevronRight className="hidden md:block absolute -right-6 top-6 w-8 h-8 text-bay-of-many-800" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Businesses Flow */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-bay-of-many-800 mb-12 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-bay-of-many-800 rounded-full"></span>
              For Businesses
            </h3>
            <div className="relative grid md:grid-cols-3 gap-8">
              <StepConnector />
              {flowSteps.businesses.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-bay-of-many-800 flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-center">{step.title}</h4>
                    <p className="text-gray-600 text-center">{step.description}</p>
                    {index < 2 && (
                      <ChevronRight className="hidden md:block absolute -right-6 top-6 w-8 h-8 text-bay-of-many-800" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://dashboard.baeonn.com"
            className="inline-flex items-center gap-2 bg-bay-of-many-800 text-white px-8 py-3 rounded-full hover:bg-bay-of-many-900 transition-colors"
          >
            Start Your Journey
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;