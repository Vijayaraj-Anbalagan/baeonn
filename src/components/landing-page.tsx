import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Tag, Users, ArrowRight, ChevronDown, ChevronUp, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ChevronRight } from 'lucide-react';
import NumberTicker from './ui/number-ticker';
import AnimatedGradientText from './ui/animated-gradient-text';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const sectionId = '#about'; // Define sectionId

gsap.to(window, {
  duration: 1.5, // Increase to 1.5 or 2 for smoother scrolling
  scrollTo: { y: sectionId, offsetY: 70 },
  ease: 'power1.inOut', // Use a smoother easing function
});

const businessTypes = [
  { title: 'Retail', desc: 'Supermarket, Hypermarket, local shops and boutiques' },
  { title: 'Restaurants', desc: 'Restaurants, cafes, and bars' },
  { title: 'Health and Wellness', desc: 'Gyms, fitness studios, and wellness centres' },
  { title: 'Beauty and Personal Care', desc: 'Salons, barbershops, and skincare clinics' },
  { title: 'Hoteliers', desc: 'Hotels, resorts, and travel-related businesses' },
  { title: 'Entertainment', desc: 'Theaters, cinemas, and recreational facilities' }
];

const features = [
  {
    title: 'Hyperlocal Acquisition',
    description: 'Acquire new customers from every nook and corner',
    icon: Users
  },
  {
    title: 'Hyperlocal Reach',
    description: 'Reach people who cannot be reached otherwise',
    icon: Store
  },
  {
    title: 'Hyperlocal Network',
    description: 'Become a part of the world\'s most hyperlocal network',
    icon: Building2
  }
];

const faqs = [
  {
    question: 'What is BAEONN.com?',
    answer: 'BAEONN is a platform that helps businesses acquire customers hyperlocally.'
  },
  {
    question: 'Is my business eligible to be a part of BAEONN?',
    answer: 'Most local businesses are eligible to join BAEONN. This includes retail stores, restaurants, wellness centers, and more.'
  },
  {
    question: 'How much does it cost to register with BAEONN?',
    answer: 'Registration is free. You only pay for successful customer interactions: ₹1 per click, ₹1 per reminder, and ₹3 per conversion.'
  }
];

function App() {
  const [currentBusinessType, setCurrentBusinessType] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBusinessType((prev) => (prev + 1) % businessTypes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScrollToSection = (sectionId: any) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: 70 }, // Adjust `offsetY` for fixed header height
      ease: 'power2.out',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
   
            <h1 className="text-2xl font-bold text-gray-900">BAEONN</h1>
            <div className="hidden md:flex items-center space-x-8">
            <button
                onClick={() => handleScrollToSection('#about')}
                className="text-gray-600 hover:text-gray-900 nav-link nav-link-ltr"
              >
                What is Baeonn
              </button>
              <button
                onClick={() => handleScrollToSection('#pricing')}
                className="text-gray-600 hover:text-gray-900 nav-link nav-link-ltr"
              >
                Pricing
              </button>
              <a href="https://dashboard.baeonn.com" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
        <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Introducing Baeonn
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Unlock Hyperlocal Customer Acquisition
            </motion.h1>
            <motion.div 
              className="h-24 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                key={currentBusinessType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-gray-600"
              >
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">
                  {businessTypes[currentBusinessType].title}
                </h2>
                <p>{businessTypes[currentBusinessType].desc}</p>
              </motion.div>
            </motion.div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://dashboard.baeonn.com" 
                className="w-full sm:w-auto bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <a 
                href="#demo" 
                className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is BAEONN? Section */}
