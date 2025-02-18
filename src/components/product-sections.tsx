import React from 'react';
import { motion } from 'framer-motion';
import {  Smartphone, Share2, Gift, Target, ChartBar, Users, Gamepad2 } from 'lucide-react';
import Image from 'next/image';

// Product Introduction Component
const ProductIntro = () => {
  return (
    <section id='products' className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1 bg-bay-of-many-100 text-bay-of-many-800 rounded-full text-sm font-medium mb-4"
          >
            Our Products
          </motion.span>
        </motion.div>

        {/* Products Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* BAE Card */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden shadow-lg bg-white group hover:shadow-xl transition-shadow"
          >
            <div className="bg-bay-of-many-800 p-8 text-white">
                <motion.div 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                >
                <Image src="/bae.png" alt="BAE Logo" width={240} height={240} className="mb-4" />
                <h3 className="text-3xl font-bold mb-2">BAE – Your AI Shopping <br /> Assistant</h3>
                <p className="text-lg opacity-90">Smart. Personalized. Rewarding.</p>
                </motion.div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-600 mb-6">Your Pokémon GO for rewards is here.</p>
              <div className="space-y-6 mb-8">
                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Smartphone className="w-6 h-6 text-bay-of-many-800 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered Deals</h4>
                    <p className="text-gray-600">Discover AI-curated offers tailored just for you</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Share2 className="w-6 h-6 text-bay-of-many-800 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Personalized Recommendations</h4>
                    <p className="text-gray-600">Tailor your shopping experience effortlessly</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Gift className="w-6 h-6 text-bay-of-many-800 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Earn & Redeem Rewards </h4>
                    <p className="text-gray-600">Earn rewards with every purchase</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Gamepad2 className="w-6 h-6 text-bay-of-many-800 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Gamified, Location-Based Offers</h4>
                    <p className="text-gray-600">Shop, play, and earn rewards</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-bay-of-many-800 text-white rounded-xl font-semibold hover:bg-bay-of-many-900 transition-colors"
                onClick={() => window.open("https://bae.baeonn.com", "_blank")}
              >
                Sign Up Now
              </motion.button>
            </div>
          </motion.div>

          {/* BAE Business Card */}
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden shadow-lg bg-bay-of-many-800 group hover:shadow-xl transition-shadow"
            >
            <div className="bg-white p-8 text-bay-of-many-800">
              <motion.div 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              >
              <Image src="/baebusiness.png" alt="BAE Logo" width={70} height={70} className="mb-4" />
              <h3 className="text-3xl font-bold mb-2">BAE Business – AI Customer Assistant</h3>
              <p className="text-lg opacity-90">Reach. Retain. Reward. Monetize.</p>
              </motion.div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-300 mb-6">The YouTube for businesses is here.</p>
              <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Target className="w-6 h-6 text-white mt-1" />
                <div>
                <h4 className="font-semibold mb-1 text-white">Precision Targeting</h4>
                <p className="text-gray-300">Engage customers with pinpoint accuracy</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <ChartBar className="w-6 h-6 text-white mt-1" />
                <div>
                <h4 className="font-semibold mb-1 text-white">Automated Marketing</h4>
                <p className="text-gray-300">Streamline your campaigns effortlessly</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Users className="w-6 h-6 text-white mt-1" />
                <div>
                <h4 className="font-semibold mb-1 text-white">Real-Time Analytics</h4>
                <p className="text-gray-300">Gain insights with real-time data</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Gift className="w-6 h-6 text-white mt-1" />
                <div>
                <h4 className="font-semibold mb-1 text-white">Monetize by Distributing Offers</h4>
                <p className="text-gray-300">Distribute offers and earn commissions</p>
                </div>
              </motion.div>
              </div>
              
              <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-white text-bay-of-many-800 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => window.open("https://dashboard.baeonn.com", "_blank")}
              >
              Join the Revolution
              </motion.button>
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

// What's In It For You Component (Benefits Section)
const BenefitsSection = () => {
  return (
    <section id='whyus'  className="py-20 bg-white">
      <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Solutions?</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Benefits for BAE */}
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 rounded-2xl p-8"
        >
        <h3 className="text-2xl font-bold mb-6 text-bay-of-many-800">Why BAE?</h3>
        <ul className="space-y-4 mb-8">
          <motion.li 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
          >
          <span>✔️ Smart deals tailored to you</span>
          </motion.li>
          <motion.li 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
          >
          <span>✔️ Earn & Redeem Rewards</span>
          </motion.li>
          <motion.li 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
          >
          <span>✔️ Gamified Shopping</span>
          </motion.li>
        </ul>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="w-full px-8 py-3 bg-bay-of-many-800 text-white rounded-full font-semibold"
          onClick={() => window.open("https://bae.baeonn.com", "_blank")}
        >
          Start Shopping
        </motion.button>
        </motion.div>

        {/* Benefits for BAE Business */}
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 rounded-2xl p-8"
        >
        <h3 className="text-2xl font-bold mb-6 text-bay-of-many-800">Why BAE Business?</h3>
        <ul className="space-y-4 mb-8">
          <motion.li 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
          >
          <span>🚀 AI-Powered Marketing</span>
          </motion.li>
          <motion.li 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
          >
          <span>📢 Higher Retention & Repeat Customers</span>
          </motion.li>
          <motion.li 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
          >
          <span>💰 Monetize your network</span>
          </motion.li>
        </ul>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="w-full px-8 py-3 bg-bay-of-many-800 text-white rounded-full font-semibold"
          onClick={() => window.open("https://dashboard.baeonn.com", "_blank")}
        >
          Get Started
        </motion.button>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export { ProductIntro, BenefitsSection };