<section id="about" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <motion.div 
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        What is BAEONN?
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        BAEONN is a hyperlocal customer acquisition and retention platform that connects businesses with customers through targeted promotions and incentives. 
        Our mission is to empower businesses by offering cost-effective solutions for engaging with customers at a local level, unlocking growth potential, and building lasting relationships.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <motion.div
        className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Building2 className="w-10 h-10 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">For Businesses</h3>
        <p className="text-gray-600">
          List your campaigns, reach new customers, and grow your local presence effectively through our intuitive platform.
        </p>
      </motion.div>

      {/* Feature 2 */}
      <motion.div
        className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Store className="w-10 h-10 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Hyperlocal Solutions</h3>
        <p className="text-gray-600">
          Use hyperlocal targeting to reach customers in specific areas, ensuring your promotions are relevant and impactful.
        </p>
      </motion.div>

      {/* Feature 3 */}
      <motion.div
        className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Tag className="w-10 h-10 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Engagement</h3>
        <p className="text-gray-600">
          Keep your customers engaged with personalized offers, loyalty programs, and timely reminders.
        </p>
      </motion.div>

      {/* Feature 4 */}
      <motion.div
        className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Users className="w-10 h-10 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
        <p className="text-gray-600">
          Transparent pricing with zero hidden costs. Pay only for successful customer interactions.
        </p>
      </motion.div>

      {/* Feature 5 */}
      <motion.div
        className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <ChevronDown className="w-10 h-10 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Ease of Use</h3>
        <p className="text-gray-600">
          With a user-friendly dashboard, easily track campaign performance, customer data, and ROI in real-time.
        </p>
      </motion.div>

      {/* Feature 6 */}
      <motion.div
        className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <ArrowRight className="w-10 h-10 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Platform</h3>
        <p className="text-gray-600">
          Suitable for businesses of all sizes, from local shops to national brands, with scalable solutions.
        </p>
      </motion.div>
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Our Impact in Numbers
      </h2>
      <p className="text-lg text-gray-600 mt-3">
        See how BAEONN is helping businesses grow and succeed locally.
      </p>
    </div>

    {/* Statistics */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-sm text-center"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h3 className="text-4xl font-bold text-gray-900 mb-2"> <NumberTicker value={150} />+</h3>
        <p className="text-gray-600">Businesses Onboard</p>
      </motion.div>

      <motion.div
        className="bg-white p-8 rounded-2xl shadow-sm text-center"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Store className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h3 className="text-4xl font-bold text-gray-900 mb-2"><NumberTicker value={300} />+</h3>
        <p className="text-gray-600">Stores Onboard</p>
      </motion.div>

      <motion.div
        className="bg-white p-8 rounded-2xl shadow-sm text-center"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Tag className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h3 className="text-4xl font-bold text-gray-900 mb-2"><NumberTicker value={200} />+</h3>
        <p className="text-gray-600">Deals Listed</p>
      </motion.div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Whats in it for You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Simple, Transparent Pricing
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-8">
          <div className="space-y-4">
            {[
          { label: 'List Campaigns', value: 'Free on BAE Pool', highlight: true },
          { label: 'Cost Per Click', value: '₹1' },
          { label: 'Cost Per Reminder', value: '₹1' },
          { label: 'Cost Per Conversion', value: '₹3' },
          { label: 'First 100 Coupons', value: 'Free', highlight: true },
            ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between py-4 border-b last:border-b-0"
            whileHover={{ scale: 1.05, translateY: -5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-gray-600">{item.label}</span>
            <span className={`font-semibold ${item.highlight ? 'text-green-500' : ''}`}>{item.value}</span>
          </motion.div>
            ))}
          </div>
        </div>
        <div className="p-8 bg-gray-50">
          <a 
            href="#campaign" 
            className="block w-full bg-orange-500 text-white text-center px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
          >
            Initiate a Targeted Campaign
          </a>
        </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About BAEONN</h3>
              <p className="text-gray-400">
                BAEONN is a platform for hyperlocal customer acquisition, helping businesses grow their customer base effectively.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <a href="tel:+917695841500" className="flex items-center text-gray-400 hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 7695841500
                </a>
                <a href="mailto:contact@baeonn.com" className="flex items-center text-gray-400 hover:text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@baeonn.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BAEONN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;